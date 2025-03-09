import prismadb from "../lib/PrismaClient.js";
import { ApiError } from "../utils/handleApiError.js";
import { deleteFromCloudinary, uploadToCloudinary } from "../utils/utility.js";

export const updateUser = async (req, res) => {
	const { bio, name } = req.body;

	const avatarPath = req?.file?.path;

	const userId = req._id;

	const userProfile = await prismadb.profile.findUnique({
		where: {
			userId: userId,
		},
	});

	if (!userProfile) {
		throw new ApiError(404, "non profile found");
	}

	if (profilePath && userProfile.avatar) {
		await deleteFromCloudinary(userProfile.avatar.public_id);
	}

	const result = await uploadToCloudinary(avatarPath);

	const userprofile = await prismadb.profile.update({
		where: {
			userId,
		},
		data: {
			bio,
			name,
			avatar: result,
		},
	});

	return res.status(200).json({
		success: true,
		message: "User Updated ..!",
		userprofile,
	});
};

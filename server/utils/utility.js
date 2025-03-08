import { v2 as cloudinary } from "cloudinary";
const uploadToCloudinary = async (file) => {
	const result = await cloudinary.uploader.upload(file, {
		resource_type: "image",
	});
	const profile = {
		url: result.secure_url,
		public_id: result.public_id,
	};
	return profile;
};

const deleteFromCloudinary = async (public_id) => {
	await cloudinary.uploader.destroy(public_id);
};

export { uploadToCloudinary, deleteFromCloudinary };

import { v2 as cloudinary } from "cloudinary";
const uploadToCloudinary = async (pathname) => {
	if(!pathname){
		return undefined;
	}

	const result = await cloudinary.uploader.upload(pathname, {
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

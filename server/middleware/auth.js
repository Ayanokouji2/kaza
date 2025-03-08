import { JWT_SECRET_KEY } from "../constant/config.js"
import { ApiError } from "../utils/handleApiError.js";
import JWT from 'jsonwebtoken'

export const protectRoute = async (req, _, next) => {
	const secret = JWT_SECRET_KEY;
	try {
		const token = req.cookies?.token || req.header("Authorization")?.replace("Bearer ","");

		if (!token) {
			throw new ApiError(400, "User not logged in");
		}

		const payload = JWT.verify(token, secret);
		if (!payload) {
			throw new ApiError(400, "Invalid token");
		}

		req._id = payload._id;
		req.username = payload.username

		next();
	} catch (err) {
		next(err);
	}
};

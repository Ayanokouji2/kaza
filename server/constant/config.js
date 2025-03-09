import dotenv from "dotenv"
dotenv.config();
const PORT = process.env.PORT || 6000 ;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const CLOUD_NAME = process.env.CLOUD_NAME;
const CLOUD_API_KEY = process.env.CLOUD_API_KEY;
const CLOUD_API_SECRET = process.env.CLOUD_API_SECRET;


const cookieOptions = {
	httpOnly: true,
	secure: process.env.NODE_ENV === "production",
	sameSite: "lax",
	maxAge: 1000 * 60 * 30,
	expires: new Date(Date.now() + 1000 * 60 * 30),
};

export {
	PORT,
	JWT_SECRET_KEY,
	cookieOptions,
	CLOUD_NAME,
	CLOUD_API_KEY,
	CLOUD_API_SECRET,
};

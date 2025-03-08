export const PORT = 5000 || process.env.PORT;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const cookieOptions = {
	httpOnly: true,
	secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
	maxAge: 1000 * 60 * 30,
    expires: new Date(Date.now() + 1000 * 60 * 30)
};

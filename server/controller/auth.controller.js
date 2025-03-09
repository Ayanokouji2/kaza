import prismadb from "../lib/PrismaClient.js";
import bcrypt from "bcrypt";
import { ApiError } from "../utils/handleApiError.js";
import JWT from "jsonwebtoken";
import { cookieOptions, JWT_SECRET_KEY } from "../constant/config.js";

export const login = async (req, res) => {
	const { email, password, username } = req.body;

	const user = await prismadb.user.findFirst({
		where: {
			OR: [{ username }, { email }],
		},
	});

	if (!user) throw new ApiError(401, "signUp first");

	const isCorrectPassword = await bcrypt.compare(password, user.password);
	if (!isCorrectPassword) throw new ApiError(401, "Invalid credentials");

    console.log(user.username, "the user frm logni")

	const token = JWT.sign(
		{
			_id: user?.id,
			username: user.username,
		},
		JWT_SECRET_KEY
	);

	res.cookie("token", token, cookieOptions);
	return res.status(200).json({
		sucess: true,
		message: "User Successfully LoggedIn ... !",
		token,
		user,
	});
};

export const signup = async (req, res) => {
	const { username, email, password, name } = req.body;

	const user = await prismadb.user.findFirst({
		where: {
			OR: [{ email }, { username }],
		},
	});

	if (user) {
		throw new ApiError(400, "Email or Username already exists");
	}

	const hashPassword = await bcrypt.hash(password, 10);

	const newUser = await prismadb.user.create({
		data: {
			email,
			username,
			password: hashPassword,
			Profile: {
				create: {
					name
				},
			},
		},
		select: {
			id: true,
			username: true,
			email: true,
			Profile: {
                select: {name: true}
            },
		},
	});

	return res.status(201).json({
		success: true,
		message: `Welcome ${newUser.username}`,
		user: newUser,
	});
};

export const logout = async (req, res) => {
	res.cookie("token", "", { ...cookieOptions, maxAge: 0 });
	return res.status(200).json({
		success: true,
		message: "You have been logged out",
	});
};

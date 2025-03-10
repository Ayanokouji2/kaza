import { Router } from "express";
import { protectRoute } from "../middleware/auth.js";
import asyncHandler from "../utils/asyncHandler.js";
import { updateUser } from "../controller/user.controller.js";
import validateRequest from "../middleware/validator.js";
import upload from "../middleware/multer.js";
import updateUserSchema from "../schema/updateUser.js"

const userRouter = Router();


userRouter.use(protectRoute);
userRouter
	.route("/")
	.patch(
		validateRequest(updateUserSchema),
		upload.single("avatar"),
		asyncHandler(updateUser)
	);

export default userRouter;

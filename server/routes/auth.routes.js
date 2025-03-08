import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { login, signup, logout } from "../controller/auth.controller.js";
import validateRequest from "../middleware/validator.js";
import loginSchema from "../schema/login.js";
import signupSchema from "../schema/signup.js";

const authRouter = Router();

authRouter
  .route("/login")
  .post(validateRequest(loginSchema), asyncHandler(login));

authRouter
  .route("/signup")
  .post(validateRequest(signupSchema), asyncHandler(signup));

authRouter.route("/logout").get(asyncHandler(logout));

export default authRouter;

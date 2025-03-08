import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import { login, signup, logout } from '../controller/auth.controller.js'
const authRouter = Router();

authRouter
    .route("/login")
    .post(asyncHandler(login))

authRouter
    .route('/signup')
    .post(asyncHandler(signup))
    
authRouter
    .route('/logout')
    .get(asyncHandler(logout))


export default authRouter;
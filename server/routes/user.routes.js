import { Router } from 'express'
import { protectRoute } from '../middleware/auth.js'
import asyncHandler from '../utils/asyncHandler.js';
import { updateUser } from '../controller/user.controller.js';

const userRouter = Router();


userRouter
    .use(protectRoute)
    .route("/")
    .patch(asyncHandler(updateUser))



export default userRouter;
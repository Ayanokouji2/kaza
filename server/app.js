import express from 'express';
import authRouter from './routes/auth.routes.js';
import { handleApiError } from './middleware/errorhandle.js';
import userRouter from './routes/user.routes.js';
import { v2 as cloudinary } from 'cloudinary';
import { CLOUD_API_KEY, CLOUD_API_SECRET, CLOUD_NAME } from './constant/config.js';
import cookieParser from 'cookie-parser';

const app = express();

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET
})

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

app.use(handleApiError)

export default app;
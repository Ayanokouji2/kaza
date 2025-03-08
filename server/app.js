import express from 'express';
import authRouter from './routes/auth.routes.js';
import { handleApiError } from './middleware/errorhandle.js';
import userRouter from './routes/user.routes.js';

const app = express();

app.use(express.json());


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);


app.use(handleApiError)

export default app;
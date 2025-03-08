import express from 'express';
import { protectRoute } from './middleware/auth';
import authRouter from './routes/auth.routes';

const app = express();

app.use(express.json());


app.use(protectRoute);
app.use("/api/v1/auth", authRouter)

export default app;
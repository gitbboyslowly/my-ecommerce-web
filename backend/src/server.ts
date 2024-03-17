import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import dotenv from 'dotenv';
import { dbConnect } from './configs/database.config';

dotenv.config();
dbConnect();
const app = express();
const STATIC_SITE_URL = process.env.STATIC_URL;

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: ['http://localhost:4200', `${STATIC_SITE_URL}`],
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

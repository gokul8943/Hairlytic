import express, { Request, Response } from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import ConnectDB from "./config/dbConnection";
import userRouter from "./routers/userRoutes";
import imageRouter from "./routers/imageRoutes";

dotenv.config()
const app = express()


const Port = process.env.PORT || 3000

ConnectDB()
const corsOptions = {
origin: ['http://localhost:5173', 'http://localhost:5174'],
credentials: true,
methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
};

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));
app.use(cors(corsOptions))

app.use('/user',userRouter)
app.use('/generate',imageRouter)

app.listen(Port, () => {
        console.log(`http://localhost:${Port}`);
})
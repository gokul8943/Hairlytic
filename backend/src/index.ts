import express, { Request, Response } from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import ConnectDB from "./config/dbConnection";

dotenv.config()
const app = express()


const Port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

ConnectDB()


app.listen(Port, () => {
        console.log(`http://localhost:${Port}`);
})
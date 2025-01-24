import express, { Request, Response } from "express";


const app = express()

const Port = process.env.PORT || 3000

app.listen(Port ,()=>{
        console.log(`http://localhost:${Port}`);
})
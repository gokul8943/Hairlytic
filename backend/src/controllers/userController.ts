import mongoose from "mongoose";
import { Request, Response, Express } from "express";
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'
import userModel from "../models/User/userModel";
import jwt from 'jsonwebtoken'

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ success: false, message: "Missing required fields" });
            return;
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            res.status(409).json({ success: false, message: "Email is already registered" });
            return;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({ name, email, password: hashedPassword });
        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
            expiresIn: "1d",
        });

        res.status(201).json({
            success: true,
            token,
            user: { id: user._id, name: user.name, email: user.email },
        });
    } catch (error: any) {
        console.error("Error during registration:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })

        if (!user) {
            return res.status(400).json({ message: "User not found" })
        }

        const isMatch = await bcrypt.compare(password, user.password as string)
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string)
            res.status(200).json({ sucess: true, token, user: { name: user.name } })
        } else {
            return res.status(200).json({ message: "login success" })
        }
    } catch (error: any) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" })
    }
}

export const userCredits = async (req: Request, res: Response) => {
    try {
        const {userId} = req.body
        const user:any = await userModel.findById(userId)
        res.status(200).json({success:true,credits:user.creditBalance, user:{name:user.name}})
    } catch (error:any) {
        console.log((error))
        res.json({success:false,message:error.message})
    }
}
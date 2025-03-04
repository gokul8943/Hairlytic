import axios from "axios";
import { Request, Response } from "express";
import userModel from "../models/User/userModel";

const generateImage = async (req: Request, res: Response) => {
    try {
        const { prompt, userId, image } = req.body;

        if (!prompt || !image || !userId) {
            return res.status(400).json({ success: false, message: "Prompt, image, and userId are required" });
        }

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        if ((user.creditBalance as number) <= 0) {
            return res.status(400).json({ success: false, message: "Not enough credits" });
        }

       
        const formData = new FormData();
        formData.append("prompt", prompt);
        formData.append("image", image);

        
        const { data } = await axios.post('https://clipdrop-api.co/reimagine/v1/reimagine', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
                'Content-Type': 'multipart/form-data',
            },
            responseType: 'arraybuffer',
        });

        
        const imageBuffer = Buffer.from(data, 'binary').toString('base64');
        const resultImage = `data:image/png;base64,${imageBuffer}`;

        user.creditBalance as number - 1;
        await user.save();

        // Return the result
        res.json({
            success: true,
            message: 'Image generated successfully',
            creditBalance: user.creditBalance,
            resultImage,
        });

    } catch (error: any) {
        console.error("Error generating image:", error);
        res.status(500).json({ success: false, message: error.message || "Internal server error" });
    }
};

export default generateImage;
import axios from "axios";
import { Request, Response } from "express";
import userModel from "../models/User/userModel";
import FormData from 'form-data';

const generateImage = async (req: Request, res: Response) => {
    try {
        const { prompt, userId, image } = req.body;
        console.log('Received request:', { prompt, userId, hasImage: !!image });

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

        // Convert base64 to buffer
        const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
        const imageBuffer = Buffer.from(base64Data, 'base64');

        // Create form data for the API
        const form = new FormData();
        form.append("prompt_text", prompt);
        form.append("image_file", imageBuffer, {
            filename: 'image.png',
            contentType: 'image/png'
        });

        console.log('Sending request to ClipDrop API...');
        const { data } = await axios.post('https://clipdrop-api.co/reimagine/v1/reimagine', form, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
                ...form.getHeaders()
            },
            responseType: 'arraybuffer',
        });

        // Convert the response to base64
        const resultImageBuffer = Buffer.from(data, 'binary');
        const resultImage = `data:image/png;base64,${resultImageBuffer.toString('base64')}`;

        // Update user credits
        user.creditBalance = (user.creditBalance as number) - 1;
        await user.save();

        // Return the result
        res.json({
            success: true,
            message: 'Image generated successfully',
            creditBalance: user.creditBalance,
            image: resultImage,
        });

    } catch (error: any) {
        console.error("Error generating image:", error);
        // Log the full error details
        if (error.response) {
            console.error('Error response:', {
                status: error.response.status,
                data: error.response.data,
                headers: error.response.headers
            });
        }

        res.status(500).json({
            success: false,
            message: error.message || "Internal server error",
            details: error.response?.data || error.message
        });
    }
};

export default generateImage;
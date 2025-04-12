import { Request, Response } from "express";
import userModel from "../models/User/userModel";
import Together from "together-ai";
import dotenv from "dotenv";

dotenv.config();

const together = new Together({
    apiKey: process.env.TOGETHER_API_KEY
});

const generateImage = async (req: Request, res: Response) => {
    try {
        const userId = req.params.userId;
        const { prompt, referenceImage } = req.body;
      console.log('userid',userId);
      
        

        console.log('Received request:', { prompt, userId, hasReference: !!referenceImage });

        if (!prompt || !userId) {
            return res.status(400).json({
                success: false,
                message: "Prompt and userId are required"
            });
        }

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        if ((user.creditBalance as number) <= 0) {
            return res.status(400).json({
                success: false,
                message: "Not enough credits"
            });
        }

        // Prepare payload
        const requestPayload: any = {
            model: "black-forest-labs/FLUX.1-schnell-Free",
            prompt,
            steps: 4,
            n: 1
        };

        if (referenceImage) {
            // Assuming Together API accepts 'image' as base64 or URL
            requestPayload.image = referenceImage;
        }

        console.log('Sending request to TogetherAI API...');
        const response = await together.images.create(requestPayload);
        console.log('Response:', response.data);

        const resultImage = response.data?.[0]?.url || `data:image/png;base64,${response.data?.[0]?.b64_json}`;

        // Update credits
        user.creditBalance = (user.creditBalance as number) - 1;
        await user.save();

        res.json({
            success: true,
            message: 'Image generated successfully',
            creditBalance: user.creditBalance,
            image: resultImage,
        });

    } catch (error: any) {
        console.error("Error generating image:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Internal server error",
            details: error.response?.data || error.message
        });
    }
};

export default generateImage;

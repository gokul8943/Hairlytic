import axios from "axios"
import { Request, Response } from "express"
import userModel from "../models/User/userModel"

const generateImage = async (req:Request,res:Response) =>{

    try {
        const { prompt,userId} = req.body
        const image = req.body.image
        const user = await userModel.findById(userId)

      if(!prompt || !image){
        return res.status(400).json({ success:false, message:"Prompt and image are required"})
      }

      if(userId.creditBalance <= 0){
        return res.status(400).json({success:false, message:"Not enough credits"})
      }

      const formdata = new FormData()
      formdata.append("prompt",prompt)
      formdata.append("image",image)

      const {data} =  await axios('https://clipdrop-api.co/reimagine/v1/reimagine', {
        headers: {
            'x-api-key': process.env.CLIPDROP_API,
          },
          responseType :'arrayBuffer'
        })
       
        const imageBuffer = Buffer.from(data, 'binary').toString('base64')
        const resultImage = `data:image/png;base64,${imageBuffer}`
        await userModel.findByIdAndUpdate(user._id,{creditBalance:user.creditBalance - 1})

        res.json({success:true,message:'Image generated',creditBalance:user.creditBalance - 1, resultImage})
    } catch (error:any) {
        
    }
       



}
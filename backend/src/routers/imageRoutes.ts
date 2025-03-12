import express from 'express';
import  generateImage  from '../controllers/imageController'; 
import userAuth from '../middleware/userAuth';

const imageRouter = express.Router();

imageRouter.post('/generate-image', generateImage as any);

export default imageRouter;
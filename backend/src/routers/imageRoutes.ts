import express from 'express';
import generateImage from '../controllers/imageController';
import userAuth from '../middleware/userAuth';
import upload from '../utils/multer';

const imageRouter = express.Router();

imageRouter.post('/generate-image', upload.single('image'), generateImage as any);

export default imageRouter;
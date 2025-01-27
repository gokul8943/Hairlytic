import express, { Router } from "express"
import { register,login, userCredits } from "../controllers/userController"



const userRouter = express.Router()

userRouter.post('/login',login as any)
userRouter.post('/register',register)
userRouter.post('/credits',userCredits)

export default userRouter

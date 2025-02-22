import { Document } from "mongoose";

interface userInterface extends Document{
    name:String,
    email:String,
    password:String,
    phone:Number,
    profileImg:String
    creditBalance:Number
}

export default userInterface
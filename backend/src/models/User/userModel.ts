import mongoose, { Schema } from 'mongoose'
import user from './userTypes'

const userSchema :Schema = new Schema<user>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone:{type:Number,required:true},
    password: { type: String, required: true },
    creditBalance: { type: Number, default: 5 },
})
const User = mongoose.model<user>('User',userSchema);

export default User
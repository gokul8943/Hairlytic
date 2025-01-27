import mongoose from 'mongoose'

const ConnectDB = async  () => {
    mongoose.connection.on("connected",() =>{
        console.log("Database connected");
    })
    await mongoose.connect(`${process.env.MONGO_URI}/hairlytic`)
}

export default ConnectDB
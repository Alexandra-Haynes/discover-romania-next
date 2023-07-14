import mongoose from "mongoose";


const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('yey! connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB
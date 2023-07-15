import mongoose from "mongoose";

const connection = {}

async function dbConnect() {
    if(connection.isConnected) {
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URL, {
            userNewUrlParser: true,
            userUnifiedTopology: true
        })

        connection.isConnected = db.connections[0].readyState
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error.message)
    }
}


export default dbConnect
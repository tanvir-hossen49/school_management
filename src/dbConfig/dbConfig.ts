import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL!;

export async function connect () {
    try {
        mongoose.connect(MONGODB_URL);

        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successful');
        })

        connection.on('error', (error) => {
            console.log("MongoDB connection error. Please make sure MongoDB is running" + error)
            process.exit()
        })
    } catch (error) {
        console.log(error);
        
    }
}
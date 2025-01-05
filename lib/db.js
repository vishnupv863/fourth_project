import mongoose from "mongoose";
import dontenv from 'dotenv';
dontenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MONGODB connected');
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDB;
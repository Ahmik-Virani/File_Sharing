import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = () => {
    const MONGODB_URL = process.env.MONGODB_URI

    try {
        mongoose.connect(MONGODB_URL);
        console.log("Database Connection Establised");
    } catch (error) {
        console.log(("Error connecting to database : " + error));
    }
};

export default DBConnection;
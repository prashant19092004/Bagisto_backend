import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectDB(){
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
        console.log(`Mongo DB connected!! DB Host : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection Failed!!", error);
        process.exit();
    }
}

export default connectDB;
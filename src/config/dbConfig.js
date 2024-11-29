import mongoose from "mongoose";
import { MONGO_URL } from "./serverconfing.js";

export default async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log("connected to MONGODB")
    }
    catch{
        console.log("fsiled to connect to server");
        console.log(error);
    }
}
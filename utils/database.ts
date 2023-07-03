import mongoose, {ConnectOptions } from "mongoose";

let isConnected =false;


export const connectToDb = async()=>{
    mongoose.set("strictQuery", true);
    if(isConnected){
        console.log("MongoDb is already connected");
        return;
    }
        try{
            const options: ConnectOptions = {
                dbName: "Next-todo",
              };
            await mongoose.connect(process.env.MONGO_URI, options)

            isConnected = true;
            console.log("MongoDB Connected")
        }catch(err){
            console.log(err);
        }
    
}
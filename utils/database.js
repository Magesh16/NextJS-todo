import mongoose from "mongoose";

let isConnected =false;

export const connectToDb = async()=>{
    mongoose.set("strictQuery", true);
    if(isConnected){
        console.log("MongoDb is already connected");
        return;
    }
        try{
            await mongoose.connect(process.env.MONGO_URI, {
                dbName: "Next-todo",
                useNewUrlParser: true,
                useUnifiedTopology: true
            })

            isConnected = true;
            console.log("MongoDB Connected")
        }catch(err){
            console.log(err);
        }
    
}
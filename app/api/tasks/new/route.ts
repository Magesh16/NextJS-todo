import { NextApiRequest, NextApiResponse } from "next";
import { connectToDb } from "@/utils/database";
import PostModel from "@/Models/todo";

export const POST = async (req : Request,res: NextApiResponse) =>{
    const {text} = await req.json();
    try{
        await connectToDb();
        const newPost = new PostModel({
            text
        }) 
        await newPost.save();
        return new Response(JSON.stringify(newPost), {status : 201})
}catch(err){
    return new Response("Failed to create the post", {status : 500})
}
}

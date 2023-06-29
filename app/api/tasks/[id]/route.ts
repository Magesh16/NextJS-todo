import PostModel from "@/Models/todo"
import { connectToDb } from "@/utils/database"
import { NextRequest, NextResponse } from "next/server"

export const PATCH = async (req:Request, {params}:any) =>{
    const {text} = await req.json();
    console.log(text);
    
    try{
        await connectToDb();
        const existingData=  await PostModel.findById(params.id);
        console.log(existingData);
        
        if(!existingData){
            return new Response("Post Not found", { status: 404 })
        }
        existingData.text = text;
        await existingData.save();
        return new Response(JSON.stringify(existingData), { status: 200 })

    }catch(err){
        return new Response("Failed to update the post", { status: 500 })
    }
}

export const DELETE = async(req: Request, {params}:any)=>{
    try{
        await connectToDb();
        await PostModel.findByIdAndRemove(params.id);
        return new Response("Deleted successfully", {status : 200})

    }catch(err){
        return new Response("Failed to Delete the post", { status: 500 })
    }
}
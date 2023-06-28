import PostModel from "@/Models/todo"
import { connectToDb } from "@/utils/database"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest,res: NextResponse) => {
    try {
        await connectToDb()
        const post = await PostModel.find({})
        return new Response(JSON.stringify(post), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 


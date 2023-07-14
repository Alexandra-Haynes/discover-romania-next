import { NextResponse } from "next/server"
import connectMongoDB from "../../../../../libs/mongodb"
import Comment from "../../../../../models/comment"

export async function PUT(request, {params}) {
    const {id} = params //get the id from params
    const {newTitle: title, newComment: comment} = await request.json()
    await connectMongoDB() //connect to db
    await Comment.findByIdAndUpdate(id, {title, comment})
    return NextResponse.json({message: 'Comment updated!'}, {status: 200})

}

export async function GET(request, {params}) {
    const {id} = params
    await connectMongoDB()
    const comment = await Comment.findOne({_id: id})
    return NextResponse.json({comment}, {status: 200})
}
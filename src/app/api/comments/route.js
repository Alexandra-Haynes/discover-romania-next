import { NextResponse } from "next/server"
import connectMongoDB from "../../../../libs/mongodb"
import Comment from "../../../../models/comment"

 export async function POST(request) {
    const {title, comment} = await request.json()
    await connectMongoDB()

    await Comment.create({title,comment})
    return NextResponse.json({message: 'Comment added'},
    {status: 201})
 }

 export async function GET() {
    await connectMongoDB()
    const comments = await Comment.find()
    return NextResponse.json({comments})
 }

 export async function DELETE(request) {
    const id=request.nextUrl.searchParams.get('id')
    await connectMongoDB()
    await Comment.findByIdAndDelete(id)
    return NextResponse.json({message: 'Comment deleted'}, {status: 200})
 }

 
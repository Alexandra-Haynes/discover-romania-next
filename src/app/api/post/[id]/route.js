import db from "@/libs/mongodb";
import { verifyJwtToken, verifyToken } from "@/libs/jwt";
import Post from "@/models/Post";
import User from "@/models/User";

export async function GET(req, ctx) {
  await db.connect();
  const id = ctx.params.id;

  try {
    const post = await Post.findById(id)
      .populate("authorId")
      .select("-password");
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function PUT(req, ctx) {
  await db.connect();
  const id = ctx.params.id;
  //make sure user is the author
  const accessToken = req.headers.get("authorization");
  const token = accessToken.split(" ")[1]; //decode token
  const decodedToken = verifyJwtToken(token);

  if (!accessToken || !decodedToken) {
    return new Response(
      JSON.stringify({
        error: "Unauthorized: wrong or expired token",
      }),
      { status: 403 }
    );
  }

  try {
    const body = await req.json();
    const post = await Post.findById(id).populate("authorId");

    if (post?.authorId?._id.toString() !== decodedToken._id.toString()) {
      return new Response(
        JSON.stringify({ msg: "Only the author can update this post" }),
        { status: 403 }
      );
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        $set: { ...body },
      },
      { new: true }
    );
    return new Response(JSON.stringify(updatedPost), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function DELETE(req, ctx) {
  await db.connect();
  const id = ctx.params.id;
  const accessToken = req.headers.get("authorization");
  const token = accessToken.split(" ")[1]; //decode token
  const decodedToken = verifyJwtToken(token);

  if (!accessToken || !decodedToken) {
    return new Response(
      JSON.stringify({
        error: "Unauthorized: wrong or expired token",
      }),
      { status: 403 }
    );
  }

  try {
    const post = await Post.findById(id).populate("authorId");
    if (post?.authorId?._id.toString() !== decodedToken._id.toString()) {
      return new Response(
        JSON.stringify({ msg: "Only the author can delete this post" }),
        { status: 403 }
      );
    }

    await Post.findByIdAndDelete(id);
    return new Response(JSON.stringify({ msg: "Post deleted!" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

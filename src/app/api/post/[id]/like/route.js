import dbConnect from "@/libs/mongodb";
import { verifyJwtToken, verifyToken } from "@/libs/jwt";
import Post from "@/models/Post";

export async function PUT(req, ctx) {
  await dbConnect();
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
    const post = await Post.findById(id);
    if (post.likes.includes(decodedToken._id)) {
      post.likes = post.likes.filter(
        (id) => id.toString() !== decodedToken._id.toString()
      );
    } else {
      post.likes.push(decodedToken._id);
    }
    await post.save();
    return new Response(JSON.stringify({ msg: "Liked!" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

import db from "@/libs/mongodb";
import Post from "@/models/Post";
import { verifyJwtToken, verifyToken } from "@/libs/jwt";

export async function GET(req) {
  await db.connect();

  try {
    const posts = await Post.find({}).limit(12).populate("authorId");
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

export async function POST(req) {
  await db.connect();

  //make sure is the author
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
    const newPosts = await Post.create(body);
    return new Response(JSON.stringify(newPosts), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

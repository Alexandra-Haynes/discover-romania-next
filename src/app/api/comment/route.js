import db from "@/libs/mongodb";
import Comment from "@/models/Comment";
import { verifyJwtToken, verifyToken } from "@/libs/jwt";

export async function POST(req) {
  await db.connect();

  const accessToken = req.headers.get("authorization");
  const token = accessToken.split(" ")[1];
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
    const newComment = await newComment.create(body);
    return new Response(JSON.stringify(newComment), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

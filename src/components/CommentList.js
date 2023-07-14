import Link from "next/link";
import React, { useState, useEffect } from "react";

import { GrEdit } from "react-icons/gr";
import axios from "axios";
import RemoveCommentBtn from "./RemoveCommentBtn";

const getComments = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/comments", {
      headers: { "Cache-Control": "no-cache" },
    });

    return response.data.comments; // Extract the comments data from the response
  } catch (error) {
    console.log("Error loading comments: ", error);
    return []; // Return an empty array as a default value if there's an error
  }
};

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentsData = await getComments();
        console.log("Fetched comments:", commentsData);
        setComments(commentsData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching comments:", error);
        setError("Failed to fetch comments");
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  useEffect(() => {
    console.log("Comments:", comments);
  }, [comments]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (comments.length === 0) {
    return <div className="bg-white text-slate-900 h-[100px]">No comments available.</div>;
  }

  return (
    <section>
      <Link
        className="bg-green-800 p-3 rounded-md text-white mx-6"
        href="/addComment"
      >
        Add comment
      </Link>
      {comments.map((comm) => (
        <div className="bg-white/90 m-4 rounded-md" key={comm._id}>
          <div
            className="p-4  border border-slate-300 my-3 
          flex items-start justify-between gap-1 rounded-md"
          >
            <div>
              <h2 className="text-xl font-semibold">{comm.title}</h2>
              <div>{comm.comment}</div>
            </div>
            <div className="flex gap-2">
              <RemoveCommentBtn id={comm._id} />

              <Link href={`/editComment/${comm._id}`}>
                <GrEdit className="text-green-600" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CommentList;

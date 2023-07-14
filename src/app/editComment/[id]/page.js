import EditCommentForm from "@/components/EditCommentForm";
import React from "react";

const getCommentById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/comments/${id}`, {
      cache: "no-store", //get the updated version, no cache
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const editComment = async ({ params }) => {
  const { id } = params;
  const { comment } = await getCommentById(id);
  // const {title, comment} = comment
  const title = comment.title;
  const commentBody = comment.comment;

  return <EditCommentForm id={id} title={title} comment={commentBody} />;
};

export default editComment;

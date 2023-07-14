"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const EditCommentForm = ({ id, title, comment }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [newComment, setNewComment] = useState(comment);
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/comments/${id}`, {
        method: "PUT",
        headers:  {
            "Content-type": "application/json",
        }, 
        body: JSON.stringify({newTitle, newComment})
      });

      if(!res.ok){
        throw new Error('Failed to update comment')
      } 
//TODO: add user feedback about comment being updated
      router.refresh()
      router.push('/')
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 m-8">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        placeholder="Comment title"
        type="text"
        className="border border-slate-500 px-8 py-2"
      ></input>

      <input
        onChange={(e) => setNewComment(e.target.value)}
        value={newComment}
        placeholder="Add your comment here"
        type="text"
        className="border border-slate-500 px-8 py-2"
      ></input>

      <button
        className="bg-green-900 text-white px-6  py-2 
      w-fit rounded-md"
      >
        {" "}
        Update comment
      </button>
    </form>
  );
};

export default EditCommentForm;

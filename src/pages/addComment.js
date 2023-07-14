"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const addComment = () => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents page refresh

    if (!title || !comment) { //TODO: chnage this into a red text
      alert("Title and comment are required!");
    }

    try {
      //create new comment
      const res = await fetch("http://localhost:3000/api/comments", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({title, comment})
      });
     //add to page

     if(res.ok) {
      router.push('/')
     } else {
      throw new Error('Failed to create comment')
     }

    } catch (error) {
      console.log(error)
    }
  };

  console.log("hi");
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 m-8">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Comment title"
        type="text"
        className="border border-slate-500 px-8 py-2"
      ></input>

      <input
        onChange={(e) => setComment(e.target.value)}
        value={comment}
        placeholder="Add your comment here"
        type="text"
        className="border border-slate-500 px-8 py-2"
      ></input>

      <button
        type="submit"
        className="bg-green-900 text-white px-6  py-2 
      w-fit rounded-md"
      >
        {" "}
        Post comment
      </button>
    </form>
  );
};

export default addComment;

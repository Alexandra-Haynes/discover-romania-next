"use client";
//this is a user interaction

import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";

const RemoveCommentBtn = ({ id }) => {
  const router = useRouter()  
  const removeComment = async () => {
    const confirmed = confirm("Are you sure?");
    // TODO: redesign the confirmation UI

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/comments?id=${id}`, {
        method: "DELETE",
      });

      if(res.ok) {
        //refresh page after deletion
        router.refresh();
      }
      
    }
  };
  return (
    <button onClick={removeComment}>
      <AiOutlineDelete className="text-red-700" />
    </button>
  );
};

export default RemoveCommentBtn;

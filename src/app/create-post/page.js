"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import {  toast } from "react-toastify";


const Createpost = () => {
  const [title, setTitle] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [category, setCategory] = useState("Recommendations");

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p className="text-center text-5xl">Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !commentBody) {
      toast.error("All fields are required");
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/api/post`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        method: "POST",
        body: JSON.stringify({
          title,
          commentBody,
          category,
          authorId: session?.user?._id,
        }),
      });

      if (!res.ok) {
        throw new Error("Error occured");
      }

      const post = await res.json();

      router.push(`/forum`);
    } catch (error) {
      console.log('Error on submit', error.message);
    }
  };
  return (
    <section className="bg-gray-100 max-w-screen-sm m-auto p-8">
      <div className="text-center mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          Create A Post
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-24 h-1 rounded-full bg-primaryBrown inline-flex"></div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="w-full focus:outline-none p-2"
            placeholder="Post title"
          />
        </div>
        <div>
          <input
            type="text"
            onChange={(e) => setCommentBody(e.target.value)}
            className="w-full focus:outline-none pt-8 pb-8 pl-2 mt-4"
            placeholder="What do you want to share in the forum?"
          />
        </div>
        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full focus:outline-none p-2 mt-4"
          >
            <option value="Recommendations">Recommendations</option>
            <option value="Questions">Questions</option>
            <option value="Stories">Stories</option>
            <option value="Travel">Travel Tips</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-6 py-2.5 rounded-md bg-primaryBrown mt-3 text-white 
          hover:bg-green-900 hover:text-white transition-all duration-300"
        >
          Post in forum
        </button>
      </form>
    </section>
  );
};

export default Createpost;

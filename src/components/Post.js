"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import {BsFillPersonFill} from 'react-icons/bs'

const Post = ({ post: { title, commentBody, likes, category, authorId, _id } }) => {
  const { data: session } = useSession();
  const [isLiked, setIsLiked] = useState(false);
  const [postLikes, setPostLikes] = useState(0);
  useEffect(() => {
    session && likes && setIsLiked(likes.includes(session?.user?._id));
    session && likes && setPostLikes(likes.length);
  }, [likes, session]);

  const handleLike = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/post/${_id}/like`, {
        headers: {
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        method: "PUT",
      });

      console.log(res);
      if (res.ok) {
        if (isLiked) {
          setIsLiked((prev) => !prev);
          setPostLikes((prev) => prev - 1);
        } else {
          setIsLiked((prev) => !prev);
          setPostLikes((prev) => prev + 1);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section
      className="text-black  mx-8 shadow-xl
     overflow-hidden bg-white max-w-[600px] border-b-2"
    >
      <div className="flex flex-col items-start justify-center px-5 py-4 mx-auto">
        <div className="w-full">
          <div className="flex flex-col items-start">
            {/* <span
              className="inline-block self-end py-1 px-2 rounded bg-highlights
             text-xs  tracking-widest"
            >
              {category}
            </span> */}
            <span className="title-font font-semibold
             text-primary  mb-4 flex flex-row items-center justify-center gap-1">
             <BsFillPersonFill /> {authorId.username}
            </span>
            <h2
              className="sm:text-3xl text-2xl font-semibold text-gray-900 
            "
            >
              {title}
            </h2>
            <p className="leading-relaxed my-4">{commentBody}</p>
            <div
              className="flex items-center flex-wrap pb-4 mb-4 
              mt-auto w-full"
            >
              <Link href={`/post/${_id}`} 
              className="text-slate-500 pt-8">
                Read more [...]
              </Link>
              <span
                className="text-black mr-2 ml-auto 
              leading-none text-sm p-1 "
              >
                {postLikes}{" "}
                {isLiked ? (
                  <AiFillLike onClick={handleLike} size={20} />
                ) : (
                  <AiOutlineLike onClick={handleLike} size={20} />
                )}
              </span>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;

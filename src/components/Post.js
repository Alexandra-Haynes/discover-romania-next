"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { useRouter } from "next/router";

const Post = ({ post: { title, commentBody, likes, category, authorId, _id } }) => {
  const { data: session } = useSession();
  const [isLiked, setIsLiked] = useState(false);
  const [postLikes, setPostLikes] = useState(0);
  const router = useRouter();

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

      if (res.ok) {
        setIsLiked((prev) => !prev);
        setPostLikes((prev) => prev + (isLiked ? -1 : 1));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const confirmModal = confirm("Are you sure you want to delete this post?");

      if (confirmModal) {
        const res = await fetch(`http://localhost:3000/api/post/${_id}`, {
          headers: {
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          method: "DELETE",
        });

        if (res.ok) {
          router.push("/forum");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("session user ID:", session?.user?._id);
  console.log("author ID:", authorId._id);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
              {category}
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              {title}
            </h2>
            <p className="leading-relaxed mb-8 min-w-[400px] lg:w-[600px]">{commentBody}</p>
            <div className="flex items-center justify-between 
            first-letter:flex-wrap pb-4 mb-4 border-b-2
             border-gray-100 mt-auto w-full text-black">
              {/* <Link href={`/post/${_id}`} className="text-indigo-500 inline-flex items-center">
                See More
              </Link> */}
              {session?.user?._id === authorId._id && (
                <>
                  <Link href={`/post/edit/${_id}`} className="ml-4 text-slate-600">
                    <BsFillPencilFill size={20} />
                  </Link>
                  <button className="ml-4 text-slate-600" onClick={handleDelete}>
                    <AiFillDelete size={20} />
                  </button>
                </>
              )}
              <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                {postLikes}{" "}
                {isLiked ? (
                  <AiFillLike onClick={handleLike} size={20} />
                ) : (
                  <AiOutlineLike onClick={handleLike} size={20} />
                )}
              </span>
            </div>
            <a className="inline-flex items-center">
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium text-gray-900">
                  Author: {authorId.username}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Post;

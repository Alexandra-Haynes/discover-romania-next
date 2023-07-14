import Link from "next/link";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";

const getComments = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/comments", {
      cache: "no-store",
    });

    if(!res.ok) {
      throw new Error('Failed to fetch comments')
    }

    return res.json()
  } catch (error) {
    console.log('Error loading comments: ', error)
  }
};

export default async function AddComment() {

    const {comments} = await getComments()

  return (
    <section>
    <h1>blabla</h1>
    {comments.map((comm) => {

      return (


      <div className="bg-white/90 ">
        <Link
          className="bg-green-800 p-3 rounded-md text-white text-right
        "
          href="/addComment"
        >
          Add comment
        </Link>
        <div className="p-4 border border-slate-300 my-3 flex items-start justify-between gap-5 ">
          <div>
            <h2 className="text-xl font-semibold">{comm.title}</h2>
            <div>{comm.comment} </div>
          </div>
          <div className="flex gap-2">
            <AiOutlineDelete className="text-red-700" />
            <Link href={`/editComment/${comm._id}`}>
              <GrEdit className="text-green-600" />
            </Link>
          </div>
        </div>
      </div>
      )}
        )}
    </section>
  );
};



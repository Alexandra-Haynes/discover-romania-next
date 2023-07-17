"use client";

import React, { useEffect, useState } from "react";
import Post from "@/components/Post";

export async function fetchPosts() {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  return res.json();
}

export default function Forum() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostsData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostsData();
  }, []);

  return (
    <>
      <section className="bg-gradient bg-cover py-12 pt-24">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center">
          <img
            src="/assets/forum-illustration.png"
            alt="chatting illustration"
            className="max-h-[200px] md:max-h-[400px]"
          />
          <div
            className="flex flex-col items-center 
            justify-between px-6"
          >
            <div className="flex flex-col items-center  md:items-start justify-center">
              <h1 className=" text-4xl text-primary font-bold md:text-[4rem]">
                Discover Romania forum
              </h1>
              <div
                className="h-[1px] w-1/2 md:w-[400px] md:h-1 bg-primary my-6
              "
              ></div>
              <h2 className="w-2/3 pb-8  text-md md:font-semibold
               md:text-left md:text-xl  text-center text-secondary">
                A place to come and share your thoughts about Romania, read
                interesting stories and recommendations and get answers to your
                questions.
              </h2>
            </div>
          </div>
        </div>

        {loading ? (
          <h3 className="py-20 px-8">Loading posts...</h3> //TODO: improve UI
        ) : (
          <section>
            {posts.length > 0 ? (
              posts.map((post) => <Post key={post._id} post={post} />)
            ) : (
              <h3>No posts available.</h3>
            )}
          </section>
        )}
      </section>
    </>
  );
}

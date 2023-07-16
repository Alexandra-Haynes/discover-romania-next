import Link from "next/link";

import Post from "@/components/Post";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
    <NavBar />
      <main className="max-w-screen-sm m-auto">
        <section>
          <div className="flex items-center bg-white">
            <div className="container   flex flex-col items-center justify-between px-6 py-8 mx-auto">
              <div className="flex flex-col">
                <h1 className="w-full text-4xl font-light text-center text-gray-800 uppercase sm:text-5xl">
                  Welcome to the forum
                </h1>
                <h2 className="w-full max-w-2xl py-8 mx-auto text-xl font-light text-center text-gray-500">
                  A place to come and share your thoughts about Romania, read
                  interesting stories and recommendations. Feel free to post
                  comments.
                </h2>
               
              </div>
            </div>
          </div>
        </section>

        {loading ? (
          <h3>Loading posts...</h3>
        ) : (
          <>
            {posts.length > 0 ? (
              posts.map((post) => <Post key={post._id} post={post} />)
            ) : (
              <h3>No posts available.</h3>
            )}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

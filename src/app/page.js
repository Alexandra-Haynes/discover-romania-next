import React from "react";
import HeroText from "@/components/HeroText";


export const metadata = {
  title: "Discover Romania",
};

export default function Home() {

  return (
    <>
      <section
        className="bg-heroBg bg-cover 
      h-screen flex flex-col items-center justify-center"
      >
        <div
          className=" mx-auto flex flex-col 
    items-center text-center w-[70%] "
        >
          <h1
            className="font-extrabold  text-[5rem] text-white drop-shadow-textShadow 
          leading-6
      "
          >
            {"  "} discover
          </h1>
          <span
            className="font-extrabold  text-[5rem] text-white drop-shadow-textShadow 
      "
          >
            {"  "} ROMANIA
          </span>

          <div className="h-[2px] bg-white/50 rounded-full w-1/2 max-w-[200px] my-3"></div>
          <h2
            className="leading-tight my-2 text-white drop-shadow-textShadow
      font-light text-2xl flex tracking-tight"
          >
            embark on an exciting new adventure as you discover your next
            holiday destination.
          </h2>
        </div>
      </section>
    </>
  );
};



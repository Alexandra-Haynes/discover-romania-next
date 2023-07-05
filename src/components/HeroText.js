import React from "react";

const HeroText = () => {
  return (
    <div className="relative top-[6rem] mx-auto flex flex-col items-center text-center w-[70%]">
      <div>
        <h1
          className="font-extrabold  text-[3rem] text-white drop-shadow-textShadow 
      tracking-tighter"
        >
          {"  "} discover 
        </h1>
        <span
          className="font-extrabold  text-[3rem] text-white drop-shadow-textShadow 
      tracking-tighter  l"
        >
          {"  "}  ROMANIA
        </span>
      </div>

      <div className="h-[2px] bg-white/50 rounded-full w-1/2 max-w-[200px] my-2"></div>
      <h2
        className="leading-tight my-2 text-white drop-shadow-textShadow
      font-light text-xl flex tracking-tight"
      >
        embark on an exciting new adventure as you discover your next holiday
        destination.
      </h2>
    </div>
  );
};

export default HeroText;

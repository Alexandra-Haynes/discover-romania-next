import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { animationStart, reveal } from "../utils/animation";

import {GrFormClose} from 'react-icons/gr'
import { FiMenu } from "react-icons/fi";

import Logo from "./Logo";



const CustomLink = ({ href, title, className = "" }) => {
   return (
    <Link
      href={href}
      className={`${className} pl-10 whitespace-nowrap text-[1.4rem]
       font-bold hover:text-orange-400 transition-colors ease-in-out
       `}
    >
      {title}
    </Link>
  );
};

const MobileCustomLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle() //automatically close the mobile nav div when clicking on a link
    router.push(href);
  };
  return (
    <button
      onClick={handleClick}
      href={href}
      className={`${className}    whitespace-nowrap p-2 border 
      border-black mb-3 shadow-lg 
      hover:-translate-y-1 hover:shadow-inner hover:bg-primaryBlue hover:font-semibold
       bg-primaryBrown/[82%]
      w-[200px] rounded-sm text-primaryBlue
       hover:text-primaryBrown transition-all ease-in-out text-center
       `}
    >
      {title}
    </button>
  );
};

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <header className="t-0 w-full pt-5 px-10 flex justify-between items-center">
      <Logo />
      <div className="lg:flex justify-between items-center hidden">
        <nav>
          <CustomLink href="/facts" title="facts." />
          <CustomLink href="/tips" title="tips." />
          <CustomLink href="/gallery" title="gallery." />
        </nav>
      </div>

      {/* ____________________mobile menu______________________________ */}
      <button
        className="flex flex-col justify-center items-center lg:hidden z-50 "
        onClick={handleClick}
      >
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm transition-all 300ms ease-in-out 
          ${
            isOpen
              ? "rotate-45 translate-y-1 bg-white"
              : "-translate-y-1 bg-black"
          }`}
        ></span>
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm m-0.5 ${
            isOpen ? "opacity-0 " : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-black block h-0.5 w-6 rounded-sm transition-all 300ms ease-in-out 
          ${isOpen ? "-rotate-45 -translate-y-1  bg-white" : "translate-y-1"}`}
        ></span>
      </button>

      {isOpen ? (
        <div
          className=" w-[90%] h-1/2 flex py-10  flex-col justify-center items-center fixed
      top-8 right-4 bg-mobileBg bg-cover  z-30 shadow-2xl rounded-sm text-2xl 
      backdrop-grayscale transition-all ease-in-out "
        >
          <nav className="flex flex-col justify-center items-center pt-4">
            <MobileCustomLink
              href="/facts"
              title="facts."
              toggle={handleClick}
            />
            <MobileCustomLink href="/tips" title="tips." toggle={handleClick} />
            <MobileCustomLink
              href="/gallery"
              title="gallery."
              toggle={handleClick}
            />
          </nav>
        </div>
      ) : null}
    </header>
  );
};




    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 0.5, delay: animationStart }}
    // >
    //   <motion.div
    //     variants={reveal}
    //     initial="hiddenVariant"
    //     animate="revealedVariant"
    //     transition={{
    //       ease: "easeIn",
    //       type: "tween",
    //       staggerChildren: 0.1,
    //       duration: 0.5,
    //       delayChildren: animationStart + 0.5,
    //     }}
    //     className="w-full flex items-center justify-around h-[80px] fixed top-0 z-100"
    //   >
    //     <motion.div variants={reveal}>
    //       <Logo />
    //     </motion.div>

    //     <div className="flex gap-[20px] items-center cursor-pointer">
    //       <motion.span variants={reveal}>gallery.</motion.span>
    //       <motion.span variants={reveal}>travel tips.</motion.span>
    //       <motion.span variants={reveal}>facts.</motion.span>
    //     </div>
    //   </motion.div>
    // </motion.div>

export default NavBar;

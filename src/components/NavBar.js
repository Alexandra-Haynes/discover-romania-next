"use client";

import React, { useState } from "react";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Logo from "./Logo";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const NavBar = () => {
  const { data: session } = useSession();
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((currentState) => {
      return !currentState;
    });
  };

  return (
    <header
      className="z-50 cursor-pointer mx-auto
    flex justify-between items-center px-5 py-12"
    >
      <Logo />

      <div className="lg:hidden z-50 ">
        {navIsVisible ? (
          <MdClose className="w-6 h-6" onClick={navVisibilityHandler} />
        ) : (
          <HiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
        )}
      </div>
      <nav
        className={`${navIsVisible ? "left-0" : "left-full"}
        transition-all duration-300 
        flex flex-col w-full lg:w-auto lg:flex-row justify-center 
        lg:justify-end fixed top-0 bottom-0 -right-full lg:static
        items-center gap-x-9`}
      >
        <ul
          className="z-50  flex flex-col items-center gap-x-5 gap-y-5
        lg:flex-row font-semibold "
        >
          <li>
            {" "}
            <Link href={"/"} className="text-2xl hover:font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/about"} className="text-2xl hover:font-bold ">
              {" "}
              About Romania
            </Link>
          </li>
          <li>
            <Link
              href={"/travel"}
              className="text-2xl hover:font-bold
            "
            >
              Travel to Romania
            </Link>
          </li>
          <li>
            <Link
              href={"/forum"}
              className="text-2xl hover:font-bold
            "
            >
              Forum
            </Link>
          </li>
          <li>
            <Link
              href={"/gallery"}
              className="text-2xl hover:font-bold
            "
            >
              Photo Gallery
            </Link>
          </li>
        </ul>
        <SessionProvider>
          {session?.user ? (
            <>
              <Link
                href="/createPost"
                className="bg-primaryBrown hover:bg-primaryBlue transition-all duration-300 text-white mt-3 px-6 py-3 rounded-md "
              >
                Create a post
              </Link>
              <button
                onClick={() => {
                  signOut();
                }}
                className="bg-primaryCyan hover:bg-primaryBrown transition-all duration-300 text-white mt-3 px-6 py-3 rounded-md "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="bg-primaryBrown hover:bg-primaryBlue transition-all duration-300 text-white mt-3 px-6 py-3 rounded-md "
              >
                Log In
              </Link>
              <Link
                href="/register"
                className="bg-primaryCyan hover:bg-primaryBrown transition-all duration-300 text-white mt-3 px-6 py-3 rounded-md "
              >
                Create account
              </Link>
            </>
          )}
        </SessionProvider>
      </nav>
    </header>
  );
};

export default NavBar;

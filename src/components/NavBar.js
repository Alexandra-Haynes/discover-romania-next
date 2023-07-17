"use client";

import React, { useState } from "react";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Logo from "./Logo";
import { HiOutlineMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import {LiaHomeSolid} from 'react-icons/lia'
import {BiBookReader} from 'react-icons/bi'
import {AiFillCar} from 'react-icons/ai'
import {BsChatDots} from 'react-icons/bs'
import {HiOutlinePhoto} from 'react-icons/hi2'

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
      className="fixed cursor-pointer 
    flex justify-between items-center 
    px-12 pt-12 pb-24 w-screen z-50"
    >
      <Logo />
      <div className="lg:hidden z-50">
        {navIsVisible ? (
          <MdClose
            className="w-6 h-6 text-primary"
            onClick={navVisibilityHandler}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-primary"
            onClick={navVisibilityHandler}
          />
        )}
      </div>
      <nav
        className={`${
          navIsVisible
            ? "left-0 bg-light"
            : "left-full  shadow-none w-screen "
        }
        transition-all duration-300 
        flex flex-col w-full h-1/2 lg:w-auto lg:flex-row 
        lg:justify-end fixed top-0 bottom-0 -right-full lg:static
        items-center justify-center gap-x-9 `}
      >
        <ul
          className="flex flex-col items-end gap-x-5 gap-y-5
        lg:flex-row gap-2 "
        >
          <li>
            {" "}
            <Link
              href={"/"}
              className="text-2xl 
              flex flex-row items-center justify-center gap-2"
            >
              <LiaHomeSolid /> home.
            </Link>
          </li>
          <li>
            <Link
              href={"/about"}
              className="text-2xl 
              flex flex-row items-center justify-center gap-2 "
            >
              {" "}
              <BiBookReader />
              about.
            </Link>
          </li>
          <li>
            <Link
              href={"/travel"}
              className="text-2xl 
              flex flex-row items-center justify-center gap-2
            "
            >
              {" "}
              <AiFillCar />
              travel.
            </Link>
          </li>
          <li>
            <Link
              href={"/forum"}
              className="text-2xl  flex flex-row 
              items-center justify-center gap-2
            "
            >
              {" "}
              <BsChatDots />
              forum.
            </Link>
          </li>
          <li>
            <Link
              href={"/gallery"}
              className="text-2xl  flex flex-row items-center
               justify-center gap-2
            "
            >
              <HiOutlinePhoto /> gallery.
            </Link>
          </li>
        </ul>
        <SessionProvider>
          {session?.user ? (
            <>
              <Link
                href="/create-post"
                className="bg-primary hover:bg-highlights hover:text-black transition-all
                 duration-300 text-white my-2 px-4 py-2 text-center rounded-md w-[180px]"
              >
                Create a post
              </Link>
              <button
                onClick={() => {
                  signOut();
                }}
                className="bg-highlights hover:bg-primary hover:text-white transition-all duration-300
                text-center text-black w-[180px] px-4 py-2 rounded-md "
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="bg-primaryBrown hover:bg-primaryBlue transition-all 
                duration-300 text-white my-2 px-4 py-2 rounded-md "
              >
                Log In
              </Link>
              <Link
                href="/register"
                className="bg-primaryCyan hover:bg-primaryBrown 
                transition-all duration-300 text-white px-4 py-2 rounded-md "
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

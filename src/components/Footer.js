import React from "react";
import Link from "next/link";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterCircle
} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className="w-full max-w-screen bg-slate-900 text-white pt-12">
      <div
        className="flex flex-col items-center gap-2 
      justify-center text-sm xl:text-xl pt-6  "
      >
        <Link
          href="/privacy-policy"
          className="hover:-translate-y-1 transition-all ease-in-out "
        >
          Privacy Policy
        </Link>
        <Link href="/terms-of-use" className="hover:-translate-y-1">
          Terms of Use
        </Link>
      </div>
      <p className="text-sm xl:text-xl font-semibold text-center py-4">
        Copyright © Discover Romania 2023
      </p>

<div className="w-1/2 h-[1px] mx-auto bg-slate-300/80">

</div>
      <div className="flex items-center justify-around pt-6 pb-12 w-1/2 mx-auto text-slate-400 ">
        
        <Link href="instagram.com">
          <AiFillInstagram />
        </Link>
        <Link href="instagram.com">
          <AiFillYoutube />
        </Link>
        <Link href="instagram.com">
          <AiFillFacebook />
        </Link>
        <Link href="instagram.com">
          <AiFillTwitterCircle />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-primaryBrown text-white pt-12">
      <div
        className="flex flex-col items-center gap-2 
      justify-center text-sm xl:text-xl pt-6  "
      >
        <Link href="/privacy-policy" className="hover:-translate-y-1 transition-all ease-in-out ">
          Privacy Policy
        </Link>
        <Link href="/terms-of-use" className="hover:-translate-y-1">
          Terms of Use
        </Link>
      </div>
      <p className="text-sm xl:text-xl font-semibold text-center py-4">
        Copyright © Discover Romania 2023
      </p>
    </footer>
  );
};

export default Footer;

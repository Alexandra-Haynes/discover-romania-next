import Link from 'next/link';
import React from 'react'

const Logo = () => {
  return (
    // <svg></svg>
    <Link className="hover:scale-[103%] transition-all duration-300" href="/">
      <img src="/assets/logo.png" alt="logo" className="h-8" />
    </Link>
  );
}

export default Logo

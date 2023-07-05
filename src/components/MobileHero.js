import React from 'react'

const MobileHero = () => {
  return (
    <div className="h-screen w-auto object-cover fixed top-0 -z-20">
      <img
        src="/assets/mobileHero.jpg"
        alt="Tourists hiking in Romania"
        className='h-full w-auto object-cover'
      ></img>
    </div>
  );
}

export default MobileHero

import React from 'react'

const HeroVideo = () => {
  return (
    <video className='h-screen w-full object-cover animate-clip-animation ' autoPlay muted >
        <source src='/assets/heroVid.mp4' type='video/mp4' />
    </video>
  )
}

export default HeroVideo

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animationStart, reveal } from "../utils/animation";
import HeroVideo from "./HeroVideo";
import MobileHero from './MobileHero'
import HeroText from "./HeroText";
import Comments from "./Comments";

const HomePage = () => {
   const [isBigScreen, setIsBigScreen] = useState(false);

     useEffect(() => {
       const handleResize = () => {
         setIsBigScreen(window.innerWidth > 1024);
       };

       handleResize();

       window.addEventListener("resize", handleResize);
       return () => {
         window.removeEventListener("resize", handleResize);
       };
     }, []);

  return (
    <>
      <section className="h-screen overflow-hidden">
        {isBigScreen ? (
          <motion.div
            layout
            initial={{ height: 0 }}
            animate={{ height: "unset" }}
            transition={{ delay: animationStart, duration: 1 }}
            className="flex flex-col items-center "
          >
            <HeroText />
            {/* <motion.div
            variants={reveal}
            initial="hiddenVariant"
            animate="revealedVariant"
            transition={{ delay: animationStart + 1, duration: 0.5 }}
          >
            <h1>Meet your next holiday destination</h1>
          </motion.div>

          <h2
            variants={reveal}
            initial="hiddenVariant"
            animate="revealedVariant"
            transition={{ delay: animationStart + 1.2, duration: 0.5 }}
          >
            Learn interesting facts about Romania, visit the photo gallery and
            read our travel tips.
          </h2> */}
            <HeroVideo />
          </motion.div>
        ) : (
          <motion.div
            layout
            initial={{ height: 0 }}
            animate={{ height: "unset" }}
            transition={{ delay: animationStart, duration: 1 }}
            className="flex flex-col items-center "
          >
            {/* <motion.div
            variants={reveal}
            initial="hiddenVariant"
            animate="revealedVariant"
            transition={{ delay: animationStart + 1, duration: 0.5 }}
          >
            <h1>Meet your next holiday destination</h1>
          </motion.div>

          <h2
            variants={reveal}
            initial="hiddenVariant"
            animate="revealedVariant"
            transition={{ delay: animationStart + 1.2, duration: 0.5 }}
          >
            Learn interesting facts about Romania, visit the photo gallery and
            read our travel tips.
          </h2> */}
            <HeroText />
            <MobileHero />
          </motion.div>
        )}
      </section>
      <Comments/>
    </>
  );
};

export default HomePage;

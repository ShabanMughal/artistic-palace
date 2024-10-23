"use client";
import React from "react";

import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { Button } from "./Button";

const Hero = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center px-10">
        <p className="mb-5">Dynamic Web Magic with Next.js</p>
        <h2 className="text-4xl relative z-20 md:text-5xl lg:text-6xl font-bold text-center text-black dark:text-white font-sans">
        Discover Your Perfect Art <br />
          <div className="relative mx-auto inline-block w-full [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Bringing Art to Life in your World</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Bringing Art to Life in your World</span>
            </div>
          </div>
        </h2>
        <p className="text-sm lg:text-2xl text-center">
          Find the perfect blend of colors, emotions, and creativity of your world. Shop my
          collection or request a custom-made piece to suit your style
        </p>
        <Button />
      </div>
    </BackgroundBeamsWithCollision>
  );
};
export default Hero;

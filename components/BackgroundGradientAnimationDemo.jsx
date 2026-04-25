"use client";

import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-6 text-center pointer-events-none">

        {/* TITLE */}
        <h1 className="
          text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight
          bg-clip-text text-transparent
          bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500
          drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]
        ">
          AI-Powered Innovation
        </h1>

        {/* DESCRIPTION */}
        <p className="
          mt-6 max-w-2xl
          text-sm md:text-lg lg:text-xl
          text-gray-200/80
        ">
          We create intelligent digital experiences powered by AI, automation,
          and modern UI systems that help businesses scale faster and smarter.
        </p>

      </div>

    </BackgroundGradientAnimation>
  );
}
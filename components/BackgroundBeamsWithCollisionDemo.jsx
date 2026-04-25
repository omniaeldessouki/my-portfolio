import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center justify-center gap-8 md:gap-10 lg:gap-14 px-6 py-24 text-center">

        {/* NAME */}
        <p className="text-sm md:text-base text-purple-300">
          Hi, I'm Omnia El Dessouki 👋
        </p>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500">
          Frontend Developer & AI Enthusiast
        </h1>

        {/* SUB TITLE */}
        <p className="max-w-2xl text-base md:text-lg text-purple-300 dark:text-purple-200">
          I build modern, responsive and scalable web applications using
          React, Next.js, and AI-powered tools to create smart digital
          experiences with clean UI and strong performance.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-6 py-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-full border border-purple-500 text-purple-300 hover:bg-purple-500/10 transition">
            Contact Me
          </button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
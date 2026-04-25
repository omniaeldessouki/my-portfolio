"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import React, { useState } from "react";

/* ===================== FULL SCREEN CONTACT ===================== */

export default function ContactSection() {
  return <Card />;
}

function Card() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        relative w-full h-[32rem]
        overflow-hidden
        border border-purple-500/20
        bg-gradient-to-b from-black via-purple-950 to-black
        flex items-center justify-center
        shadow-2xl
      "
      id="contact"
    >
      {/* EFFECT BACKGROUND (unchanged) */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={4}
              containerClassName="bg-purple-950"
              colors={[[168, 85, 247], [236, 72, 153]]}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONTENT ONLY ANIMATED */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center px-8 text-white"
      >
        {/* TITLE */}
        <h2
          className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
          bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500 h-20"
        >
          Let’s Work Together 🚀
        </h2>

        <p className="text-gray-400 mt-4 text-sm md:text-base max-w-2xl mx-auto">
          I’m always open to new opportunities, collaborations, and exciting
          projects. Let’s build something amazing together.
        </p>

        {/* INFO */}
        <div className="mt-8 space-y-2 text-gray-300 text-sm md:text-base">
          <div className="mt-8 space-y-2 text-gray-300 text-sm md:text-base">
            <a
              href="https://wa.me/201119920634"
              target="_blank"
              className="block hover:text-white transition"
            >
              📞 WhatsApp Me +20 111 99 20 634
            </a>

            <a
              href="mailto:omniaeldessouki6@gmail.com"
              className="block hover:text-white transition"
            >
              📧 omniaeldessouki6@gmail.com
            </a>
          </div>

          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            I build modern, responsive, and scalable web applications using
            React, Next.js, and AI-powered tools.
          </p>
        </div>

        {/* LINKS */}
        <div className="flex gap-8 justify-center mt-8">
          <a
            href="https://linkedin.com/in/omnia-eldessouki-469680247"
            className="text-purple-300 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/omniaeldessouki"
            className="text-purple-300 hover:text-white transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </div>
  );
}
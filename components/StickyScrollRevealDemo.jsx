"use client";

import React from "react";
import { motion } from "framer-motion";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Udemy Certificate — JavaScript Mastery",
    description:
      "The Complete JavaScript Course covering DOM, async JS, and projects.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
        className="h-full w-full object-cover rounded-xl"
        alt="Certificate"
      />
    ),
  },
  {
    title: "Bachelor's Degree of Commerce",
    description:
      "Suez Canal University – Accounting Department\nGrade: Very Good\nStrong academic foundation in accounting, business analysis, and financial systems.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop"
          className="h-full w-full object-cover rounded-xl"
          alt="University Campus"
        />
      </div>
    ),
  },
  

  {
    title: "Frontend Developer (Premast) — 2023 to Present",
    description:
      "Frontend Developer and UI Engineer with strong experience in building responsive interfaces using React, Next.js.\n\n- Figma to code\n- Reusable components\n- REST & GraphQL APIs\n- WordPress collaboration",
    content: (
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
        className="h-full w-full object-cover rounded-xl"
        alt="Frontend Development"
      />
    ),
  },

  {
    title: "Projects Experience",
    description:
      "Worked on multiple real-world frontend projects including:\n\n- Grow Website (WordPress + UI customization)\n- Premast Lab Website\n- Maatix Website\n- AI Assistant Pages\n- Studio Pages\n\nFocused on responsive UI, performance optimization, and modern design systems.",

    content: (
      <img
        src="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop"
        className="h-full w-full object-cover rounded-xl"
        alt="Projects"
      />
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full px-4 md:px-8 lg:px-16 py-10 md:py-20"
    >
      {/* TITLE فقط Motion */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="
          text-center font-bold mb-10
          text-2xl md:text-5xl
          bg-clip-text text-transparent
           bg-black
        "
      >
        Education & Experience
      </motion.h2>

      <div className="flex justify-center">
        <div className="w-full max-w-6xl">
          <StickyScroll content={content} />
        </div>
      </div>
    </motion.div>
  );
}
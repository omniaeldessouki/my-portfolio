// "use client";

// import React from "react";
// import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

// export function InfiniteMovingCardsDemo() {
//   return (
//     <div
//       className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
//         <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500 mb-10">
//           Timeless Literary Wisdom
//         </h2>
//       <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
//     </div>
//   );
// }

// const testimonials = [
//   {
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//     name: "Charles Dickens",
//     title: "A Tale of Two Cities",
//   },
//   {
//     quote:
//       "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
//     name: "William Shakespeare",
//     title: "Hamlet",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote:
//       "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
//     name: "Jane Austen",
//     title: "Pride and Prejudice",
//   },
//   {
//     quote:
//       "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
//     name: "Herman Melville",
//     title: "Moby-Dick",
//   },
// ];
"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden px-6">

      {/* TITLE */}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500 mb-10 text-center">
        Omnia AI Portfolio Experience
      </h2>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

/* ---------------- PORTFOLIO EXPERIENCE ---------------- */

const testimonials = [
  {
    quote:
      "Frontend Developer focused on building AI-powered interfaces using React, Next.js, and modern UI systems with scalable architecture.",
    name: "Omnia El Dessouki",
    title: "Frontend & AI UI Engineer",
  },
  {
    quote:
      "Built real-world applications including Quiz App, To-Do List, Notes App, Slider Animations, and Landing Pages using pure JavaScript and React.",
    name: "Project Experience",
    title: "Frontend Development Work",
  },
  {
    quote:
      "Strong experience in converting UI designs into pixel-perfect, responsive web interfaces with reusable components.",
    name: "UI Engineering Skills",
    title: "Design to Code",
  },
  {
    quote:
      "Using AI tools like Cursor to accelerate development, improve code quality, and build smarter frontend workflows.",
    name: "AI Assisted Development",
    title: "Modern Workflow",
  },
  {
    quote:
      "Focused on performance, UX, and scalability while building modern frontend systems and interactive user experiences.",
    name: "Engineering Mindset",
    title: "Frontend Architecture",
  },
];
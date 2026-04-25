"use client";

import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <AnimatedSection
          // text="Started my frontend journey by learning HTML, CSS, and JavaScript. Built foundational UI projects and improved my understanding of web development."
          text="Started my frontend journey by learning the fundamentals of HTML, CSS, and JavaScript. Built multiple UI projects to strengthen my core skills, focusing on layout, responsiveness, and clean design while improving my overall understanding of how modern web applications are structured."
          projects={[
            {
              name: "Landing Page",
              link: "https://omniaeldessouki.github.io/template-3/",
              // img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
              img: "/image (2).png",
            },
            {
              name: "To Do List App",
              link: "https://omniaeldessouki.github.io/To-Do-LIst/",
              img: "/image (6).png",
            },
            {
              name: "Notes App",
              link: "https://omniaeldessouki.github.io/Notes-App-/",
              img: "/image (8).png",
            },
          ]}
        />
      ),
    },

    {
      title: "Early 2025",
      content: (
        <AnimatedSection
          // text="Advanced into React and Next.js, building interactive applications with better architecture and reusable components."
          text="Advanced into React and Next.js, where I started building more dynamic and interactive applications. Focused on creating reusable components, improving code structure, and managing state efficiently while following best practices for scalable frontend development."
          projects={[
            {
              name: "Quiz App",
              link: "https://omniaeldessouki.github.io/Quiz-App/",
              img: "/image (3).png",
            },
            {
              name: "Slider Animation",
              link: "https://omniaeldessouki.github.io/Slider-Animations/",
              img: "/image (5).png",
            },
            {
              name: "Omnia Store",
              link: "https://omniaeldessouki.github.io/Omnia-Store/",
              img: "/image (7).png",
            },
          ]}
        />
      ),
    },

    {
      title: "2026",
      content: (
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-sm md:text-base text-neutral-800 dark:text-neutral-200"
          >
            {/* Currently focused on building AI-powered applications and scalable
            frontend systems using modern technologies. */}
            Currently focused on building AI-powered applications and scalable
            frontend systems using modern technologies, with an emphasis on
            performance, clean architecture, and delivering real-world
            production-level solutions.
          </motion.p>

          <AnimatedSection
            text="Production-level and advanced projects:"
            projects={[
              {
                name: "Real Estate Platform (Next.js)",
                link: "https://real-estate-website-pi-one.vercel.app/",
                // img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
                img: "/image (1).png",
              },
              {
                name: "AI Portfolio System",
                link: "/",
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
              },
            ]}
          />

          <FeatureList />
        </div>
      ),
    },
  ];

  return (
    // <div className="relative w-full max-w-7xl  overflow-hidden flex items-center justify-center m-0">
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden px-4">
        <Timeline data={data} />
      </div>
    </div>
  );
}

/* ================= ANIMATED SECTION ================= */

const AnimatedSection = ({ text, projects }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.p className="mb-4 text-sm md:text-base text-neutral-800 dark:text-neutral-200">
        {text}
      </motion.p>

      {projects && (
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href={p.link}
              target="_blank"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group block rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-32 w-full object-top group-hover:scale-105 transition duration-300"
              />
              <div className="p-3 text-sm text-purple-200">{p.name}</div>
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

/* ================= FEATURES (animated) ================= */

const features = [
  "AI-powered UI systems",
  "Next.js & React development",
  "Scalable frontend architecture",
  "Advanced animations & interactions",
  "Reusable component systems",
  "Performance optimization",
  "Figma to code ",
  "REST & GraphQL APIs",
  "WordPress collaboration",
];

const FeatureList = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="mt-6 space-y-3 text-sm md:text-base text-neutral-700 dark:text-neutral-300"
    >
      {features.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <CheckIcon />
          <span>{item}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

/* ================= ICON ================= */

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-purple-500 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1 14-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9Z" />
  </svg>
);

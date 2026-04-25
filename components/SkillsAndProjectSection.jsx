"use client";
import React from "react";
import { CometCard } from "@/components/ui/comet-card";
import { motion } from "framer-motion";

export default function SkillsAndProjectSection() {
  const skills = [
    {
      title: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      title: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      title: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      title: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      title: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "Tailwind CSS",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg",
    },
    {
      title: "Ant Design",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/antdesign.svg",
    },
    {
      title: "GitHub",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      title: "Figma",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },

    {
      title: "Bubble.io",
      src: "https://img.icons8.com/color/480/bubble.png",
    },
  ];

  return (
    <section className="w-full py-8 px-6 md:px-6  text-white" id="skills">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-black h-16"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-4 text-neutral-400 text-sm md:text-base"
        >
          Technologies I use to build modern, scalable, and AI-powered
          applications.
        </motion.p>
      </div>

      <div className="max-w-[1000px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
        {skills.map((skill, i) => (
          <CometCard key={i} className="w-full max-w-[140px]">
            <div className="flex flex-col items-center justify-center p-6 bg-neutral-800 rounded-[16px]">
              {/* LOGO */}
              <img
                src={skill.src}
                alt={skill.title}
                className="h-12 w-12 object-contain mb-4"
              />

              {/* TITLE */}
              <p className="text-xs text-center text-white font-bold">
                {skill.title}
              </p>
            </div>
          </CometCard>
        ))}
      </div>

      <div className="text-center mt-24 mb-12">
        <h3 className="text-2xl md:text-4xl font-bold text-white">
          Featured Project
        </h3>
      </div>

      <div className="flex justify-center">
        <CometCardItem />
      </div>
    </section>
  );
}

function CometCardItem() {
  return <CometCard className="w-full max-w-sm"></CometCard>;
}


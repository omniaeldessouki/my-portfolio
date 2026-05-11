"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const router = useRouter();

  const data = [
    {
      category: "Cash Mind",
      title: "Modern Cash Mind Platform",
      src: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1200&auto=format&fit=crop",
      link: "https://cash-mind.vercel.app/",
      content: <DummyContent />,
    },
    {
      category: "Real Estate",
      title: "Modern Real Estate Platform",
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
      link: "https://real-estate-website-pi-one.vercel.app/",
      content: <DummyContent />,
    },
    {
      category: "E-commerce",
      title: "Omnia Store",
      src: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/Omnia-Store/",
      content: <DummyContent />,
    },
    {
      category: "Quiz App",
      title: "Interactive Quiz Application",
      src: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/Quiz-App/",
      content: <DummyContent />,
    },
    {
      category: "Landing Page",
      title: "Responsive Landing Page",
      src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/template-3/",
      content: <DummyContent />,
    },
    {
      category: "Utility App",
      title: "Calculate Weight App",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/Calculate-Weight/",
      content: <DummyContent />,
    },
    {
      category: "Animation",
      title: "Slider Animations Project",
      src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/Slider-Animations/",
      content: <DummyContent />,
    },
    {
      category: "Productivity",
      title: "Notes App",
      src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/Notes-App-/",
      content: <DummyContent />,
    },
    {
      category: "Task Manager",
      title: "To Do List App",
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/To-Do-LIst/",
      content: <DummyContent />,
    },
  ];

  const cards = data.map((card, index) => (
    <motion.div
      key={card.src}
      onClick={() => router.push(card.link)}
      className="cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <Card card={card} index={index} />
    </motion.div>
  ));

  return (
    // <div className="w-full py-20" id="projects">
    <div
      className="w-full py-20"
      id="projects"
      flex
      items-center
      justify-center
    >
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden px-2">
        {/* Header animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 mb-10"
        >
          Featured Projects
        </motion.h2>

        {/* Carousel wrapper */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Carousel items={cards} />
        </motion.div>
      </div>
    </div>
  );
}

/* ================= Dummy Content ================= */

const DummyContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#0f0f0f] p-6 md:p-8 rounded-3xl border border-white/10"
    >
      <p className="text-neutral-300 text-sm md:text-lg leading-relaxed">
        This is one of my real frontend projects built using HTML, CSS,
        JavaScript, React.js, Next.js and modern UI practices. Focused on clean UI/UX,
        responsiveness, and interactive user experience.
      </p>

    
    </motion.div>
  );
};
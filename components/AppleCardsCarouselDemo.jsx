// "use client";

// import React from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// export function AppleCardsCarouselDemo() {
//   const router = useRouter();

//   const data = [
//     {
//       category: "Cash Mind",
//       title: "Modern Cash Mind Platform",
//       src: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1200&auto=format&fit=crop",
//       link: "https://cash-mind.vercel.app/",
//       content: <DummyContent />,
//     },
//     {
//       category: "Real Estate",
//       title: "Modern Real Estate Platform",
//       src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
//       link: "https://real-estate-website-pi-one.vercel.app/",
//       content: <DummyContent />,
//     },
//     {
//       category: "E-commerce",
//       title: "Omnia Store",
//       src: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200",
//       link: "https://omniaeldessouki.github.io/Omnia-Store/",
//       content: <DummyContent />,
//     },
//     {
//       category: "Quiz App",
//       title: "Interactive Quiz Application",
//       src: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1200",
//       link: "https://omniaeldessouki.github.io/Quiz-App/",
//       content: <DummyContent />,
//     },
//     {
//       category: "Landing Page",
//       title: "Responsive Landing Page",
//       src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200",
//       link: "https://omniaeldessouki.github.io/template-3/",
//       content: <DummyContent />,
//     },
//     {
//       category: "Utility App",
//       title: "Calculate Weight App",
//       src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
//       link: "https://omniaeldessouki.github.io/Calculate-Weight/",
//       content: <DummyContent />,
//     },
//     {
//       category: "Animation",
//       title: "Slider Animations Project",
//       src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
//       link: "https://omniaeldessouki.github.io/Slider-Animations/",
//       content: <DummyContent />,
//     },
//     {
//       category: "Productivity",
//       title: "Notes App",
//       src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200",
//       link: "https://omniaeldessouki.github.io/Notes-App-/",
//       content: <DummyContent />,
//     },
//     {
//       category: "Task Manager",
//       title: "To Do List App",
//       src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
//       link: "https://omniaeldessouki.github.io/To-Do-LIst/",
//       content: <DummyContent />,
//     },
//   ];

//   const cards = data.map((card, index) => (
//     <motion.div
//       key={card.src}
//       onClick={() => router.push(card.link)}
//       className="cursor-pointer"
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{
//         duration: 0.5,
//         delay: index * 0.08,
//       }}
//       viewport={{ once: true }}
//       whileHover={{ scale: 1.03 }}
//     >
//       <Card card={card} index={index} />
//     </motion.div>
//   ));

//   return (
//     // <div className="w-full py-20" id="projects">
//     <div
//       className="w-full py-20"
//       id="projects"
//       flex
//       items-center
//       justify-center
//     >
//       <div className="relative w-full max-w-6xl mx-auto overflow-hidden px-2">
//         {/* Header animation */}
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 mb-10"
//         >
//           Featured Projects
//         </motion.h2>

//         {/* Carousel wrapper */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <Carousel items={cards} />
//         </motion.div>
//       </div>
//     </div>
//   );
// }

// /* ================= Dummy Content ================= */

// const DummyContent = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="bg-[#0f0f0f] p-6 md:p-8 rounded-3xl border border-white/10"
//     >
//       <p className="text-neutral-300 text-sm md:text-lg leading-relaxed">
//         This is one of my real frontend projects built using HTML, CSS,
//         JavaScript, React.js, Next.js and modern UI practices. Focused on clean UI/UX,
//         responsiveness, and interactive user experience.
//       </p>

    
//     </motion.div>
//   );
// };





"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Carousel } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const data = [
    {
      category: "Cash Mind",
      title: "Modern Cash Mind Platform",
      description:
        "A modern financial dashboard built with Next.js, focused on secure login, charts, and clean UI/UX.",
      src: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=1200&auto=format&fit=crop",
      link: "https://cash-mind.vercel.app/",
    },
    {
      category: "Real Estate",
      title: "Modern Real Estate Platform",
      description:
        "Property listing platform with search filters, responsive design, and smooth browsing experience.",
      src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
      link: "https://real-estate-website-pi-one.vercel.app/",
    },
    {
      category: "E-commerce",
      title: "Omnia Store",
      description:
        "Responsive e-commerce store with cart persistence and dynamic product interactions.",
      src: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/Omnia-Store/",
    },
    {
      category: "Quiz App",
      title: "Interactive Quiz Application",
      description:
        "Dynamic quiz app with scoring system, JSON data, and real-time result handling.",
      src: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/Quiz-App/",
    },
    {
      category: "Landing Page",
      title: "Responsive Landing Page",
      description:
        "Modern business landing page built with mobile-first layout and CSS animations.",
      src: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/template-3/",
    },
    {
      category: "Utility App",
      title: "Calculate Weight App",
      description:
        "Simple utility app with input validation and live calculation updates.",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/Calculate-Weight/",
    },
    {
      category: "Animation",
      title: "Slider Animations Project",
      description:
        "A project showcasing smooth transitions, slider logic, and advanced UI animation.",
      src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/Slider-Animations/",
    },
    {
      category: "Productivity",
      title: "Notes App",
      description:
        "Notes app with CRUD operations and localStorage persistence.",
      src: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/Notes-App-/",
    },
    {
      category: "Task Manager",
      title: "To Do List App",
      description:
        "Task management app with complete/pending states and auto-save functionality.",
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200",
      link: "https://omniaeldessouki.github.io/To-Do-LIst/",
    },
  ];

  const cards = data.map((card, index) => (
    <motion.div
      key={card.src}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="shrink-0"
    >
      <Link
        href={card.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-[320px] sm:w-[360px] md:w-[420px] h-full"
      >
        <ProjectCard card={card} />
      </Link>
    </motion.div>
  ));

  return (
    <div className="w-full py-20" id="projects">
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden px-2">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-7xl pl-4 mx-auto text-2xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 mb-10"
        >
          Featured Projects
        </motion.h2>

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

function ProjectCard({ card }) {
  return (
    <div className="group relative h-[550px] w-full overflow-hidden rounded-3xl border bg-[#111111] transition-all duration-300">
      <img
        src={card.src}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/8 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 text-white">
        <p className="text-sm font-medium text-white/75">{card.category}</p>
        <h3 className="mt-2 text-xl md:text-2xl font-bold leading-tight">
          {card.title}
        </h3>

        <p className="mt-4 max-h-0 overflow-hidden text-sm text-white/80 opacity-0 transition-all duration-300 group-hover:max-h-40 group-hover:opacity-100">
          {card.description}
        </p>
      </div>
    </div>
  );
}
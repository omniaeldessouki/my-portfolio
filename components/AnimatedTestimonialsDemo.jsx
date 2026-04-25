// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// export function AnimatedTestimonialsDemo() {
//   const testimonials = [
//     {
//       quote:
//         "UI Developer focused on crafting clean, responsive, and visually engaging interfaces with strong attention to detail and pixel-perfect execution.",
//       name: "UI Development",
//       designation: "Design-to-Code Specialist",
//       src: "/omnia.png",
//     },
//     {
//       quote:
//         "Frontend Developer experienced in building scalable web applications using React and Next.js, with reusable components and modern architecture.",
//       name: "Frontend Engineering",
//       designation: "React & Next.js Developer",
//         src: "/omnia.png",
//     },
//     {
//       quote:
//         "AI-assisted developer leveraging tools like Cursor AI to accelerate workflows, improve code quality, and build smarter interfaces.",
//       name: "AI Development Workflow",
//       designation: "Modern AI Engineer",
//        src: "/omnia.png",
//     },
//     {
//       quote:
//         "Built multiple real-world projects including Quiz App, To-Do List, Notes App, and Landing Pages with focus on usability and performance.",
//       name: "Projects Experience",
//       designation: "Hands-on Portfolio Work",
//         src: "/omnia.png",
//     },
//   ];

//   return <AnimatedTestimonials testimonials={testimonials} />;
// }

// "use client";

// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// export function AnimatedTestimonialsDemo() {
//   const testimonials = [
//     {
//       quote:
//         "I specialize in building modern, responsive user interfaces with a strong focus on clean design, smooth user experience, and pixel-perfect implementation.",
//       // name: "UI Development",
//       designation: "Frontend UI Specialist",
//       // src: "/omnia.png",
//       name: "HTML",
//       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//     },
//     {
//       quote:
//         "Experienced in developing scalable frontend applications using React and Next.js, with a focus on reusable components, performance, and clean architecture.",
//       // name: "Frontend Engineering",
//       designation: "React & Next.js Developer",
//       // src: "/omnia.png",
//       name: "CSS",
//       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//     },
//     {
//       quote:
//         "I leverage AI tools like Cursor AI to speed up development, write better code, and build smarter, more efficient user experiences.",
//       // name: "AI-Powered Development",
//       designation: "AI-Enhanced Workflow",
//       // src: "/omnia.png",
//       name: "JavaScript",
//       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//     },
//     {
//       quote:
//         "Built multiple real-world projects including dashboards, e-commerce platforms, and interactive apps with focus on usability, responsiveness, and performance.",
//       // name: "Real Projects",
//       designation: "Production-Level Experience",
//       // src: "/omnia.png",
//       name: "React",
//       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     },
//     {
//       quote:
//         "Built multiple real-world projects including dashboards, e-commerce platforms, and interactive apps with focus on usability, responsiveness, and performance.",
//       // name: "Real Projects",
//       designation: "Production-Level Experience",
//       // src: "/omnia.png",
//       name: "Tailwind CSS",
//       src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg",
//     },
//     {
//       quote:
//         "Built multiple real-world projects including dashboards, e-commerce platforms, and interactive apps with focus on usability, responsiveness, and performance.",
//       // name: "Real Projects",
//       designation: "Production-Level Experience",
//       // src: "/omnia.png",
//       name: "Next.js",
//       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//     },
//   ];

//   // const testimonials = [
//   //   {
//   //     name: "HTML",
//   //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//   //   },
//   //   {
//   //     name: "CSS",
//   //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//   //   },
//   //   {
//   //     name: "JavaScript",
//   //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//   //   },
//   //   {
//   //     name: "React",
//   //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//   //   },
//   //   {
//   //     name: "Next.js",
//   //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//   //   },
//   //   {
//   //     name: "Tailwind CSS",
//   //     src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg",
//   //   },
//   //   {
//   //     name: "Ant Design",
//   //     src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/antdesign.svg",
//   //   },
//   //   {
//   //     name: "GitHub",
//   //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//   //   },
//   //   {
//   //     name: "Figma",
//   //     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
//   //   },

//   //   {
//   //     name: "Bubble.io",
//   //     src: "https://img.icons8.com/color/480/bubble.png",
//   //   },
//   // ];
//   return (
//     <div className="w-full py-20">
//       {/* TITLE */}
//       <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-black">
//         How I Build Digital Experiences
//       </h2>

//       <AnimatedTestimonials testimonials={testimonials} />
//     </div>
//   );
// }

"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const skills = [
    {
      title: "CSS",
      description:
        "Create responsive layouts, animations, and modern UI designs.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      title: "HTML",
      description: "Build semantic, accessible, and well-structured web pages.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      title: "JavaScript",
      description: "Develop dynamic and interactive user experiences.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      title: "React",
      description:
        "Build reusable components and scalable frontend applications.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      title: "Next.js",
      description: "Create fast, SEO-friendly apps with SSR and routing.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "Tailwind CSS",
      description: "Style interfaces utility-first approach.",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/tailwindcss.svg",
    },
    {
      title: "Ant Design",
      description:
        "Use ready-made UI components to build professional interfaces.",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/antdesign.svg",
    },
    {
      title: "GitHub",
      description: "Manage code, version control, and collaborate with teams.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      title: "Figma",
      description: "Translate any design into code.",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
  ];

  // transform to match AnimatedTestimonials structure
  const formattedSkills = skills.map((skill) => ({
    quote: skill.description,
    name: skill.title,
    designation: "Skill",
    src: skill.icon,
  }));

  return (
    <section className="w-full py-20 bg-white" id="skills">
      {/* TITLE */}
      <div className="max-w-5xl mx-auto text-center mb-6 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-black">
          My Tech Stack
        </h2>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          Technologies I use to build modern, scalable and high-performance web
          applications.
        </p>
      </div>

      {/* SKILLS */}
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedTestimonials testimonials={formattedSkills} />
      </div>
    </section>
  );
}

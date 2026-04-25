// import { FocusCards } from "@/components/ui/focus-cards";

// export function FocusCardsDemo() {
//   const cards = [
//     {
//       title: "Forest Adventure",
//       src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Valley of life",
//       src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Sala behta hi jayega",
//       src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Camping is for pros",
//       src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "The road not taken",
//       src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "The First Rule",
//       src: "https://assets.aceternity.com/the-first-rule.png",
//     },
//   ];

//   return (
//     <div style={{padding:'100px'}}>
//       <FocusCards cards={cards} />
//     </div>
//   );
// }

import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
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
      title: "Cursor AI",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    },
    {
      title: "Bubble.io",
      src: "https://img.icons8.com/color/480/bubble.png",
    },
  ];

  return (
    <div className="w-full mx-16 px-6 md:px-16 py-20">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-neutral-800 dark:text-white">
        Skills & Technologies
      </h2>
      <div className="w-full max-w-6xl flex justify-center">
        <FocusCards cards={cards} />
      </div>
    </div>
  );
}

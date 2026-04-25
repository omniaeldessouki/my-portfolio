"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lens } from "@/components/ui/lens";
import { CardSpotlight } from "@/components/ui/card-spotlight";


export default function AboutMeSection() {
  const [hovering, setHovering] = useState(false);

  return (
    <CardSpotlight
      className="min-h-[590px] w-full mx-auto bg-neutral-950"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-10 p-1 md:p-16 w-full max-w-5xl mx-auto"
      >
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <Lens hovering={hovering} setHovering={setHovering}>
            <motion.img
              src="/omnia.png"
              alt="Omnia AI Portfolio"
               className="rounded-full w-[340px] h-[350px] object-top"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </Lens>
        </motion.div>

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
          className="w-full md:w-1/2 text-center md:text-left relative z-20 text-white"
        >
          {/* TITLE */}
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500"
          >
            Omnia Frontend Portfolio
          </motion.h2>

          {/* SUBTITLE */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-neutral-400 mt-4 max-w-[600px]"
          >
            A modern frontend portfolio showcasing real-world projects, UI
            systems, and AI-enhanced development workflows.
          </motion.p>

          {/* FEATURES */}
          <motion.ul
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="mt-6 space-y-3"
          >
            <Step title="Built with React, Next.js, and modern UI systems" />
            <Step title="AI-assisted development using Cursor & smart tools" />
            <Step title="Reusable components & scalable architecture" />
            <Step title="Responsive, production-ready web applications" />
          </motion.ul>

          {/* DESCRIPTION */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="text-neutral-400 mt-6 text-sm max-w-[600px]"
          >
            This portfolio represents my journey as a Frontend Developer,
            focusing on building clean, interactive, and scalable user
            experiences. It includes real projects like Quiz App, To-Do List,
            Notes App, Landing Pages, and UI animations.
          </motion.p>
        </motion.div>
      </motion.div>
    </CardSpotlight>
  );
}


const Step = ({ title }) => {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0 },
      }}
      className="flex gap-3 items-start text-left"
    >
      <CheckIcon />
      <p className="text-white text-sm">{title}</p>
    </motion.li>
  );
};


const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0"
    >
      <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 7z" />
    </svg>
  );
};


// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { CardSpotlight } from "@/components/ui/card-spotlight";

// export default function AboutMeSection() {
//   return (
//     <CardSpotlight
//       className="min-h-[570px] w-full mx-auto bg-neutral-950"
//       id="about"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="flex flex-col items-center justify-center gap-10 p-1 md:p-16 w-full max-w-3xl mx-auto text-center"
//       >
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           variants={{
//             hidden: {},
//             show: {
//               transition: {
//                 staggerChildren: 0.12,
//               },
//             },
//           }}
//           className="w-full text-center relative z-20 text-white max-w-2xl mx-auto"
//         >
//           {/* TITLE */}
//           <motion.h2
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               show: { opacity: 1, y: 0 },
//             }}
//             className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500 mb-6"
//           >
//             Omnia Frontend Portfolio
//           </motion.h2>

//           {/* SUBTITLE */}
//           <motion.p
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               show: { opacity: 1, y: 0 },
//             }}
//             className="text-neutral-400 text-lg md:text-xl mb-8 max-w-[600px] mx-auto leading-relaxed"
//           >
//             A modern frontend portfolio showcasing real-world projects, UI
//             systems, and AI-enhanced development workflows.
//           </motion.p>

//           {/* FEATURES */}
//           <motion.ul
//             variants={{
//               hidden: {},
//               show: {
//                 transition: {
//                   staggerChildren: 0.08,
//                 },
//               },
//             }}
//             className="mb-8 space-y-4 max-w-md mx-auto"
//           >
//             <Step title="Built with React, Next.js, and modern UI systems" />
//             <Step title="AI-assisted development using Cursor & smart tools" />
//             <Step title="Reusable components & scalable architecture" />
//             <Step title="Responsive, production-ready web applications" />
//           </motion.ul>

//           {/* DESCRIPTION */}
//           <motion.p
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               show: { opacity: 1, y: 0 },
//             }}
//             className="text-neutral-400 text-sm md:text-base max-w-[600px] mx-auto leading-relaxed"
//           >
//             This portfolio represents my journey as a Frontend Developer,
//             focusing on building clean, interactive, and scalable user
//             experiences. It includes real projects like Quiz App, To-Do List,
//             Notes App, Landing Pages, and UI animations.
//           </motion.p>
//         </motion.div>
//       </motion.div>
//     </CardSpotlight>
//   );
// }

// const Step = ({ title }) => {
//   return (
//     <motion.li
//       variants={{
//         hidden: { opacity: 0, x: -20 },
//         show: { opacity: 1, x: 0 },
//       }}
//       className="flex gap-3 items-start text-left pl-8 relative"
//     >
//       <CheckIcon />
//       <p className="text-white text-sm md:text-base">{title}</p>
//     </motion.li>
//   );
// };

// const CheckIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0 absolute left-0"
//     >
//       <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 7z" />
//     </svg>
//   );
// };

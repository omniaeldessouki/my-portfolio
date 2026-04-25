// // "use client";
// // import React, { useState } from "react";
// // import { motion } from "framer-motion";
// // import { ContainerScroll } from "./ui/container-scroll-animation";
// // import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// // import Link from "next/link";
// // import { Lens } from "@/components/ui/lens";

// // // animations
// // const container = {
// //   hidden: { opacity: 0 },
// //   show: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.15,
// //     },
// //   },
// // };

// // const item = {
// //   hidden: { opacity: 0, y: 30 },
// //   show: { opacity: 1, y: 0 },
// // };

// // export function HeroScrollDemo() {
// //   const [hovering, setHovering] = useState(false);
// //   return (
// //     <BackgroundBeamsWithCollision>
// //       <section className="min-h-screen flex items-center justify-center gap-8 px-6 md:px-32 pt-[70px]">
// //         <motion.div
// //           variants={container}
// //           initial="hidden"
// //           animate="show"
// //           // className="text-start px-4 pb-20 flex flexd items-center"
// //           className="text-start px-4 pb-20 flex flex-col  justify-center pt-[70px]"
// //         >
// //           <motion.p
// //             variants={item}
// //             className="text-5xl md:text-4rem] md:text-base text-neutral-400 mb-3"
// //           >
// //             Hi, I'm Omnia El Dessouki 👋
// //           </motion.p>

// //           <motion.h1
// //             variants={item}
// //             className="text-5xl md:text-[4rem] font-bold mt-2 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500"
// //           >
// //             Frontend Developer Experiences
// //           </motion.h1>

// //           <motion.p
// //             variants={item}
// //             className="mt-6 text-neutral-500 text-sm md:text-lg max-w-2xl "
// //           >
// //             I build modern, responsive and scalable web applications using
// //             React, Next.js, and AI tools to deliver smart digital solutions.
// //           </motion.p>

// //           <motion.div variants={item} className="flex gap-4 mt-8">
// //             <Link href="#projects">
// //               <button className="px-6 py-3 rounded-full bg-purple-600 text-white hover:scale-105 transition">
// //                 View Projects
// //               </button>
// //             </Link>

// //             <Link href="#contact">
// //               <button className="px-6 py-3 rounded-full border border-purple-500 text-purple-400 hover:scale-105 transition">
// //                 Contact Me
// //               </button>
// //             </Link>
// //           </motion.div>
// //         </motion.div>

// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           whileInView={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.6 }}
// //           viewport={{ once: true }}
// //           className="w-full md:w-1/2"
// //         >
// //           <Lens hovering={hovering} setHovering={setHovering}>
// //             <motion.img
// //               src="/omnia.png"
// //               alt="Omnia AI Portfolio"
// //               className="rounded-2xl w-[400px] h-[530px] object-top"
// //               whileHover={{ scale: 1.03 }}
// //               transition={{ duration: 0.3 }}
// //             />
// //           </Lens>
// //         </motion.div>
// //       </section>
// //     </BackgroundBeamsWithCollision>
// //   );
// // }

// "use client";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import Link from "next/link";
// import { Lens } from "@/components/ui/lens";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0 },
// };

// export function HeroScrollDemo() {
//   const [hovering, setHovering] = useState(false);

//   return (
//     <BackgroundBeamsWithCollision>
//       <section
//         className="
//     max-w-[1620px] mx-auto
//     min-h-screen
//     flex
//     flex-col md:flex-row
//     items-center
//     justify-between
//     gap-16
//     px-6 md:px-20
//     pt-[0px] md:pt-[70px]
//   "
//       >
//         {/* TEXT */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="
//             text-center md:text-left
//             flex flex-col justify-center
//            order-2 md:order-none
//           "
//         >
//           <motion.p
//             variants={item}
//             className="text-sm md:text-base text-neutral-400 mb-3"
//           >
//             Hi, I'm Omnia El Dessouki 👋
//           </motion.p>

//           <motion.h1
//             variants={item}
//             className="
//    h-[60px]
//   flex items-center

//   text-3xl sm:text-4xl md:text-[3.5rem]
//   font-bold
//   leading-[1.1]

//   bg-clip-text text-transparent
//   bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500
//    mx-auto md:mx-0
// "
//           >
//             Frontend Developer
//           </motion.h1>

//           <motion.p
//             variants={item}
//             className="
//               mt-6
//               text-neutral-500
//               text-sm md:text-lg
//               max-w-md md:max-w-xl
//               mx-auto md:mx-0
//             "
//           >
//             I build modern, responsive and scalable web applications using
//             React, Next.js, and AI tools to deliver smart digital solutions.
//           </motion.p>

//           <motion.div
//             variants={item}
//             className="
//               flex
//               flex-col sm:flex-row   /* 👈 buttons تحت بعض في الموبايل */
//               gap-4
//               mt-8
//               justify-center md:justify-start
//             "
//           >
//             <Link href="#projects">
//               <button
//                 className="
//                 px-6 py-3 rounded-full
//                 bg-purple-600 text-white
//                 hover:scale-105 transition w-full sm:w-auto
//               "
//               >
//                 View Projects
//               </button>
//             </Link>

//             <Link href="#contact">
//               <button
//                 className="
//                 px-6 py-3 rounded-full
//                 border border-purple-500 text-purple-400
//                 hover:scale-105 transition w-full sm:w-auto
//               "
//               >
//                 Contact Me
//               </button>
//             </Link>
//           </motion.div>
//         </motion.div>

//         {/* IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="w-full md:w-1/2 flex justify-center order-1 md:order-none "
//         >
//           <Lens hovering={hovering} setHovering={setHovering}>
//             <motion.img
//               src="/omnia.png"
//               alt="Omnia AI Portfolio"
//               className="
//               rounded-2xl
//               w-[380px] md:w-[400px]
//               h-[400px]   md:h-[530px]
//               object-top
//               "
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.3 }}
//             />
//           </Lens>
//         </motion.div>
//       </section>
//     </BackgroundBeamsWithCollision>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Link from "next/link";
import { Lens } from "@/components/ui/lens";

const TypewriterTitle = ({ variants }) => {
  const texts = ["Frontend ", "UI "];
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 100);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, 70);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }, 300);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <motion.h1
      variants={variants}
      className="
        h-[60px] flex items-center
        text-3xl sm:text-4xl md:text-[3.5rem]
        font-bold leading-[1.1]
        bg-clip-text text-transparent
        bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500
        mx-auto md:mx-0
      "
    >
      {displayText} Developer
      <span className="ml-1 inline-block w-[2px] h-[1em] bg-pink-500 animate-pulse" />
    </motion.h1>
  );
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export function HeroScrollDemo() {
  const [hovering, setHovering] = useState(false);

  return (
    <BackgroundBeamsWithCollision>
      <section
        className="
          max-w-[1620px] mx-auto
          min-h-screen
          flex
          flex-col md:flex-row
          items-center
          justify-between
          gap-16
          px-6 md:px-20
          pt-[0px] md:pt-[70px]
        "
        id="home"
      >
        {/* TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="
            text-center md:text-left
            flex flex-col justify-center
            order-2 md:order-none
          "
        >
          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-neutral-400 mb-3"
          >
            Hi, I'm Omnia El Dessouki 👋
          </motion.p>

          <TypewriterTitle variants={item} />

          <motion.p
            variants={item}
            className="
              mt-6
              text-neutral-500
              text-sm md:text-lg
              max-w-md md:max-w-xl
              mx-auto md:mx-0
            "
          >
            I build modern, responsive and scalable web applications using
            React, Next.js, and AI tools to deliver smart digital solutions.
          </motion.p>

          <motion.div
            variants={item}
            className="
              flex
              flex-col sm:flex-row
              gap-4
              mt-8
              justify-center md:justify-start
            "
          >
            <Link href="#projects">
              <button
                className="
                  px-6 py-3 rounded-full
                  bg-purple-600 text-white
                  hover:scale-105 transition w-full sm:w-auto
                "
              >
                View Projects
              </button>
            </Link>

            <Link href="#contact">
              <button
                className="
                  px-6 py-3 rounded-full
                  border border-purple-500 text-purple-400
                  hover:scale-105 transition w-full sm:w-auto
                "
              >
                Contact Me
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center order-1 md:order-none"
        >
          <Lens hovering={hovering} setHovering={setHovering}>
            <motion.img
              src="/omnia.png"
              alt="Omnia AI Portfolio"
              className="
                rounded-2xl
                w-[380px] md:w-[400px]
                h-[400px] md:h-[520px]
                object-top
              "
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          </Lens>
        </motion.div>
      </section>
    </BackgroundBeamsWithCollision>
  );
}

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import Link from "next/link";

// const TypewriterTitle = ({ variants }) => {
//   const texts = ["Frontend ", "UI "];
//   const [textIndex, setTextIndex] = useState(0);
//   const [displayText, setDisplayText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const current = texts[textIndex];
//     let timeout;

//     if (!isDeleting && displayText.length < current.length) {
//       timeout = setTimeout(() => {
//         setDisplayText(current.slice(0, displayText.length + 1));
//       }, 100);
//     } else if (!isDeleting && displayText.length === current.length) {
//       timeout = setTimeout(() => {
//         setIsDeleting(true);
//       }, 1200);
//     } else if (isDeleting && displayText.length > 0) {
//       timeout = setTimeout(() => {
//         setDisplayText(current.slice(0, displayText.length - 1));
//       }, 70);
//     } else if (isDeleting && displayText.length === 0) {
//       timeout = setTimeout(() => {
//         setIsDeleting(false);
//         setTextIndex((prev) => (prev + 1) % texts.length);
//       }, 300);
//     }

//     return () => clearTimeout(timeout);
//   }, [displayText, isDeleting, textIndex]);

//   return (
//     <motion.h1
//       variants={variants}
//       className="
//         h-[60px] flex items-center justify-center
//         text-3xl sm:text-4xl md:text-[3.5rem]
//         font-bold leading-[1.1]
//         bg-clip-text text-transparent
//         bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500
//         mx-auto
//       "
//     >
//       {displayText} Developer
//       <span className="ml-1 inline-block w-[2px] h-[1em] bg-pink-500 animate-pulse" />
//     </motion.h1>
//   );
// };

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0 },
// };

// export function HeroScrollDemo() {
//   return (
//     <BackgroundBeamsWithCollision>
//       <section
//         className="
//           max-w-[1620px] mx-auto
//           min-h-screen
//           flex
//           flex-col
//           items-center
//           justify-center
//           gap-16
//           px-6 md:px-20
//           pt-[0px] md:pt-[70px]
//         "
//       >
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="
//             text-center
//             flex flex-col items-center justify-center
//             max-w-4xl mx-auto
//           "
//         >
//           <motion.p
//             variants={item}
//             className="text-xl md:text-2xl text-neutral-400 mb-3"
//           >
//             Hi, I'm Omnia El Dessouki 👋
//           </motion.p>

//           <TypewriterTitle variants={item} />

//           <motion.p
//             variants={item}
//             className="
//               mt-6
//               text-neutral-500
//               text-sm md:text-lg
//               max-w-md md:max-w-xl
//               mx-auto
//             "
//           >
//             I build modern, responsive and scalable web applications using
//             React, Next.js, and AI tools to deliver smart digital solutions.
//           </motion.p>

//           <motion.div
//             variants={item}
//             className="
//               flex
//               flex-col sm:flex-row
//               gap-4
//               mt-8
//               justify-center
//             "
//           >
//             <Link href="#projects">
//               <button
//                 className="
//                   px-6 py-3 rounded-full
//                   bg-purple-600 text-white
//                   hover:scale-105 transition w-full sm:w-auto
//                 "
//               >
//                 View Projects
//               </button>
//             </Link>

//             <Link href="#contact">
//               <button
//                 className="
//                   px-6 py-3 rounded-full
//                   border border-purple-500 text-purple-400
//                   hover:scale-105 transition w-full sm:w-auto
//                 "
//               >
//                 Contact Me
//               </button>
//             </Link>
//           </motion.div>
//         </motion.div>
//       </section>
//     </BackgroundBeamsWithCollision>
//   );
// }

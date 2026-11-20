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

// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import Link from "next/link";
// import { Lens } from "@/components/ui/lens";

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
//         min-h-[60px] grid content-center
//         text-3xl sm:text-4xl min-[767px]:text-[clamp(2rem,4.4vw,3.25rem)] min-[1190px]:text-[3.5rem]
//         font-bold leading-[1.1]
//         bg-clip-text text-transparent
//         bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500
//         mx-auto min-[767px]:mx-0
//       "
//     >
//       <span>
//         {displayText}
//         <span className="whitespace-nowrap">
//           Developer
//           <span
//             aria-hidden="true"
//             className="ml-1 inline-block h-[1em] w-[2px] align-[-0.1em] bg-pink-500 animate-pulse"
//           />
//         </span>
//       </span>
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
//   const [hovering, setHovering] = useState(false);

//   return (
//     <BackgroundBeamsWithCollision className="min-[767px]:max-[1190px]:h-auto">
//       <section
//         className="
//           max-w-[1620px] mx-auto
//           min-h-screen
//           flex
//           flex-col min-[767px]:flex-row
//           items-center
//           justify-between
//           gap-16 min-[767px]:max-[1190px]:gap-6
//           px-6 min-[1190px]:px-20
//           min-[767px]:max-[1190px]:w-full min-[767px]:max-[1190px]:pb-8 min-[767px]:pt-24 min-[1190px]:pt-[70px]
//         "
//         id="home"
//       >
//         {/* TEXT */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="
//             text-center min-[767px]:text-left
//             flex flex-col justify-center
//             order-2 min-[767px]:order-none
//             min-[767px]:max-[1190px]:min-w-0 min-[767px]:max-[1190px]:flex-1
//           "
//         >
//           <motion.p
//             variants={item}
//             className="text-xl min-[767px]:text-2xl text-neutral-400 mb-3"
//           >
//             Hi, I'm Omnia El Dessouki 👋
//           </motion.p>

//           <TypewriterTitle variants={item} />

//           <motion.p
//             variants={item}
//             className="
//               mt-6
//               text-neutral-500
//               text-sm min-[767px]:text-lg
//               max-w-md min-[767px]:max-w-xl
//               mx-auto min-[767px]:mx-0
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
//               justify-center min-[767px]:justify-start
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

//         {/* IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="w-full min-[767px]:w-[36%] min-[767px]:max-[1190px]:shrink-0 min-[1190px]:w-1/2 flex justify-center order-1 min-[767px]:order-none"
//         >
//           <Lens hovering={hovering} setHovering={setHovering}>
//             <motion.img
//               src="/Thoughtful Student in Sunlit Classroom.png"
//               alt="Omnia AI Portfolio"
//               className="
//                 rounded-2xl
//                 w-[380px] min-[767px]:w-full min-[1190px]:w-[500px]
//                 h-[380px] min-[767px]:max-[1190px]:h-auto min-[767px]:max-[1190px]:aspect-[4/5] min-[1190px]:h-[600px]
//                 min-[767px]:max-[1190px]:object-cover
//                 object-top
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
        min-h-[60px] grid content-center
        text-3xl sm:text-4xl min-[767px]:text-[clamp(2rem,4.2vw,3.25rem)] min-[1190px]:text-[3.5rem]
        font-bold leading-[1.1]
        bg-clip-text text-transparent
        bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500
        mx-auto min-[767px]:mx-0
      "
    >
      <span>
        {displayText}
        <span className="whitespace-nowrap">
          Developer
          <span
            aria-hidden="true"
            className="ml-1 inline-block h-[1em] w-[2px] align-[-0.1em] bg-pink-500 animate-pulse"
          />
        </span>
      </span>
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
    <BackgroundBeamsWithCollision className="min-[767px]:max-[1190px]:h-auto">
      <section
        className="
          relative
          max-w-[1620px] w-full mx-auto
          min-h-screen
          flex
          flex-col min-[767px]:flex-row
          items-center
          justify-between
          gap-12 min-[767px]:gap-8
          px-6 min-[1190px]:px-20
          pt-12 pb-12 min-[767px]:pt-28 min-[90px]:pt-[100px]
        "
        id="home"
      >
        {/* DESKTOP & IPAD BLENDED BACKGROUND IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="
            hidden min-[767px]:flex
            absolute inset-y-0 right-3 min-[1990px]:right-16 z-10
            pt-16 pb-4 min-[1190px]:pt-[0px]
            w-[55%] min-[1990px]:w-[60%]
            items-end justify-end
          "
        >
          <div
            style={{
              WebkitMaskImage:
                "radial-gradient(ellipse 68% 72% at 54% 50%, #000 52%, transparent 96%)",
              maskImage:
                "radial-gradient(ellipse 68% 72% at 54% 50%, #000 52%, transparent 96%)",
            }}
            className="w-full max-w-[720px] flex justify-center"
          >
            <Lens hovering={hovering} setHovering={setHovering}>
              <motion.img
                src="/Focused Workspace Portrait.png"
                alt="Omnia AI Portfolio"
                className="
                  w-[400px] h-[600px]
                  min-[1090px]:w-[500px] min-[1090px]:h-[620px]
                  object-fit object-center rounded-2xl
                  "
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </Lens>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="
            relative z-10
            text-center min-[767px]:text-left
            flex flex-col justify-center
            order-2 min-[767px]:order-none
            w-full min-[767px]:max-w-[55%] min-[1190px]:max-w-[52%]
          "
        >
          <motion.p
            variants={item}
            className="text-xl min-[767px]:text-2xl text-neutral-500 mb-3"
          >
            Hi, I'm Omnia El Dessouki 👋
          </motion.p>

          <TypewriterTitle variants={item} />

          <motion.p
            variants={item}
            className="
              mt-6
              text-neutral-600
              text-sm min-[767px]:text-lg
              max-w-md min-[767px]:max-w-lg
              mx-auto min-[767px]:mx-0
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
              justify-center min-[767px]:justify-start
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
                  border border-purple-500 text-purple-500
                  bg-white/80 backdrop-blur-sm
                  hover:scale-105 transition w-full sm:w-auto
                "
              >
                Contact Me
              </button>
            </Link>
          </motion.div>
        </motion.div>

        {/* MOBILE IMAGE ONLY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full flex align-center justify-center order-1 min-[767px]:hidden"
        >
          <Lens hovering={hovering} setHovering={setHovering}>
            <motion.img
              src="/Focused Workspace Portrait.png"
              alt="Omnia AI Portfolio"
              className="
                rounded-2xl
                w-[340px] sm:w-[380px]
                h-[360px] sm:h-[380px]
                object-cover object-center
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

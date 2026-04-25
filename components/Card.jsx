// import { CardSpotlight } from "@/components/ui/card-spotlight";

// export default function Card() {
//   return (
//     <div className="flex justify-center">
//       <CardSpotlight className="min-h-[400px] w-full bg-neutral-900">
//         <div className="flex flex-col items-center justify-center text-center p-10 md:p-16">
//           {/* TITLE (GRADIENT) */}
//           <p className="text-3xl font-bold relative z-24 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500">
//             Secure AI Authentication System
//           </p>

//           {/* SUBTITLE */}
//           <div className="text-purple-200 mt-4 relative z-20">
//             Follow these steps to secure your AI-powered platform:
//           </div>

//           {/* STEPS */}
//           <ul className="mt-6 space-y-3 relative z-20">
//             <Step title="Verify user identity with secure authentication" />
//             <Step title="Enable encrypted session handling" />
//             <Step title="Apply AI-based fraud detection layer" />
//             <Step title="Monitor access with real-time logging" />
//           </ul>

//           {/* DESCRIPTION */}
//           <p className="text-purple-300 mt-6 text-sm max-w-[600px] relative z-20">
//             Modern applications require advanced security layers powered by AI
//             and encryption to protect sensitive user data and prevent
//             unauthorized access.
//           </p>
//         </div>
//       </CardSpotlight>
//     </div>
//   );
// }

// /* ---------------- STEP ---------------- */

// const Step = ({ title }) => {
//   return (
//     <li className="flex gap-3 items-start text-left">
//       <CheckIcon />
//       <p className="text-purple-100 text-sm">{title}</p>
//     </li>
//   );
// };

// /* ---------------- ICON ---------------- */

// const CheckIcon = () => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0"
//     >
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path
//         d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
//         fill="currentColor"
//         strokeWidth="0"
//       />
//     </svg>
//   );
// };
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function Card() {
  return (
    <div className="flex justify-center">
      <CardSpotlight className="min-h-[420px] w-full bg-neutral-950">
        <div className="flex flex-col items-center justify-center text-center p-10 md:p-16">

          {/* TITLE */}
          <p className="text-3xl md:text-4xl font-bold relative z-20 mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500">
            Omnia AI Frontend Portfolio
          </p>

          {/* SUBTITLE */}
          <div className="text-neutral-300 mt-4 relative z-20 max-w-[600px]">
            A modern frontend portfolio showcasing real-world projects,
            UI systems, and AI-enhanced development workflows.
          </div>

          {/* FEATURES */}
          <ul className="mt-8 space-y-3 relative z-20">
            <Step title="Built with React, Next.js, and modern UI systems" />
            <Step title="AI-assisted development using Cursor & smart tools" />
            <Step title="Reusable components & scalable architecture" />
            <Step title="Responsive, production-ready web applications" />
          </ul>

          {/* DESCRIPTION */}
          <p className="text-neutral-400 mt-8 text-sm max-w-[600px] relative z-20">
            This portfolio represents my journey as a Frontend Developer,
            focusing on building clean, interactive, and scalable user
            experiences. It includes real projects like Quiz App, To-Do List,
            Notes App, Landing Pages, and UI animations.
          </p>
        </div>
      </CardSpotlight>
    </div>
  );
}

const Step = ({ title }) => {
  return (
    <li className="flex gap-3 items-start text-left">
      <CheckIcon />
      <p className="text-neutral-200 text-sm">{title}</p>
    </li>
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
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l5.59-5.59L18 9l-7 7z" />
    </svg>
  );
};
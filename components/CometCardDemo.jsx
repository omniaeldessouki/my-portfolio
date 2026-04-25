// import { CometCard } from "@/components/ui/comet-card";

// export function CometCardDemo() {
//   return (
//     <div className="flex justify-center items-center p-24">
//       <CometCard className="w-full max-w-sm">
//         <button
//           type="button"
//           className="flex w-full flex-col rounded-[16px] border-0 bg-[#1F2121] p-4 saturate-0"
//           aria-label="View invite F7RA"
//           style={{ transformStyle: "preserve-3d" }}
//         >
//           <div className="mx-2 flex-1">
//             <div className="relative aspect-[3/4] w-full">
//               <img
//                 loading="lazy"
//                 className="absolute inset-0 h-full w-full rounded-[16px] object-cover contrast-75"
//                 alt="Invite background"
//                 src="https://images.unsplash.com/photo-1505506874110-6a7a69069a08?q=80&w=1287&auto=format&fit=crop"
//               />
//             </div>
//           </div>

//           <div className="mt-2 flex items-center justify-between p-4 font-mono text-white gap-2">
//             <div className="text-xs">Comet Invitation</div>
//             <div className="text-xs text-gray-300 opacity-50">#F7RA</div>
//           </div>
//         </button>
//       </CometCard>
//     </div>
//   );
// }
import React from "react";
import { CometCard } from "@/components/ui/comet-card";

export function CometCardDemo() {
  return (
    <section className="w-full py-24 px-6 md:px-16 bg-gradient-to-b from-black via-zinc-950 to-black text-white">

      {/* TITLE */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-500 to-pink-500">
          Featured Project
        </h2>

        <p className="mt-4 text-neutral-400 text-sm md:text-base">
          A highlight from my frontend and AI-driven projects, focused on clean UI,
          performance, and real user experience.
        </p>
      </div>

      {/* CARD */}
      <div className="flex justify-center">
        <CometCardItem />
      </div>
    </section>
  );
}

/* 💜 CARD COMPONENT */
function CometCardItem() {
  return (
    <CometCard className="w-full max-w-sm">
      <a
        href="#"
        target="_blank"
        className="flex w-full flex-col rounded-[16px] border-0 bg-gradient-to-b from-black via-zinc-900 to-black p-4 hover:scale-[1.02] transition-transform duration-300"
        style={{ transformStyle: "preserve-3d" }}
      >

        {/* IMAGE */}
        <div className="mx-2 flex-1">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[16px]">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              alt="Real Estate Project"
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="mt-4 flex flex-col px-2 text-white">
          
          {/* TITLE */}
          <div className="text-sm font-semibold text-purple-300">
            Real Estate Platform
          </div>

          {/* DESC */}
          <div className="text-xs text-gray-400 mt-1">
            Next.js • React • UI/UX
          </div>

        </div>

      </a>
    </CometCard>
  );
}
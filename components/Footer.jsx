"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10 ">
      <div className="max-w-6xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-xl font-semibold">
            Omnia EL Dessouki
          </h2>

          <p className="text-gray-400 text-sm mt-2 max-w-sm">
            Frontend Developer • UI Engineer • AI Enthusiast building modern,
            scalable and intelligent web experiences.
          </p>
        </div>

        {/* MIDDLE LINKS */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#skills" className="hover:text-white transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="flex gap-6">
          {/* Email */}
          <a
            href="mailto:omniaeldessouki6@gmail.com"
            className="text-gray-400 hover:text-white hover:scale-110 transition duration-300"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M1.5 4.5h21v15h-21v-15zm1.8 1.5l9.2 6.9 9.2-6.9H3.3zm18.2 12V8.1l-8.7 6.5a1 1 0 0 1-1.2 0L2.5 8.1V18h19z" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/omnia-eldessouki-469680247"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition duration-300"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.036-1.849-3.036-1.851 0-2.134 1.445-2.134 2.939v5.666H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.604 0 4.269 2.372 4.269 5.456v6.284zM5.337 7.433a2.065 2.065 0 1 1 0-4.131 2.065 2.065 0 0 1 0 4.131zM6.913 20.452H3.759V9h3.154v11.452z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/omniaeldessouki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white hover:scale-110 transition duration-300"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.396 7.865 10.918.575.104.785-.25.785-.555 0-.273-.01-1.004-.015-1.971-3.2.695-3.875-1.544-3.875-1.544-.523-1.33-1.277-1.684-1.277-1.684-1.044-.714.08-.7.08-.7 1.154.081 1.76 1.186 1.76 1.186 1.026 1.757 2.693 1.25 3.35.956.104-.744.402-1.25.73-1.537-2.554-.29-5.238-1.277-5.238-5.684 0-1.255.45-2.282 1.186-3.087-.119-.29-.514-1.457.113-3.037 0 0 .967-.31 3.17 1.18a11.02 11.02 0 0 1 2.887-.388c.98.005 1.968.133 2.887.388 2.2-1.49 3.165-1.18 3.165-1.18.63 1.58.235 2.747.116 3.037.74.805 1.184 1.832 1.184 3.087 0 4.42-2.69 5.39-5.252 5.675.414.356.783 1.062.783 2.14 0 1.546-.014 2.792-.014 3.17 0 .308.207.665.79.553C20.21 21.392 23.5 17.083 23.5 12c0-6.352-5.148-11.5-11.5-11.5z" />
            </svg>
          </a>
        </div>
      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Omnia El Dessouki. All rights reserved.
      </div>
    </footer>
  );
}

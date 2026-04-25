"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="mt-4 flex items-center justify-between rounded-full 
        bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3"
        >
          {/* LOGO */}
          <Link href="/">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500" />
              {/* <Image src="/omnia.png" width={20} height={20}  className="rounded-full object-cover"/> */}
              <span className="text-white font-semibold text-sm md:text-base">
                Omnia 
              </span>
            </div>
          </Link>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </nav>

          {/* BUTTON */}
          <Link href="#contact">
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm hover:scale-105 transition">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

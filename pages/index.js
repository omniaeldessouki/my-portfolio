"use client";

import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { TimelineDemo } from "@/components/TimelineDemo";
import { AnimatedTestimonialsDemo } from "@/components/AnimatedTestimonialsDemo";
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import SkillsAndProjectSection from "@/components/SkillsAndProjectSection";
import AboutMeSection from "@/components/AboutMeSection";
import { StickyScrollRevealDemo } from "@/components/StickyScrollRevealDemo";
import { ThreeDMarqueeDemo } from "@/components/ThreeDMarqueeDemo";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Omnia | Frontend Developer</title>
        <meta
          name="description"
          content="A modern frontend portfolio showcasing real-world projects, UI systems, and AI-enhanced development workflows."
        />
        <meta
          name="keywords"
          content="Omnia Eldessouki, Frontend Developer, UI Developer, React, Next.js, Portfolio, UI Design, AI tools"
        />
        <meta name="author" content="Omnia Eldessouki" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://omniaeldessouki.github.io/Portfolio"
        />

        <meta property="og:title" content="Omnia AI Platform" />
        <meta
          property="og:description"
          content="A modern frontend portfolio showcasing real-world projects, UI systems, and AI-enhanced development workflows."
        />
        <meta
          property="og:url"
          content="https://omniaeldessouki.github.io/Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Omnia AI Platform" />
        <meta
          property="og:image"
          content="https://omniaeldessouki.github.io/Portfolio/preview.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Omnia AI Platform" />
        <meta
          name="twitter:description"
          content="A modern frontend portfolio showcasing real-world projects, UI systems, and AI-enhanced development workflows."
        />
        <meta
          name="twitter:image"
          content="https://omniaeldessouki.github.io/Portfolio/preview.png"
        />
      </Head>
     
      <Header />

      {/* CONTENT */}
      <HeroScrollDemo />
      <TimelineDemo />
      <AppleCardsCarouselDemo />
      <AboutMeSection />
      {/* <ThreeDMarqueeDemo /> */}
      <StickyScrollRevealDemo />
      {/* <SkillsAndProjectSection /> */}
      {/* <HeroParallaxDemo /> */}
      <AnimatedTestimonialsDemo />
      <ContactSection />
      <Footer />
    </>
  );
}

"use client"
import Footer from "@/components/Footer";
import Lenis from "@studio-freight/lenis";
import React, { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <div className="h-screen  flex flex-col items-center justify-center">
        <h1 className="text-red-500 text-3xl">Text Along Path</h1>
        <p className="text-red-900 max-w-2xl py-6 text-center">
          How to Move a Text along an SVG Path on Scroll using React and Framer
          Motion a website tutorial on how to animate a a Text along an SVG Path
          on Scroll using React and Framer Motion. Used with the Lenis Scroll
          for added smoothness and Next.js
        </p>
      </div>
      
      <Footer />
      
    </main>
  );
}

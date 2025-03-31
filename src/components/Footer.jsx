import {
  useScroll,
  useTransform,
  motion,
  easeInOut,
  anticipate,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

const Footer = () => {
  const container = useRef(null);
  const text = useRef([]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    const updateOffset = (e) => {
      text.current.forEach((t, i) =>
        t.setAttribute("startOffset", -40 + e * 40 + i * 40 + "%")
      );
    };

    scrollYProgress.on("change", updateOffset);
    return () => scrollYProgress.off("change", updateOffset);
  }, [scrollYProgress]);

  return (
    <div ref={container} className="relative">
      <svg className="w-full pb-40" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text fill="red" className="text-[8px]">
          {[...Array(3)].map((_, i) => (
            <textPath
              ref={(ref) => (text.current[i] = ref)}
              href="#curve"
              key={i}
              startOffset={i * 40 + "%"}
            >
              Text along an SVG with motion
            </textPath>
          ))}
        </text>
      </svg>

      <Section scrollYProgress={scrollYProgress} />
    </div>
  );
};

export default Footer;

const Section = ({ scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 1], [-700, 0]);

  return (
    <div className="h-[250px] bg-black overflow-hidden">
      <motion.div
         style={{ y }} 
        className="h-full bg-black text-zinc-600 flex justify-center gap-10 items-center p-10"
      >
      <p>ADITY ROY &copy; 2025</p>
      </motion.div>
    </div>
  );
};

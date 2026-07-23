import React from "react";
import { motion } from "framer-motion";
import TypingText from "./TypingText";
import ShaderBackground from "./ShaderBackground";
import OrbitCircle from "./OrbitCircle";

const NAV_ORBIT_ITEMS = [
  { label: "Work", href: "#projects", icon: "work" },
  { label: "About", href: "#stats", icon: "person" },
  { label: "Services", href: "#services", icon: "design_services" },
  { label: "Contact", href: "#contact", icon: "mail" },
];

const CONTACT_ORBIT_ITEMS = [
  { label: "Email", href: "mailto:zeeshanqaisar55@gmail.com", icon: "fa-solid fa-envelope", iconType: "fa" },
  { label: "GitHub", href: "https://github.com/mzeshanqaisar", icon: "fa-brands fa-github", iconType: "fa", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mzeshanqaisar/", icon: "fa-brands fa-linkedin", iconType: "fa", external: true },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 min-h-screen mb-32 flex flex-col justify-center items-start text-left px-8 md:px-24 py-24 overflow-hidden">

      {/* Animated shader background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <ShaderBackground />
      </div>

      {/* Glow Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"
      />

      {/* RIGHT SIDE ORBIT CIRCLES */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-6 md:right-16 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-10"
      >
        <OrbitCircle size={260} stepDuration={2.5} items={NAV_ORBIT_ITEMS} />
        <OrbitCircle size={170} stepDuration={2.5} items={CONTACT_ORBIT_ITEMS} />
      </motion.div>

      {/* CONTENT (shifted slightly left naturally) */}
      <motion.div
        className="relative max-w-3xl"
        variants={container}
        initial="hidden"
        animate="show"
      >

        {/* Badge */}
        <motion.div
          variants={item}
          className="mb-6 px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs uppercase tracking-widest text-primary w-fit"
        >
          Available for New Projects
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={item}
          className="font-headline text-5xl md:text-7xl font-thin tracking-tighter text-on-surface leading-tight mb-6"
        >
          <TypingText text="Building modern" speed={70} />
          <br />
          <span className="text-gradient">
            <TypingText text="web & mobile apps" speed={90} />
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed mb-10"
        >
          I’m Zeeshan Qaisar, a frontend and mobile app developer building clean, responsive, and user-friendly experiences using React and React Native. I focus on smooth UI/UX and modern design systems.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3 rounded-full bg-primary text-on-primary text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] transition-shadow"
          >
            View Projects
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3 rounded-full border border-white/10 text-sm uppercase tracking-widest hover:bg-white/5 transition-colors"
          >
            Download CV
          </motion.a>

        </motion.div>

      </motion.div>

    </section>
  );
}

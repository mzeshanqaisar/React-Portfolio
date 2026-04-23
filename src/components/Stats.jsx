import React from "react";
import { motion } from "framer-motion";

export default function Stats() {
const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "12+", label: "Projects Built" },
  { value: <>React & <br /> React Native</>, label: "Core Stack" },
  { value: "UI Focused", label: "Frontend Style" }
];

  return (
    <section className="mb-32 py-10 border-y border-outline-variant/10">

      {/* ABOUT SECTION */}
      <div className="mb-16 max-w-3xl">

        <h2 className="text-3xl md:text-4xl font-thin tracking-tighter text-on-surface mb-6">
          About Me
        </h2>

        <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed">
          I’m a frontend and mobile app developer focused on building clean, modern, and responsive digital experiences using React and React Native.

          I enjoy turning ideas into real-world products with smooth UI/UX, attention to detail, and performance-focused design.

          Currently, I’m improving my skills in advanced frontend architecture and mobile app development.
        </p>

      </div>

      {/* STATS SECTION */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

      {stats.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    className="text-center md:text-left"
  >

    <span className="block font-headline text-4xl font-thin text-secondary mb-1">
      {item.value}
    </span>

    <span className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
      {item.label}
    </span>

  </motion.div>
))}

      </div>

    </section>
  );
}
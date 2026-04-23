import React from "react";
import TypingText from "./TypingText";

export default function Hero() {
  return (
    <section className="relative mb-32 flex flex-col items-start text-left px-6 pt-20 pb-24 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full" />

      {/* RIGHT BACKGROUND IMAGE */}
     <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[550px] md:h-[550px] opacity-20 pointer-events-none">
  <img
    src="/profile.jpg"
    alt="background profile"
    className="w-full h-full object-cover rounded-3xl"
  />
</div>

      {/* CONTENT (shifted slightly left naturally) */}
      <div className="relative max-w-3xl">

        {/* Badge */}
        <div className="mb-6 px-4 py-1 rounded-full border border-outline-variant/20 text-xs uppercase tracking-widest text-on-surface-variant w-fit">
          Frontend & Mobile Developer
        </div>

        {/* Title */}
        <h1 className="font-headline text-5xl md:text-7xl font-thin tracking-tighter text-on-surface leading-tight mb-6">
  <TypingText text="Building modern" speed={70} />
  <br />
  <span className="text-primary">
    <TypingText text="web & mobile apps" speed={90} />
  </span>
</h1>

        {/* Description */}
        <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed mb-10">
          I’m Zeeshan Qaisar, a frontend and mobile app developer building clean, responsive, and user-friendly experiences using React and React Native. I focus on smooth UI/UX and modern design systems.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">

          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-primary text-on-primary text-sm uppercase tracking-widest hover:scale-105 transition-transform"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 rounded-full border border-outline-variant text-sm uppercase tracking-widest hover:bg-on-surface/5 transition"
          >
            Download CV
          </a>

        </div>

      </div>

    </section>
  );
}
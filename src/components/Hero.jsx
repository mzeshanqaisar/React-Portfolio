import React from "react";

export default function Hero() {
  return (
    <section className=" mb-32">

      {/* Title */}
      <h1 className="font-headline text-[10vw] md:text-8xl font-thin tracking-tighter text-on-surface leading-none mb-12">
        Welcome.
      </h1>

      <div className="flex flex-col md:flex-row gap-12 items-start">

        {/* Description */}
        <div className="flex gap-6 items-stretch max-w-2xl">
          <div className="w-px bg-secondary shrink-0" />

          <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed font-body">
            I’m Zeeshan Qaisar, I specialize in{" "}
            <span className="text-primary">React.js</span>, JavaScript, HTML,
            CSS, and clean UI design, focusing on smooth interactions and intuitive UX.
          </p>
        </div>

        {/* CTA */}
        <a
  href="/resume.pdf"
    download
  className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-md bg-primary text-on-primary text-sm uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
>
  {/* Text */}
  <span className="relative z-10">View Resume</span>

  {/* Icon */}
  <span className="material-symbols-outlined relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
    arrow_outward
  </span>

  {/* Hover background effect */}
  <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
</a>

      </div>
    </section>
  );
}
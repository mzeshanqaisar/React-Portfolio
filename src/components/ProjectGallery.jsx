import React from "react";

export default function ProjectGallery() {
  return (
    <section className="mb-32 relative">

      {/* Heading */}
      <div className="flex items-center gap-4 mb-16">
        <h2 className="font-headline text-4xl font-thin text-on-surface lowercase">
          projects
        </h2>
        <div className="h-[1px] flex-grow bg-surface-container-highest" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Featured Project */}
        <div className="md:col-span-8 group relative bg-surface-container-highest p-1 overflow-hidden transition-all">

          {/* Decorative Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 bracket-tl z-20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 bracket-br z-20 opacity-0 group-hover:opacity-100 transition-opacity" />

          {/* Image */}
          <div className="relative overflow-hidden aspect-video">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGWr09Ii-4GeL0FKCLw1dULwqOx5179pT-fSl-xnX-7HUxhtFqqkoKLZJGalaudSvaWnGvzfcOWxWFcmDq1AN83D8r7sx7_iJR-ym2Ep2cIzH7-JGG3c29a9WLnyaUv4-uPXOa9_OMKcIwC8TkZwuo_pZi_4oQkwvBcXKOtr6h5-Kq16bR15JBTpYVuP7AjfBHutoRvG7f5YsJMeyX95s_vlUqkRnixxW8yrNk5yASA_WqqP8meLSpS9hC6Fl1uOgweQqiXG2pAOY"
              alt="Modern dark software code editor interface"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-surface-dim/40 group-hover:bg-transparent transition-colors" />
          </div>

          {/* Content */}
          <div className="p-8">
            <span className="font-label text-xs tracking-widest text-secondary uppercase mb-2 block">
              Featured Case Study
            </span>

            <h3 className="text-3xl font-headline font-light text-primary mb-4">
              Portfolio Website
            </h3>

            <p className="text-on-surface-variant font-light max-w-lg mb-6">
              A minimalist editorial experience focused on typography and motion.
              Built with React and high-performance animation libraries.
            </p>

            <div className="flex gap-4 items-center">
              <span className="material-symbols-outlined text-secondary">
                arrow_outward
              </span>

              <button className="text-primary font-label text-[10px] uppercase tracking-widest border-b border-primary/30 pb-1 hover:border-primary transition-colors">
                View Project
              </button>
            </div>
          </div>
        </div>

        {/* Side Projects */}
        <div className="md:col-span-4 flex flex-col gap-8">

          {/* Project 1 */}
          <div className="group border-l-2 border-secondary/20 hover:border-secondary pl-6 py-4 transition-all duration-300 hover:translate-x-2">
            <span className="font-label text-[10px] tracking-[0.3em] text-outline uppercase">
              2024
            </span>

            <h4 className="text-xl font-headline font-light text-on-surface group-hover:text-primary transition-colors">
              Weather App
            </h4>

            <p className="text-sm text-on-surface-variant font-light mt-2 line-clamp-2">
              Real-time visualization of meteorological data with hyper-local accuracy.
            </p>
          </div>

          {/* Project 2 */}
          <div className="group border-l-2 border-secondary/20 hover:border-secondary pl-6 py-4 transition-all duration-300 hover:translate-x-2">
            <span className="font-label text-[10px] tracking-[0.3em] text-outline uppercase">
              2024
            </span>

            <h4 className="text-xl font-headline font-light text-on-surface group-hover:text-primary transition-colors">
              Todo List App
            </h4>

            <p className="text-sm text-on-surface-variant font-light mt-2 line-clamp-2">
              A productivity tool designed for cognitive focus and task hierarchy.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-auto p-8 bg-surface-container-low border border-outline-variant/10">
            <h5 className="font-headline text-lg font-light mb-4">
              Available for new opportunities.
            </h5>

            <p className="text-xs text-on-surface-variant font-body leading-relaxed">
              Let's discuss how we can build your next digital masterpiece together.
            </p>

            <button className="mt-6 text-primary font-label text-[10px] uppercase tracking-widest border-b border-primary/30 pb-1 hover:border-primary transition-colors">
              Get in touch
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
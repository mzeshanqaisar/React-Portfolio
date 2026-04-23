import React, { useState } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectGallery() {

  const [activeProject, setActiveProject] = useState(projects[0]);

  const sideProjects = projects.filter(p => p.id !== activeProject.id);

  return (
    <section className="mb-32">

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* LEFT (FEATURED) */}
      <div className="md:col-span-8 group relative bg-surface-container-highest p-1 overflow-hidden">

  {/* Brackets */}
  <div className="absolute top-0 left-0 w-8 h-8 bracket-tl z-20" />
  <div className="absolute bottom-0 right-0 w-8 h-8 bracket-br z-20 opacity-0 group-hover:opacity-100 transition-opacity" />

  {/* Image */}
  <div className="relative overflow-hidden aspect-video">
    <img
      src={activeProject.image}
      alt={activeProject.title}
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
    />
    <div className="absolute inset-0 bg-surface-dim/40 group-hover:bg-transparent transition-colors" />
  </div>

  {/* Content */}
  <div className="p-8">

    <span className="font-label text-xs tracking-widest text-secondary uppercase mb-2 block">
      Featured Project
    </span>

    <h3 className="text-3xl font-headline font-light text-primary mb-4">
      {activeProject.title}
    </h3>

    <p className="text-on-surface-variant font-light max-w-lg mb-6">
      {activeProject.description}
    </p>

    {/* 🔥 TECH STACK */}
    <div className="flex flex-wrap gap-3 mb-6">
      {activeProject.tech.map((tech, index) => (
        <span
          key={index}
          className="text-[10px] uppercase tracking-widest px-3 py-1 border border-outline-variant/20 rounded-full text-on-surface-variant"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* CTA */}
    <div className="flex gap-4 items-center">
      <span className="material-symbols-outlined text-secondary">
        arrow_outward
      </span>

      <Link
        to={`/project/${activeProject.id}`}
        className="text-primary font-label text-[10px] uppercase tracking-widest border-b border-primary/30 pb-1 hover:border-primary transition-colors"
      >
        View Project
      </Link>
    </div>

  </div>
</div>

        {/* RIGHT (SCROLLABLE LIST) */}
        <div className="md:col-span-4 flex flex-col">

          {/* Scrollable projects */}
        <div className="relative">

  {/* Scrollable list */}
  <div className="flex flex-col gap-6 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
    {sideProjects.map((project) => (
      <div
        key={project.id}
        onClick={() => setActiveProject(project)}
        className="cursor-pointer border-l-2 border-secondary/20 hover:border-secondary pl-6 py-4 transition-all hover:translate-x-2"
      >
        <span className="text-xs text-outline">{project.year}</span>

        <h4 className="text-lg text-on-surface">
          {project.title}
        </h4>

        <p className="text-sm text-on-surface-variant line-clamp-2">
          {project.description}
        </p>
      </div>
    ))}
  </div>

  {/* TOP FADE */}
  <div className="pointer-events-none absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background to-transparent" />

  {/* BOTTOM FADE */}
  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-background to-transparent" />

</div>
          {/* CTA */}
          <div className="mt-auto p-8 bg-surface-container-low border border-outline-variant/10"> <h5 className="font-headline text-lg font-light mb-4"> Available for new opportunities. </h5> <p className="text-xs text-on-surface-variant font-body leading-relaxed"> Let's discuss how we can build your next digital masterpiece together. </p> <button className="mt-6 text-primary font-label text-[10px] uppercase tracking-widest border-b border-primary/30 pb-1 hover:border-primary transition-colors"> Get in touch </button> </div>
        </div>

      </div>
    </section>
  );
}
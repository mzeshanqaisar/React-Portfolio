import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="p-10">Project not found</div>;
  }

  return (
    <section className="px-6 md:px-20 py-24 max-w-6xl mx-auto">

      {/* HERO */}
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-headline font-thin mb-6">
          {project.title}
        </h1>

        <p className="text-on-surface-variant text-lg max-w-2xl mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs px-3 py-1 border rounded-full">
              {t}
            </span>
          ))}
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-2xl"
        />
      </div>

      {/* OVERVIEW */}
      <div className="mb-16 max-w-3xl">
        <h2 className="text-2xl mb-4">Overview</h2>
        <p className="text-on-surface-variant">{project.overview}</p>
      </div>

      {/* PROBLEM */}
      <div className="mb-16 max-w-3xl">
        <h2 className="text-2xl mb-4">Problem</h2>
        <p className="text-on-surface-variant">{project.problem}</p>
      </div>

      {/* SOLUTION */}
      <div className="mb-16 max-w-3xl">
        <h2 className="text-2xl mb-4">Solution</h2>
        <p className="text-on-surface-variant">{project.solution}</p>
      </div>

      {/* LEARNINGS */}
      <div className="mb-20 max-w-3xl">
        <h2 className="text-2xl mb-4">Key Learnings</h2>
        <ul className="list-disc pl-5">
          {project.learnings.map((l, i) => (
            <li key={i}>{l}</li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="flex gap-6">
        

        <a href={project.github} target="_blank" className="px-6 py-3 border rounded-full">
          View Code
        </a>
      </div>

    </section>
  );
}
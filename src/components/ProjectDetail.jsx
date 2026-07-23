import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../data/projects";

const CATEGORY_RULES = [
  { category: "AI / ML", keywords: ["yolo", "opencv", "tensorflow", "pytorch", "openai", "llm"] },
  { category: "Frontend", keywords: ["react", "vite", "tailwind", "framer motion", "html", "css", "javascript", "typescript", "vue", "next.js", "d3"] },
  { category: "Backend", keywords: ["fastapi", "django", "node", "express", "python", "supabase", "sqlite", "postgres", "mongodb", "rest api", "graphql", "dexie"] },
  { category: "Infrastructure", keywords: ["aws", "vercel", "docker", "github actions", "pwa", "firebase", "git", "redis"] },
];

function categorizeTech(tech) {
  const buckets = { Frontend: [], Backend: [], "AI / ML": [], Infrastructure: [], Other: [] };
  tech.forEach((item) => {
    const lower = item.toLowerCase();
    const rule = CATEGORY_RULES.find((r) => r.keywords.some((kw) => lower.includes(kw)));
    buckets[rule ? rule.category : "Other"].push(item);
  });
  return Object.entries(buckets).filter(([, items]) => items.length > 0);
}

const BASE_NAV_SECTIONS = [
  { id: "overview", label: "Overview", icon: "info" },
  { id: "gallery", label: "Gallery", icon: "photo_library" },
  { id: "learnings", label: "Learnings", icon: "school" },
  { id: "stack", label: "Stack", icon: "terminal" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const hasGallery = Boolean(project?.gallery?.length);
  const NAV_SECTIONS = BASE_NAV_SECTIONS.filter((s) => s.id !== "gallery" || hasGallery);
  const [active, setActive] = useState("overview");
  const [copied, setCopied] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (!project) return;

    const onScroll = () => {
      let current = NAV_SECTIONS[0].id;
      NAV_SECTIONS.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) current = id;
      });
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [project]);

  useEffect(() => {
    if (lightboxIndex === null || !project?.gallery) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % project.gallery.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + project.gallery.length) % project.gallery.length);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, project]);

  if (!project) {
    return <div className="pt-32 pb-20 text-center text-on-surface-variant">Project not found</div>;
  }

  const techGroups = categorizeTech(project.tech);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: project.title, text: project.description, url });
      } catch {
        /* user cancelled share sheet */
      }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      {/* Page-specific header (replaces the global floating nav on this page) */}
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/70 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-6 md:px-12 h-16 max-w-[1440px] mx-auto">
          <div className="flex items-center gap-3 min-w-0">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go back"
              className="material-symbols-outlined text-primary hover:bg-white/5 p-2 rounded-full transition-colors shrink-0"
            >
              arrow_back
            </button>
            <span className="font-headline text-sm font-bold text-on-surface truncate">
              {project.title}
            </span>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            {NAV_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`text-sm tracking-wide transition-colors ${
                  active === s.id ? "text-primary" : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="relative shrink-0">
            <button
              type="button"
              onClick={handleShare}
              aria-label="Share this project"
              className="material-symbols-outlined text-primary hover:bg-white/5 p-2 rounded-full transition-colors"
            >
              share
            </button>
            {copied && (
              <span className="absolute -bottom-9 right-0 text-[11px] bg-surface-container px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">
                Link copied
              </span>
            )}
          </div>
        </div>
      </header>

      <section className="pt-28 pb-32 md:pb-24">
        {/* Hero */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="glass-card rounded-2xl overflow-hidden mb-10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-[21/9] object-cover"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="font-headline text-4xl md:text-6xl font-thin tracking-tighter mb-4 text-gradient">
                {project.title}
              </h1>
              <p className="text-on-surface-variant text-lg max-w-2xl mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 border border-outline-variant/20 rounded-full text-on-surface-variant uppercase tracking-widest"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {project.live && project.live !== "#" && (
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-6 py-3 rounded-xl bg-primary text-on-primary text-sm uppercase tracking-widest hover:shadow-[0_0_20px_rgba(173,198,255,0.4)] transition-shadow"
                >
                  Live Demo
                </motion.a>
              )}
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-3 rounded-xl glass-card text-sm uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                Github
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Overview */}
        <motion.div
          id="overview"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 scroll-mt-28 max-w-3xl"
        >
          <h2 className="text-2xl font-headline mb-4 text-on-surface">Overview</h2>
          <p className="text-on-surface-variant leading-relaxed">{project.overview}</p>
        </motion.div>

        {/* Gallery */}
        {hasGallery && (
          <motion.div
            id="gallery"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20 scroll-mt-28"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-headline text-on-surface">Gallery</h2>
              <span className="text-xs text-on-surface-variant uppercase tracking-widest">
                {project.gallery.length} shots
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {project.gallery.map((src, i) => (
                <motion.button
                  type="button"
                  key={src}
                  onClick={() => setLightboxIndex(i)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="group relative glass-card rounded-xl overflow-hidden text-left cursor-zoom-in"
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-surface-dim/0 group-hover:bg-surface-dim/30 transition-colors flex items-center justify-center">
                    <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity text-2xl">
                      zoom_in
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Problem / Solution / Learnings */}
        <motion.div
          id="learnings"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 scroll-mt-28"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="glass-card glow-hover rounded-2xl p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-2xl">help</span>
              </div>
              <h3 className="text-xl font-headline mb-2 text-on-surface">Problem</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{project.problem}</p>
            </div>

            <div className="glass-card glow-hover rounded-2xl p-8">
              <div className="w-12 h-12 rounded-lg bg-tertiary/10 flex items-center justify-center mb-6 text-tertiary">
                <span className="material-symbols-outlined text-2xl">check_circle</span>
              </div>
              <h3 className="text-xl font-headline mb-2 text-on-surface">Solution</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="glass-card glow-hover rounded-2xl p-8">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 text-secondary">
              <span className="material-symbols-outlined text-2xl">school</span>
            </div>
            <h3 className="text-xl font-headline mb-4 text-on-surface">Key Learnings</h3>
            <ul className="space-y-3">
              {project.learnings.map((l, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">check_circle</span>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Technical Blueprint */}
        <motion.div
          id="stack"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="scroll-mt-28"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl font-headline mb-10 text-on-surface">Technical Blueprint</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {techGroups.map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-xs uppercase tracking-widest text-primary mb-5">{category}</h4>
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-on-surface-variant">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bottom navigation (mobile only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-4 bg-surface-container/80 backdrop-blur-2xl border-t border-white/10 z-50">
        {NAV_SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`flex flex-col items-center justify-center gap-1 transition-colors ${
              active === s.id ? "text-primary" : "text-on-surface-variant opacity-70"
            }`}
          >
            <span className="material-symbols-outlined text-xl">{s.icon}</span>
            <span className="text-[11px]">{s.label}</span>
          </a>
        ))}
      </nav>

      {/* Lightbox */}
      <AnimatePresence>
        {hasGallery && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
              className="material-symbols-outlined absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              close
            </button>

            {project.gallery.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) => (i - 1 + project.gallery.length) % project.gallery.length);
                  }}
                  aria-label="Previous image"
                  className="material-symbols-outlined absolute left-2 md:left-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  chevron_left
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex((i) => (i + 1) % project.gallery.length);
                  }}
                  aria-label="Next image"
                  className="material-symbols-outlined absolute right-2 md:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
                >
                  chevron_right
                </button>
              </>
            )}

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              src={project.gallery[lightboxIndex]}
              alt={`${project.title} screenshot ${lightboxIndex + 1}`}
              className="max-w-full max-h-full rounded-xl object-contain"
            />

            <span className="absolute bottom-4 md:bottom-6 text-xs text-white/60 uppercase tracking-widest">
              {lightboxIndex + 1} / {project.gallery.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

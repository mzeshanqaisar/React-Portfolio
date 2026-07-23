import React from "react";
import { motion } from "framer-motion";

const STACK = [
  { label: "HTML5", icon: "html" },
  { label: "CSS3", icon: "css" },
  { label: "JavaScript", icon: "javascript" },
  { label: "React", icon: "deployed_code" },
  { label: "React Native", icon: "phone_iphone" },
  { label: "Tailwind", icon: "palette" },
  { label: "Framer Motion", icon: "animation" },
  { label: "Git", icon: "merge_type" },
  { label: "REST API", icon: "api" },
  { label: "Figma", icon: "design_services" },
  { label: "Firebase", icon: "local_fire_department" },
  { label: "UI/UX", icon: "auto_awesome" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function TechStack() {
  return (
    <section className="mb-32">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14 space-y-2"
      >
        <h2 className="font-headline text-3xl md:text-4xl font-thin tracking-tighter text-on-surface">
          Technical Mastery
        </h2>
        <p className="text-on-surface-variant font-light">The tools I use to bring vision to life.</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
      >
        {STACK.map((tech) => (
          <motion.div
            key={tech.label}
            variants={item}
            className="glass-card glow-hover rounded-2xl p-6 flex flex-col items-center gap-4 text-center group"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container text-primary group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-3xl">{tech.icon}</span>
            </div>
            <span className="text-xs uppercase tracking-widest text-on-surface-variant">{tech.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

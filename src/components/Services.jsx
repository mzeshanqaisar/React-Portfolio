import React from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    icon: "web",
    color: "text-primary",
    bg: "bg-primary/10",
    title: "Web Development",
    desc: "Modern, responsive, and fast web applications built with React and Tailwind CSS.",
  },
  {
    icon: "phone_iphone",
    color: "text-secondary",
    bg: "bg-secondary/10",
    title: "Mobile Apps",
    desc: "Cross-platform mobile experiences with React Native, from prototype to store release.",
  },
  {
    icon: "auto_awesome",
    color: "text-tertiary",
    bg: "bg-tertiary/10",
    title: "UI/UX Implementation",
    desc: "Turning designs into pixel-perfect, accessible, and smoothly animated interfaces.",
  },
  {
    icon: "settings_suggest",
    color: "text-[#f4c95d]",
    bg: "bg-[#f4c95d]/10",
    title: "Performance & Consulting",
    desc: "Auditing and optimizing frontend performance, architecture, and developer workflows.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
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
          Specialized Services
        </h2>
        <p className="text-on-surface-variant font-light">How I can help your next venture succeed.</p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {SERVICES.map((service) => (
          <motion.div
            key={service.title}
            variants={item}
            className="glass-card glow-hover rounded-2xl p-8 space-y-6"
          >
            <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center ${service.color}`}>
              <span className="material-symbols-outlined text-4xl">{service.icon}</span>
            </div>
            <h3 className="text-xl font-headline font-light text-on-surface">{service.title}</h3>
            <p className="text-sm text-on-surface-variant font-light leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

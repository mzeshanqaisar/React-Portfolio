import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Footer() {
  const socials = [
    { label: "Email", href: "mailto:zeeshanqaisar55@gmail.com", icon: "fa-solid fa-envelope" },
    { label: "GitHub", href: "https://github.com/mzeshanqaisar", icon: "fa-brands fa-github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mzeshanqaisar/", icon: "fa-brands fa-linkedin" },
  ];

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#projects" },
    { label: "About", href: "#stats" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative w-full border-t border-outline-variant/10 bg-surface-container-low overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[280px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-8 md:px-12 py-16 max-w-[1440px] mx-auto"
      >

        {/* Brand */}
        <motion.div variants={item} className="max-w-xs">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary font-headline text-sm tracking-widest">
              ZQ
            </span>
            <span className="font-headline text-lg font-light text-on-surface">Zeeshan Qaisar</span>
          </div>
          <p className="text-sm text-on-surface-variant font-light leading-relaxed">
            Frontend & mobile app developer crafting clean, modern, and user-focused digital experiences with React and React Native.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={item}>
          <h4 className="font-label text-xs uppercase tracking-widest text-secondary mb-5">Navigate</h4>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Connect */}
        <motion.div variants={item}>
          <h4 className="font-label text-xs uppercase tracking-widest text-secondary mb-5">Connect</h4>
          <ul className="flex flex-col gap-3">
            {socials.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-sm text-on-surface-variant hover:text-primary transition-colors w-fit"
                >
                  <i className={`${link.icon} text-xs`}></i>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

      </motion.div>

      {/* Bottom bar */}
      <div className="relative border-t border-outline-variant/10 px-8 md:px-12 py-6 max-w-[1440px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs tracking-widest uppercase text-on-surface-variant/70">
          © {new Date().getFullYear()} Zeeshan Qaisar. All rights reserved.
        </p>

        <motion.button
          type="button"
          onClick={scrollToTop}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
        >
          Back to top
          <i className="fa-solid fa-arrow-up text-[10px]"></i>
        </motion.button>
      </div>
    </footer>
  );
}

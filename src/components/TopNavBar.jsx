import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Work" },
  { id: "stats", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

function TopNavBar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isClicking = useRef(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClicking.current) return; // 🚀 stop override

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    isClicking.current = true;
    setActive(id);
    setMenuOpen(false);

    // allow observer again after scroll finishes
    setTimeout(() => {
      isClicking.current = false;
    }, 600); // match scroll duration
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-[1200px] z-50 rounded-full border border-white/10 bg-surface/70 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "shadow-[0_10px_30px_-10px_rgba(173,198,255,0.2)]" : ""
      }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-8 py-3">

        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleClick("home")}
          className="flex items-center gap-3 group"
        >
          <span className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center text-primary font-headline text-sm tracking-widest group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
            ZQ
          </span>
          <span className="hidden lg:flex flex-col leading-tight font-headline text-sm font-bold tracking-[0.2em] uppercase text-on-surface group-hover:text-primary transition-colors duration-300">
            <span>M.Zeshan</span>
            <span>Qaisar</span>
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex gap-10 items-center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => handleClick(item.id)}
              className={`relative pb-2 font-headline text-sm tracking-wide transition-colors duration-300 ${
                active === item.id ? "text-primary" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex gap-6 md:gap-8 items-center">

          {/* Social Icons */}
          <ul className="hidden lg:flex gap-6 text-lg border-r border-outline-variant/20 pr-6 md:pr-8">
            <li>
              <a href="mailto:zeeshanqaisar55@gmail.com" aria-label="Email" className="group">
                <i className="fa-solid fa-envelope transition-all duration-300 text-on-surface-variant group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-1"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mzeshanqaisar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group"
              >
                <i className="fa-brands fa-github transition-all duration-300 text-on-surface-variant group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-1"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mzeshanqaisar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group"
              >
                <i className="fa-brands fa-linkedin transition-all duration-300 text-on-surface-variant group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-1"></i>
              </a>
            </li>
          </ul>

          {/* CTA */}
          <motion.a
            href="mailto:zeeshanqaisar55@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden lg:inline-flex px-6 py-2 rounded-full border border-primary/40 text-primary text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-colors duration-300"
          >
            Let's Talk
          </motion.a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden text-on-surface-variant hover:text-primary transition-colors"
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} text-2xl`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-surface/95 backdrop-blur-xl rounded-b-3xl"
          >
            <div className="flex flex-col gap-6 px-8 py-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => handleClick(item.id)}
                  className={`font-headline text-lg font-light transition-colors duration-300 ${
                    active === item.id ? "text-primary" : "text-on-surface-variant"
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <div className="flex gap-6 text-xl pt-4 border-t border-white/10">
                <a href="mailto:zeeshanqaisar55@gmail.com" aria-label="Email">
                  <i className="fa-solid fa-envelope text-on-surface-variant hover:text-primary transition-colors"></i>
                </a>
                <a href="https://github.com/mzeshanqaisar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <i className="fa-brands fa-github text-on-surface-variant hover:text-primary transition-colors"></i>
                </a>
                <a href="https://www.linkedin.com/in/mzeshanqaisar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin text-on-surface-variant hover:text-primary transition-colors"></i>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default TopNavBar;

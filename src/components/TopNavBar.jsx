import React, { useEffect, useState, useRef } from "react";

function TopNavBar() {
  const [active, setActive] = useState("home");
  const isClicking = useRef(false);

  useEffect(() => {
    setActive("home");

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

  const handleClick = (id) => {
    isClicking.current = true;
    setActive(id);

    // allow observer again after scroll finishes
    setTimeout(() => {
      isClicking.current = false;
    }, 600); // match scroll duration
  };

  const linkClass = (name) =>
    `font-headline font-thin transition-all duration-300 pb-1 border-b ${
      active === name
        ? "text-primary border-primary"
        : "text-on-surface-variant border-transparent hover:text-primary"
    }`;

  return (
    <header className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl shadow-2xl shadow-black/40">
      <nav className="flex justify-between items-center px-8 py-6">

        {/* Logo */}
        <div className="text-xl font-light tracking-[0.2em] uppercase text-primary">
          MZERAZU
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-10 items-center">

          <a href="#home" className={linkClass("home")} onClick={() => handleClick("home")}>
            home
          </a>

          <a href="#projects" className={linkClass("projects")} onClick={() => handleClick("projects")}>
            work
          </a>

          <a href="#stats" className={linkClass("stats")} onClick={() => handleClick("stats")}>
            about
          </a>

        </div>
        {/* Social Icons */}
       <div className="flex gap-8 items-center">
  <ul className="nav-links flex gap-6 text-lg">

    {/* Email */}
    <li>
      <a href="mailto:zeeshanqaisar55@gmail.com" className="group">
        <i className="fa-solid fa-m transition-all duration-300 text-on-surface-variant group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-1"></i>
      </a>
    </li>

    {/* GitHub */}
    <li>
      <a
        href="https://github.com/mzeshanqaisar"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <i className="fa-brands fa-github transition-all duration-300 text-on-surface-variant group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-1"></i>
      </a>
    </li>

    {/* LinkedIn */}
    <li>
      <a
        href="https://www.linkedin.com/in/mzeshanqaisar/"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <i className="fa-brands fa-linkedin transition-all duration-300 text-on-surface-variant group-hover:text-primary group-hover:scale-110 group-hover:-translate-y-1"></i>
      </a>
    </li>

  </ul>
</div>
      </nav>
    </header>
  );
}

export default TopNavBar;
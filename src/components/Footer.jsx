import React from "react";

export default function Footer() {
  const links = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Medium", href: "#" },
  ];

  return (
    <footer className="w-full border-t border-surface-variant/15 bg-surface-container-low">

      <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 w-full">

        {/* Copyright */}
        <p className="font-body text-xs tracking-widest uppercase text-on-surface-variant mb-6 md:mb-0">
          © 2025 The Curated Obsidian. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-12">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="font-body text-xs tracking-widest uppercase text-on-surface-variant hover:text-primary transition-all opacity-80 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
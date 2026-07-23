import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ target, suffix = "+" }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="block font-headline text-4xl font-thin text-secondary mb-1">
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    { type: "counter", target: 1, label: "Years Experience" },
    { type: "counter", target: 12, label: "Projects Built" },
    { type: "text", value: <>React & <br /> React Native</>, label: "Core Stack" },
    { type: "text", value: "UI Focused", label: "Frontend Style" },
  ];

  return (
    <section className="mb-32 py-10 border-y border-outline-variant/10">

      {/* ABOUT SECTION */}
      <div className="mb-16 max-w-3xl">

        <h2 className="text-3xl md:text-4xl font-thin tracking-tighter text-on-surface mb-6">
          About Me
        </h2>

        <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed">
          I’m a frontend and mobile app developer focused on building clean, modern, and responsive digital experiences using React and React Native.

          I enjoy turning ideas into real-world products with smooth UI/UX, attention to detail, and performance-focused design.

          Currently, I’m improving my skills in advanced frontend architecture and mobile app development.
        </p>

      </div>

      {/* STATS SECTION */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="glass-card glow-hover rounded-2xl p-6 text-center md:text-left"
          >
            {stat.type === "counter" ? (
              <Counter target={stat.target} suffix={stat.suffix} />
            ) : (
              <span className="block font-headline text-2xl font-thin text-secondary mb-1">
                {stat.value}
              </span>
            )}
            <span className="font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
              {stat.label}
            </span>
          </motion.div>
        ))}

      </div>

    </section>
  );
}

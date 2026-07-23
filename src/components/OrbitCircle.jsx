import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OrbitCircle({ size = 240, stepDuration = 2.5, items }) {
  const [step, setStep] = useState(0);
  const radius = size / 2 - 30;
  const angleStep = 360 / items.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % items.length);
    }, stepDuration * 1000);
    return () => clearInterval(interval);
  }, [stepDuration, items.length]);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {items.map((item, i) => {
        const angleDeg = (360 * i) / items.length - 90 + step * angleStep;
        const rad = (angleDeg * Math.PI) / 180;
        const x = radius * Math.cos(rad);
        const y = radius * Math.sin(rad);

        return (
          <motion.a
            key={item.label}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noopener noreferrer" : undefined}
            aria-label={item.label}
            animate={{ x, y }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-1/2 left-1/2 -mt-5 -ml-8 w-16 flex flex-col items-center gap-1 text-center text-primary hover:text-secondary transition-colors"
          >
            {item.iconType === "fa" ? (
              <i className={`${item.icon} text-xl`} />
            ) : (
              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            )}
            <span className="text-[10px] tracking-wide whitespace-nowrap text-on-surface-variant">
              {item.label}
            </span>
          </motion.a>
        );
      })}
    </div>
  );
}

import React from "react";

export default function Stats() {
  const stats = [
    { value: "1+", label: "Years Exp." },
    { value: "12+", label: "Projects" },
    { value: "React", label: "Main Stack" },
    { value: "Fast Learner", label: "Adaptable Developer" }
  ];

  return (
    <section className="mb-32 grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-y border-outline-variant/10">

      {stats.map((item, index) => (
        <div key={index}>
          <span className="block font-headline text-3xl font-thin text-secondary mb-1">
            {item.value}
          </span>

          <span className="font-label text-[10px] uppercase tracking-widest text-outline">
            {item.label}
          </span>
        </div>
      ))}

    </section>
  );
}
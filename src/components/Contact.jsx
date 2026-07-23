import React, { useState } from "react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "zeeshanqaisar55@gmail.com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name || "your website"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="mb-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="glass-card relative rounded-3xl p-8 md:p-12 space-y-10 overflow-hidden max-w-4xl mx-auto"
      >
        {/* Decorative glow */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative text-center space-y-4">
          <h2 className="font-headline text-3xl md:text-4xl font-thin tracking-tighter text-on-surface">
            Let's Build Something
          </h2>
          <p className="text-on-surface-variant font-light max-w-md mx-auto">
            Have a project in mind? Reach out and let's discuss how we can bring it to life.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-on-surface-variant ml-2">
                Full Name
              </label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-surface-container-lowest border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-4 text-on-surface placeholder:text-white/20 transition-all outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[11px] uppercase tracking-widest text-on-surface-variant ml-2">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full bg-surface-container-lowest border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-4 text-on-surface placeholder:text-white/20 transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-widest text-on-surface-variant ml-2">
              Message
            </label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="w-full bg-surface-container-lowest border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-4 text-on-surface placeholder:text-white/20 transition-all outline-none resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-primary text-on-primary font-headline text-lg rounded-xl hover:shadow-[0_10px_30px_-5px_rgba(173,198,255,0.4)] transition-all flex justify-center items-center gap-3"
          >
            Send Message
            <span className="material-symbols-outlined">send</span>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

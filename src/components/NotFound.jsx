import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-40">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-headline text-6xl md:text-8xl font-thin text-primary mb-6"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="text-on-surface-variant text-lg mb-10"
      >
        This page doesn't exist.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link to="/">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block px-8 py-3 rounded-full bg-primary text-on-primary text-sm uppercase tracking-widest"
          >
            Back to Home
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}

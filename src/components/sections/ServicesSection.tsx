"use client";

import { motion } from "framer-motion";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full flex flex-col px-6 py-14 sm:px-12 sm:py-20"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #1a1b1b 0%, #e9573f 100%)",
        zIndex: 10,
      }}
    >
      <motion.h2
        className="text-center text-2xl sm:text-3xl font-bold tracking-[0.15em] mb-10 sm:mb-14"
        style={{
          fontFamily: "var(--font-orbitron)",
          color: "#F7E7CE",
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        Services
      </motion.h2>
    </section>
  );
}

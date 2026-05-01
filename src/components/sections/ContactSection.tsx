"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full flex flex-col justify-between overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e9573f 0%, #F7E7CE 100%)",
        zIndex: 10,
      }}
    >
      {/* Header */}
      <div className="w-full px-6 pt-14 sm:px-12 sm:pt-20">
        <motion.h2
          className="text-center text-2xl sm:text-3xl font-bold tracking-[0.15em] uppercase"
          style={{
            fontFamily: "var(--font-orbitron)",
            color: "#F7E7CE",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          Contact
        </motion.h2>
      </div>

      {/* Massive Bottom Text */}
      <div className="w-full flex justify-center items-end mt-auto px-4 pb-0">
        <motion.h1
          className="font-black text-center uppercase tracking-tight"
          style={{
            fontFamily: "var(--font-geist-sans)",
            color: "#e9573f",
            fontSize: "clamp(6rem, 23vw, 40rem)",
            lineHeight: "0.75", 
            marginBottom: "-1%", // Sit tight on the bottom edge
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          CIVION
        </motion.h1>
      </div>
    </section>
  );
}

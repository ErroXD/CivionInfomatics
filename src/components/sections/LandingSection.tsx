"use client";

import { motion } from "framer-motion";

export function LandingSection() {
  return (
    <section
      id="landing"
      className="relative w-full h-screen flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(180deg, #121313 0%, #1e1514 35%, #7a2d21 75%, #FF6044 100%)" }}
    >
      {/* ── Navbar ── */}
      <nav className="relative z-10 flex items-center justify-between px-8 pt-7 pb-4">
        {/* Logo */}
        <motion.span
          className="text-text-primary text-sm font-bold tracking-[0.18em] uppercase"
          style={{ fontFamily: "var(--font-orbitron)" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Civion Infomatics
        </motion.span>

        {/* Nav links pill */}
        <motion.div
          className="flex items-center gap-0 rounded-full border border-[#F7E7CE]/20 bg-[#121313]/40 backdrop-blur-md px-2 py-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {["About Us", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="px-5 py-2 text-xs font-semibold tracking-widest uppercase text-[#F7E7CE]/80 hover:text-[#F7E7CE] transition-colors rounded-full hover:bg-[#F7E7CE]/5"
              style={{ fontFamily: "var(--font-orbitron)" }}
            >
              {item}
            </a>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.button
          className="rounded-full border-2 border-[#FF6044] px-7 py-2.5 text-xs font-bold tracking-widest uppercase text-[#F7E7CE] hover:bg-[#FF6044]/10 transition-all"
          style={{ fontFamily: "var(--font-orbitron)" }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Lets Work
        </motion.button>
      </nav>

      {/* ── Hero headline (top-left) ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-8 pb-10 pt-10">
        {/* Big headline */}
        <div className="w-full">
          <motion.h1
            className="text-[clamp(2.5rem,5vw,5.5rem)] font-black leading-[1.2] uppercase text-[#F7E7CE] tracking-tight whitespace-nowrap"
            style={{ fontFamily: "var(--font-orbitron)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            We dont make noise.
            <br />
            We make conversations.
          </motion.h1>
        </div>

        {/* Body paragraph — bottom-right */}
        <div className="flex justify-end">
          <motion.p
            className="max-w-[700px] text-[clamp(1.2rem,2vw,1.8rem)] leading-snug text-[#F7E7CE]/90"
            style={{ fontFamily: "var(--font-orbitron)", fontWeight: 400 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            From high-performance{" "}
            <em className="not-italic font-bold">websites</em> to scalable
            mobile apps and AI automation systems —{" "}
            <em className="not-italic font-bold">we</em> help startups and
            businesses turn ideas into powerful digital solutions.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

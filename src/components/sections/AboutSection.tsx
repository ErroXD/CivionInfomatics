"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    heading: "WHO WE ARE",
  },
  {
    heading: "OUR VISION",
  },
  {
    heading: "WHY CHOOSE US",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function AboutSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (expandedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [expandedIndex]);

  return (
    <>
      <motion.section
        id="about-us"
        className="relative w-full px-6 py-14 sm:px-12 sm:py-20"
        style={{
          marginTop: "-60px",
          zIndex: 10,
          background: "#1a1b1b",
          borderRadius: "64px 64px 0 0",
        }}
        initial={{ y: 120, opacity: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Section heading */}
        <motion.h2
          className="text-center text-2xl sm:text-3xl font-bold tracking-[0.15em] uppercase mb-10 sm:mb-14"
          style={{
            fontFamily: "var(--font-orbitron)",
            color: "#F7E7CE",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          About Us
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="flex flex-col gap-7 sm:gap-9 max-w-[1100px] mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card, index) => {
            const isHovered = hoveredIndex === index;
            const isNotHovered = hoveredIndex !== null && hoveredIndex !== index;

            return (
              <motion.div
                key={card.heading}
                layoutId={`card-${index}`}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setExpandedIndex(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  opacity: isNotHovered ? 0.4 : 1,
                  filter: isNotHovered ? "brightness(0.6)" : "brightness(1)",
                }}
                className="group relative overflow-hidden flex flex-col items-center pt-8 sm:pt-12 cursor-pointer"
                style={{
                  background: "#F7E7CE",
                  borderRadius: "48px",
                  minHeight: "220px",
                  boxShadow: isHovered
                    ? "0 10px 40px rgba(247, 231, 206, 0.15)"
                    : "none",
                }}
              >
                <motion.h3
                  layoutId={`heading-${index}`}
                  className="text-lg sm:text-2xl font-bold tracking-[0.12em] uppercase"
                  style={{
                    fontFamily: "var(--font-orbitron)",
                    color: "#1a1b1b",
                  }}
                >
                  {card.heading}
                </motion.h3>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.section>

      {/* Expanded Modal */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12"
            style={{
              background: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(8px)",
            }}
            onClick={() => setExpandedIndex(null)}
          >
            <motion.div
              layoutId={`card-${expandedIndex}`}
              className="relative w-full max-w-[800px] flex flex-col items-center pt-12 sm:pt-16 cursor-default overflow-hidden"
              style={{
                background: "#F7E7CE",
                borderRadius: "48px",
                minHeight: "60vh",
              }}
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside card
            >
              <motion.h3
                layoutId={`heading-${expandedIndex}`}
                className="text-xl sm:text-3xl font-bold tracking-[0.12em] uppercase"
                style={{
                  fontFamily: "var(--font-orbitron)",
                  color: "#1a1b1b",
                }}
              >
                {cards[expandedIndex].heading}
              </motion.h3>

              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setExpandedIndex(null)}
                className="absolute top-6 right-6 sm:top-8 sm:right-8 w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1b1b]/10 hover:bg-[#1a1b1b]/20 transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1a1b1b"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

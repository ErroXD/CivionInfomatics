"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState<"loading" | "splitting" | "done">("loading");

  useEffect(() => {
    // Show loading animation for 2.5 seconds, then start split
    const timer = setTimeout(() => {
      setPhase("splitting");
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (phase === "splitting") {
      // After the split animation completes (~1s), mark done
      const timer = setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div key="splash-screen" className="fixed inset-0 z-[100] pointer-events-none" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
          {/* Left Half */}
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-auto [clip-path:inset(0_50%_0_0)]"
            animate={
              phase === "splitting"
                ? { x: "-100%" }
                : { x: "0%" }
            }
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 bg-[#121313]">
              {/* Gradient blobs */}
              <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#FF6044]/20 blur-[120px]" />
              <div className="absolute bottom-[10%] right-[25%] w-[600px] h-[600px] rounded-full bg-[#FF6044]/15 blur-[150px]" />
              <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] rounded-full bg-[#FF6044]/10 blur-[100px]" />
            </div>
          </motion.div>

          {/* Right Half */}
          <motion.div
            className="absolute inset-0 overflow-hidden pointer-events-auto [clip-path:inset(0_0_0_50%)]"
            animate={
              phase === "splitting"
                ? { x: "100%" }
                : { x: "0%" }
            }
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 bg-[#121313]">
              {/* Gradient blobs */}
              <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#FF6044]/20 blur-[120px]" />
              <div className="absolute bottom-[10%] right-[25%] w-[600px] h-[600px] rounded-full bg-[#FF6044]/15 blur-[150px]" />
              <div className="absolute top-[40%] right-[10%] w-[300px] h-[300px] rounded-full bg-[#FF6044]/10 blur-[100px]" />
            </div>
          </motion.div>

          {/* Centered Logo & Loading — sits on top of both halves */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
            animate={
              phase === "splitting"
                ? { opacity: 0, scale: 0.9 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Logo Text */}
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[0.25em] text-[#F7E7CE] uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              CIVION
            </motion.h1>

            {/* Loading bar */}
            <motion.div
              className="mt-12 w-48 h-[2px] bg-[#F7E7CE]/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-full bg-[#FF6044] rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

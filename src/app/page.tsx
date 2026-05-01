"use client";

import React, { useState, useCallback } from "react";
import { SplashScreen } from "@/components/animations/SplashScreen";
import { LandingSection } from "@/components/sections/LandingSection";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  return (
    <>
      {/* Splash / Loading Screen */}
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}

      <main className="flex flex-col min-h-screen">
        {/* Section 1 — Landing */}
        <LandingSection />

        {/* More sections will be added here */}
      </main>
    </>
  );
}

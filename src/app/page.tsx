"use client";

import React, { useState, useCallback } from "react";
import { SplashScreen } from "@/components/animations/SplashScreen";
import { LandingSection } from "@/components/sections/LandingSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

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

        {/* Section 2 — About Us */}
        <AboutSection />

        {/* Section 3 — Services */}
        <ServicesSection />

        {/* Section 4 — Contact */}
        <ContactSection />
      </main>
    </>
  );
}

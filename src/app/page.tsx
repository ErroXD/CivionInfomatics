"use client";

import React, { useState, useCallback } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SplashScreen } from "@/components/animations/SplashScreen";
import { ArrowRight, Code2, Layers, Sparkles, Zap } from "lucide-react";

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
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,96,68,0.15),rgba(255,255,255,0))]" />

          <div className="container relative z-10 mx-auto px-4 text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-accent-border backdrop-blur-md mb-8 text-sm text-accent font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Welcome to the future of web design</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-[#F7E7CE] via-[#F7E7CE]/80 to-[#F7E7CE]/40 pb-2">
                Civion Infomatics
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                We build next-generation digital experiences that merge cutting-edge technology with stunning aesthetics.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-accent text-background rounded-full font-semibold hover:bg-accent-hover transition-all flex items-center gap-2 group hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,96,68,0.3)]">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-surface text-text-primary border border-border-hover rounded-full font-medium hover:bg-surface-hover transition-colors backdrop-blur-sm">
                  View Portfolio
                </button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 px-4 relative">
          <div className="container mx-auto">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold text-center mb-24 text-text-primary">
                Why Choose <span className="text-accent">Civion</span>?
              </h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <FeatureCard
                icon={<Zap className="w-8 h-8 text-accent" />}
                title="Lightning Fast"
                description="Built on Next.js App Router and optimized for unparalleled, instant page loads."
                delay={0.1}
              />
              <FeatureCard
                icon={<Layers className="w-8 h-8 text-accent" />}
                title="Modern Stack"
                description="Utilizing TypeScript, Tailwind CSS, and Framer Motion for a robust, scalable architecture."
                delay={0.2}
              />
              <FeatureCard
                icon={<Code2 className="w-8 h-8 text-accent" />}
                title="Clean Code"
                description="Meticulously crafted with best practices, ensuring a structured and maintainable file system."
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 px-4 relative bg-surface border-y border-border">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,96,68,0.08),transparent_50%)]" />
          <div className="container relative z-10 mx-auto text-center max-w-4xl">
            <ScrollReveal direction="up">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-text-primary">Ready to transform your vision?</h2>
              <p className="text-xl md:text-2xl text-text-muted mb-12 font-light">
                Join us in creating the next big thing on the web. Let&apos;s make it beautiful, responsive, and completely yours.
              </p>
              <button className="px-10 py-5 bg-accent hover:bg-accent-hover text-background rounded-full font-semibold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,96,68,0.4)]">
                Start Your Project
              </button>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-background text-text-dim">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <p>© 2026 Civion Infomatics. All rights reserved.</p>
            <div className="flex gap-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
              <a href="#" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <ScrollReveal delay={delay} className="p-10 rounded-[2rem] bg-surface/40 border border-border hover:bg-surface-hover hover:border-border-hover transition-all duration-300 backdrop-blur-md group">
      <div className="w-20 h-20 rounded-2xl bg-surface border border-border-hover flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl">
        {icon}
      </div>
      <h3 className="text-3xl font-semibold mb-4 text-text-primary">{title}</h3>
      <p className="text-lg text-text-muted leading-relaxed font-light">{description}</p>
    </ScrollReveal>
  );
}

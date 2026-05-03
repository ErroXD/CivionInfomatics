"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Service = {
  title: string;
  src: string;
  alt: string;
  imgClass: string;
  imgStyle?: React.CSSProperties;
  delay: number;
  cardClass: string;
};

const SERVICES: Service[] = [
  {
    title: "App Development",
    src: "/images/hand-holding-phone.png",
    alt: "Hand holding a smartphone showing a finance app UI",
    cardClass: "md:col-start-1 md:row-start-1",
    imgClass:
      "pointer-events-none absolute -right-3 sm:-right-5 bottom-0 h-[165%] w-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.55)]",
    delay: 0,
  },
  {
    title: "Ai Automation Systems",
    src: "/images/openclaw.png",
    alt: "Friendly red robot mascot representing AI automation",
    cardClass:
      "md:col-start-2 md:row-start-1 md:row-span-2 md:self-center overflow-visible",
    imgClass:
      "pointer-events-none absolute max-w-none w-auto object-contain -right-[10.5rem] sm:-right-[16rem] top-1/2 -translate-y-[52%] h-[210%] sm:h-[230%] drop-shadow-[0_25px_40px_rgba(0,0,0,0.55)]",
    delay: 0.1,
  },
  {
    title: "Web Development",
    src: "/images/code.png",
    alt: "Laptop showing a code editor",
    cardClass: "md:col-start-1 md:row-start-2 overflow-visible",
    imgClass:
      "pointer-events-none absolute max-w-none w-auto object-contain -right-[6rem] sm:-right-[10rem] top-1/2 -translate-y-[55%] h-[140%] sm:h-[155%] drop-shadow-[0_30px_45px_rgba(0,0,0,0.55)]",
    delay: 0.2,
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full flex flex-col px-6 py-14 sm:px-12 sm:py-20 overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #1a1b1b 10%, #e9573f 100%)",
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

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 items-center">
        <div className="grid w-full grid-cols-1 gap-y-20 md:grid-cols-2 md:grid-rows-2 md:gap-x-14 md:gap-y-24">
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              className={`relative h-44 sm:h-52 rounded-[2rem] bg-[#0a0a0a] ${s.cardClass}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: s.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="absolute inset-y-0 left-0 z-10 flex w-1/2 items-center pl-7 sm:pl-10">
                <h3
                  className="text-base sm:text-lg md:text-xl font-bold leading-tight text-[#F7E7CE]"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {s.title}
                </h3>
              </div>

              <Image
                src={s.src}
                alt={s.alt}
                width={600}
                height={600}
                priority={s.delay === 0}
                className={s.imgClass}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeroPortrait: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="hero-portrait group relative mx-auto aspect-square w-[min(100%,280px)] sm:w-[300px] md:w-[400px] lg:w-[440px]">
      <div
        className="hero-portrait-glow hero-portrait-glow--amber absolute inset-[10%] rounded-full bg-amber-400/30 blur-3xl"
        aria-hidden
      />
      <div
        className="hero-portrait-glow hero-portrait-glow--teal absolute inset-[14%] rounded-full bg-teal-300/25 blur-2xl"
        aria-hidden
      />

      <div className="hero-portrait-orbit absolute inset-0 rounded-full" aria-hidden>
        <div className="hero-portrait-orbit__spin" />
      </div>

      <div className="hero-portrait-dots absolute inset-0" aria-hidden>
        <span className="hero-portrait-dot hero-portrait-dot--1" />
        <span className="hero-portrait-dot hero-portrait-dot--2" />
        <span className="hero-portrait-dot hero-portrait-dot--3" />
      </div>

      <div className="hero-portrait-frame absolute inset-[5%] rounded-full p-[3px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-slate-900/50 ring-2 ring-white/40 dark:ring-white/15">
          <Image
            src="/images/hero.png"
            alt="Nguyen Phi Truong - Frontend Developer"
            fill
            priority
            sizes="(max-width: 640px) 280px, (max-width: 1024px) 400px, 440px"
            className="object-cover object-[center_18%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/15"
            aria-hidden
          />
        </div>
      </div>

      <div className="hero-portrait-badge hero-portrait-badge--code absolute -left-1 bottom-[22%] flex h-11 w-11 items-center justify-center rounded-2xl border border-white/30 bg-white/90 text-lg text-amber-500 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-gray-900/85 dark:text-amber-400 sm:-left-3 sm:h-12 sm:w-12">
        <i className="fas fa-code" aria-hidden />
      </div>

      <div className="hero-portrait-badge hero-portrait-badge--years absolute -right-1 top-[16%] rounded-2xl border border-white/30 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-gray-900/85 sm:-right-4 sm:px-4 sm:py-2.5">
        <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400 sm:text-xs">
          {t("Kinh nghiệm", "Experience")}
        </p>
        <p className="text-sm font-bold text-teal-700 dark:text-teal-300 sm:text-base">
          5+ {t("năm", "Years")}
        </p>
      </div>
    </div>
  );
};

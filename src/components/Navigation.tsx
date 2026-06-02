"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useActiveSection } from "@/hooks/useActiveSection";
import { MobileMenu } from "./MobileMenu";
import { portfolioData } from "@/data/portfolioData";

export const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const activeSection = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 w-[min(100%-1.25rem,72rem)] -translate-x-1/2 smooth-transition border ${mobileMenuOpen
        ? "top-2 z-[60] rounded-full border-gray-200 bg-white shadow-lg shadow-black/10 dark:border-gray-700 dark:bg-gray-900 dark:shadow-black/30"
        : scrolled
          ? "top-2 z-50 rounded-full border-gray-200/70 bg-white/92 shadow-lg shadow-black/[0.06] backdrop-blur-md dark:border-gray-700/60 dark:bg-gray-900/92 dark:shadow-black/25"
          : "top-3 z-50 rounded-full border-white/40 bg-white/65 shadow-md  backdrop-blur-sm dark:border-gray-700/40 dark:bg-gray-900/75"
        }`}
    >
      <nav
        className={`container mx-auto flex items-center justify-between gap-3 px-3 smooth-transition md:px-3.5 ${scrolled ? "py-2" : "py-2.5"
          }`}
      >
        <a
          href="#home"
          className="group flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
        >
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full shadow-md shadow-teal-700/30 ring-3 ring-[#0f766e] transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10 dark:ring-[#14b8a6]/25">
            <Image
              src="/images/hero.png"
              alt={t(portfolioData.hero.name.vi, portfolioData.hero.name.en)}
              fill
              sizes="40px"
              className="object-cover object-[center_18%]"
              priority
            />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-semibold leading-tight text-gray-900 dark:text-white md:text-base">
              {t(portfolioData.hero.name.vi, portfolioData.hero.name.en)}
            </span>
            <span className="block truncate text-xs font-medium text-gray-500 dark:text-gray-400">
              {t(portfolioData.hero.title.vi, portfolioData.hero.title.en)}
            </span>
          </span>
        </a>

        <div className="hidden min-w-0 flex-1 items-center justify-center md:flex">
          <ul className="flex max-w-full items-center justify-center gap-0.5 overflow-x-auto rounded-full border border-gray-200/80 bg-gray-100/70 p-1 [-ms-overflow-style:none] [scrollbar-width:none] dark:border-gray-700/80 dark:bg-gray-800/50 [&::-webkit-scrollbar]:hidden lg:flex-wrap">
            {portfolioData.navigation.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`inline-block rounded-full px-2.5 py-1.5 text-xs font-medium capitalize whitespace-nowrap smooth-transition xl:px-3 xl:text-sm ${isActive
                      ? "bg-white text-[#064635] shadow-sm dark:bg-gray-700 dark:text-[#14b8a6]"
                      : "text-gray-600 hover:text-[#0f766e] dark:text-gray-400 dark:hover:text-[#14b8a6]"
                      }`}
                  >
                    {t(link.vi, link.en)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <div className="flex items-center rounded-full border border-gray-200/80 bg-gray-50/90 p-0.5 dark:border-gray-700/80 dark:bg-gray-800/60">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={
                language === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"
              }
              className="flex h-8 min-w-8 cursor-pointer items-center justify-center rounded-full px-2.5 text-xs font-semibold text-gray-700 smooth-transition hover:bg-white hover:text-[#0f766e] dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-[#14b8a6]"
            >
              {language === "vi" ? "EN" : "VI"}
            </button>
            <span className="h-4 w-px bg-gray-200 dark:bg-gray-600" aria-hidden />
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Dark mode" : "Light mode"}
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-sm text-gray-700 smooth-transition hover:bg-white hover:text-[#0f766e] dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-[#14b8a6]"
            >
              <i
                className={`fas ${theme === "light" ? "fa-moon" : "fa-sun"}`}
              />
            </button>
          </div>
          <div className="md:hidden">
            <MobileMenu
              isOpen={mobileMenuOpen}
              onOpenChange={setMobileMenuOpen}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolioData } from "@/data/portfolioData";
import { useActiveSection } from "@/hooks/useActiveSection";

interface MobileMenuProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const { t } = useLanguage();
  const activeSection = useActiveSection();

  const toggleMenu = () => onOpenChange(!isOpen);
  const closeMenu = () => onOpenChange(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="relative z-[61] flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-gray-200/80 bg-gray-50/90 text-gray-700 smooth-transition hover:bg-white dark:border-gray-700/80 dark:bg-gray-800/60 dark:text-gray-200 dark:hover:bg-gray-700 md:hidden"
      >
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`} />
      </button>

      <button
        type="button"
        aria-label="Close menu overlay"
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
        className={`mobile-menu-overlay fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden ${
          isOpen ? "mobile-menu-overlay--open" : "mobile-menu-overlay--closed"
        }`}
      />

      <nav
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`mobile-menu-panel fixed right-0 top-0 z-50 flex w-[min(88%,22rem)] flex-col border-l border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-900 md:hidden ${
          isOpen ? "mobile-menu-panel--open" : "mobile-menu-panel--closed"
        }`}
      >
        <div className="flex shrink-0 items-center justify-between border-b border-gray-200 px-5 py-5 dark:border-gray-700">
          <span className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
            Menu
          </span>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-700 smooth-transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-4">
          {portfolioData.navigation.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
                className={`rounded-xl px-4 py-3.5 text-base font-medium capitalize smooth-transition ${
                  isActive
                    ? "bg-[#0f766e]/10 text-[#0f766e] dark:bg-[#14b8a6]/15 dark:text-[#14b8a6]"
                    : "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                }`}
              >
                {t(link.vi, link.en)}
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
};

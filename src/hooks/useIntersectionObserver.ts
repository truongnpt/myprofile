"use client";

import { useEffect, useRef } from "react";

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    }, observerOptions);

    // Set initial styles
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "all 0.8s ease-out";

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return elementRef as React.RefObject<HTMLDivElement>;
};

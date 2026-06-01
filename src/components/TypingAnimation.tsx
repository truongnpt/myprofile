"use client";

import React, { useEffect, useRef, useState } from "react";

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
}

function getCharDelay(char: string, index: number, total: number, baseSpeed: number) {
  const easeIn = index < 4 ? 1.4 : 1;
  const easeOut = index >= total - 2 ? 1.25 : 1;

  if (char === " ") return baseSpeed * 0.35;
  if (",.!?;:".includes(char)) return baseSpeed * 2.2;

  const jitter = 0.88 + Math.random() * 0.24;
  return baseSpeed * easeIn * easeOut * jitter;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  speed = 52,
  delay = 600,
  className = "",
  cursorClassName = "bg-gradient-to-b from-yellow-400 to-orange-500",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const clearTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };

    indexRef.current = 0;
    setDisplayedText("");

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplayedText(text);
      return clearTimer;
    }

    const typeNext = () => {
      const i = indexRef.current;
      if (i >= text.length) return;

      setDisplayedText(text.slice(0, i + 1));
      indexRef.current = i + 1;

      if (indexRef.current < text.length) {
        timeoutRef.current = setTimeout(
          typeNext,
          getCharDelay(text[i], i, text.length, speed)
        );
      }
    };

    timeoutRef.current = setTimeout(typeNext, delay);

    return clearTimer;
  }, [text, speed, delay]);

  const isComplete = displayedText.length >= text.length;

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span className="inline-block">{displayedText}</span>
      <span
        aria-hidden
        className={`typing-cursor ml-px inline-block h-[0.9em] w-[2px] shrink-0 rounded-full ${cursorClassName} ${
          isComplete ? "typing-cursor--idle" : "typing-cursor--active"
        }`}
      />
    </span>
  );
};

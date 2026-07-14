"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

type Particle = {
  x: number;
  y: number;
  ox: number;
  oy: number;
  vx: number;
  vy: number;
  radius: number;
};

type MouseState = {
  x: number;
  y: number;
  active: boolean;
};

const MAX_DIST = 140;
const MOUSE_RADIUS = 180;
const ATTRACT = 0.045;
const RETURN = 0.025;
const FRICTION = 0.86;

function particleCount(width: number, height: number) {
  const area = width * height;
  if (area < 500_000) return 45;
  if (area < 1_200_000) return 70;
  return 95;
}

export function NeuralNetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    const mouse: MouseState = { x: 0, y: 0, active: false };
    let disposed = false;

    const isDark = () =>
      document.documentElement.classList.contains("dark") || theme === "dark";

    const colors = () =>
      isDark()
        ? {
            node: "rgba(20, 184, 166, 0.9)",
            nodeCore: "rgba(45, 212, 191, 0.95)",
            line: "20, 184, 166",
            mouseGlow: "rgba(20, 184, 166, 0.12)",
          }
        : {
            node: "rgba(15, 118, 110, 0.75)",
            nodeCore: "rgba(13, 148, 136, 0.9)",
            line: "15, 118, 110",
            mouseGlow: "rgba(15, 118, 110, 0.1)",
          };

    const initParticles = () => {
      const count = particleCount(width, height);
      particles = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          ox: x,
          oy: y,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: 1.4 + Math.random() * 1.6,
        };
      });
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    const draw = () => {
      if (disposed) return;
      ctx.clearRect(0, 0, width, height);
      const c = colors();

      for (const p of particles) {
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);
            if (dist < MOUSE_RADIUS && dist > 0.1) {
              const force = (1 - dist / MOUSE_RADIUS) * ATTRACT;
              p.vx += dx * force;
              p.vy += dy * force;
            }
          }

          p.vx += (p.ox - p.x) * RETURN;
          p.vy += (p.oy - p.y) * RETURN;
          p.vx *= FRICTION;
          p.vy *= FRICTION;

          // Soft wander so the mesh stays alive
          p.ox += (Math.random() - 0.5) * 0.12;
          p.oy += (Math.random() - 0.5) * 0.12;
          p.ox = Math.max(0, Math.min(width, p.ox));
          p.oy = Math.max(0, Math.min(height, p.oy));
        }

        // Clamp visual positions gently
        if (p.x < -40) p.x = -40;
        if (p.x > width + 40) p.x = width + 40;
        if (p.y < -40) p.y = -40;
        if (p.y > height + 40) p.y = height + 40;
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > MAX_DIST) continue;

          let alpha = 1 - dist / MAX_DIST;

          if (mouse.active) {
            const midX = (a.x + b.x) / 2;
            const midY = (a.y + b.y) / 2;
            const toMouse = Math.hypot(mouse.x - midX, mouse.y - midY);
            if (toMouse < MOUSE_RADIUS) {
              alpha = Math.min(1, alpha + (1 - toMouse / MOUSE_RADIUS) * 0.45);
            }
          }

          ctx.beginPath();
          ctx.strokeStyle = `rgba(${c.line}, ${alpha * 0.45})`;
          ctx.lineWidth = 1;
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Cursor halo + links to nearby nodes
      if (mouse.active) {
        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          MOUSE_RADIUS
        );
        gradient.addColorStop(0, c.mouseGlow);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, MOUSE_RADIUS, 0, Math.PI * 2);
        ctx.fill();

        for (const p of particles) {
          const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);
          if (dist > MOUSE_RADIUS) continue;
          const alpha = 1 - dist / MOUSE_RADIUS;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${c.line}, ${alpha * 0.55})`;
          ctx.lineWidth = 1.25;
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.fillStyle = c.nodeCore;
        ctx.arc(mouse.x, mouse.y, 3.2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Nodes
      for (const p of particles) {
        let nearMouse = 0;
        if (mouse.active) {
          const dist = Math.hypot(mouse.x - p.x, mouse.y - p.y);
          if (dist < MOUSE_RADIUS) {
            nearMouse = 1 - dist / MOUSE_RADIUS;
          }
        }

        const r = p.radius + nearMouse * 1.8;
        ctx.beginPath();
        ctx.fillStyle = nearMouse > 0.2 ? c.nodeCore : c.node;
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const parent = canvas.parentElement;
    const ro = new ResizeObserver(resize);
    if (parent) ro.observe(parent);

    parent?.addEventListener("pointermove", onPointerMove);
    parent?.addEventListener("pointerleave", onPointerLeave);
    parent?.addEventListener("pointerdown", onPointerMove);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      parent?.removeEventListener("pointermove", onPointerMove);
      parent?.removeEventListener("pointerleave", onPointerLeave);
      parent?.removeEventListener("pointerdown", onPointerMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="hero-neural-canvas"
      aria-hidden
    />
  );
}

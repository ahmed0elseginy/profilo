"use client";

import { useEffect, useRef, useState } from "react";
import { useViewportSize } from "@/hooks/use-mobile";

const r180 = Math.PI;
const r90 = Math.PI / 2;
const r15 = Math.PI / 12;
const color = "#88888825";

const MIN_BRANCH = 30;

type Fn = () => void;

interface StepCounter {
  value: number;
}

function initCanvas(
  canvas: HTMLCanvasElement,
  width = 400,
  height = 400,
  _dpi?: number
) {
  const ctx = canvas.getContext("2d")!;

  const dpr = window.devicePixelRatio || 1;
  // Vendor prefixes for backing store pixel ratio
  const ctxAny = ctx as any;
  const bsr =
    ctxAny.webkitBackingStorePixelRatio ||
    ctxAny.mozBackingStorePixelRatio ||
    ctxAny.msBackingStorePixelRatio ||
    ctxAny.oBackingStorePixelRatio ||
    ctxAny.backingStorePixelRatio ||
    1;

  const dpi = _dpi || dpr / bsr;

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  canvas.width = dpi * width;
  canvas.height = dpi * height;
  ctx.scale(dpi, dpi);

  return { ctx, dpi };
}

function polar2cart(x = 0, y = 0, r = 0, theta = 0) {
  const dx = r * Math.cos(theta);
  const dy = r * Math.sin(theta);
  return [x + dx, y + dy];
}

export function CanvasArt() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { width: sizeWidth, height: sizeHeight } = useViewportSize();
  const width = sizeWidth || 400;
  const height = sizeHeight || 400;

  const [len] = useState(6);
  const [stopped, setStopped] = useState(false);
  const startRef = useRef<Fn>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { ctx } = initCanvas(canvas, width, height);
    const { width: canvasWidth, height: canvasHeight } = canvas;

    let steps: Fn[] = [];
    let prevSteps: Fn[] = [];

    const step = (
      x: number,
      y: number,
      rad: number,
      counter: StepCounter = { value: 0 }
    ) => {
      const length = Math.random() * len;
      counter.value += 1;

      const [nx, ny] = polar2cart(x, y, length, rad);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(nx, ny);
      ctx.stroke();

      const rad1 = rad + Math.random() * r15;
      const rad2 = rad - Math.random() * r15;

      // out of bounds
      if (
        nx < -100 ||
        nx > width + 100 ||
        ny < -100 ||
        ny > height + 100
      )
        return;

      const rate = counter.value <= MIN_BRANCH ? 0.8 : 0.5;

      // left branch
      if (Math.random() < rate) steps.push(() => step(nx, ny, rad1, counter));

      // right branch
      if (Math.random() < rate) steps.push(() => step(nx, ny, rad2, counter));
    };

    let lastTime = performance.now();
    const interval = 1000 / 40; // 40fps

    let rafId: number | null = null;
    let isActive = false;

    const pause = () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      isActive = false;
    };

    const resume = () => {
      if (isActive) return;
      isActive = true;

      const loop = () => {
        if (!isActive) return;

        if (performance.now() - lastTime >= interval) {
          prevSteps = steps;
          steps = [];
          lastTime = performance.now();

          if (!prevSteps.length) {
            pause();
            setStopped(true);
          } else {
            // Execute all the steps from the previous frame
            prevSteps.forEach((i) => {
              // 50% chance to keep the step for the next frame, to create a more organic look
              if (Math.random() < 0.5) steps.push(i);
              else i();
            });
          }
        }

        if (isActive) {
          rafId = requestAnimationFrame(loop);
        }
      };

      rafId = requestAnimationFrame(loop);
    };

    /**
     * 0.2 - 0.8
     */
    const randomMiddle = () => Math.random() * 0.6 + 0.2;

    startRef.current = () => {
      pause();
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.lineWidth = 1;
      ctx.strokeStyle = color;
      prevSteps = [];
      steps = [
        () => step(randomMiddle() * width, -5, r90),
        () => step(randomMiddle() * width, height + 5, -r90),
        () => step(-5, randomMiddle() * height, 0),
        () => step(width + 5, randomMiddle() * height, r180),
      ];
      if (width < 500) steps = steps.slice(0, 2);
      resume();
      setStopped(false);
    };

    startRef.current();

    return () => {
      pause();
    };
  }, [width, height, len]);

  const mask = "radial-gradient(circle, transparent, black)";

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 pointer-events-none print:hidden"
      style={{ zIndex: -1 }}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="w-full h-full"
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      />
    </div>
  );
}


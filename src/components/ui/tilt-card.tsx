"use client";

import {
  useRef,
  useState,
  useCallback,
  useEffect,
  startTransition,
  type ReactNode,
} from "react";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export function TiltCard({ children, className = "" }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    let running = true;

    function animate() {
      setTilt((prev) => ({
        x: lerp(prev.x, target.x, 0.15),
        y: lerp(prev.y, target.y, 0.15),
      }));
      if (running) {
        animationRef.current = requestAnimationFrame(animate);
      }
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      cancelAnimationFrame(animationRef.current);
    };
  }, [target.x, target.y]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const px = clamp(((e.clientX - rect.left) / rect.width) * 2 - 1, -1, 1);
      const py = clamp(((e.clientY - rect.top) / rect.height) * 2 - 1, -1, 1);
      startTransition(() => setTarget({ x: py * 12, y: px * 14 }));
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    startTransition(() => setTarget({ x: 0, y: 0 }));
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}

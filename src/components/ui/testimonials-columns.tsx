"use client";

import React from "react";
import { motion } from "motion/react";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  initial: string;
  initialBg: string;
}

export function TestimonialsColumn({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, name, role, initial, initialBg }, i) => (
              <div
                className="rounded-2xl border border-warm-200 bg-white p-8 shadow-sm max-w-xs w-full"
                key={i}
              >
                {/* Stars */}
                <div
                  className="mb-4 flex gap-0.5 text-accent"
                  aria-label="5 out of 5 stars"
                >
                  {[...Array(5)].map((_, s) => (
                    <svg
                      key={s}
                      className="h-4 w-4 fill-current"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-warm-700">
                  &ldquo;{text}&rdquo;
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: initialBg }}
                  >
                    {initial}
                  </div>
                  <div>
                    <p className="text-sm font-semibold tracking-tight text-warm-900">
                      {name}
                    </p>
                    <p className="text-xs tracking-tight text-warm-500">
                      {role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}

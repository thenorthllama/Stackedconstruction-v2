"use client";

import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns";

const testimonials = [
  {
    text: "Awesome professional! If you are looking for someone to remodel your house, do yourself a favor and hire Junior and his team! You will not be disappointed!",
    name: "Yasmin Frota",
    role: "Google Review",
    initial: "Y",
    initialBg: "#7c3aed",
  },
  {
    text: "Manuel is a true professional and someone you can trust with your project. He is reliable, communicates clearly, and takes real pride in the quality of his work. His attention to detail stands out — he does not rush the process or cut corners. He makes sure things are done the right way and that the final result looks clean and well finished.",
    name: "Leonardo Mendes",
    role: "Google Review",
    initial: "L",
    initialBg: "#6366f1",
  },
  {
    text: "Highly recommend.",
    name: "Adriano Carvalho",
    role: "Google Review",
    initial: "A",
    initialBg: "#059669",
  },
  {
    text: "Great work, really enjoyed working with Junior, very communicative.",
    name: "Eliabe Damas",
    role: "Google Review",
    initial: "E",
    initialBg: "#0891b2",
  },
  {
    text: "Excellent professional! Works very well and is highly responsible. Great communicator, understood exactly what I needed and delivered the job perfectly.",
    name: "Carlos Pereira",
    role: "Google Review",
    initial: "C",
    initialBg: "#d97706",
  },
  {
    text: "I really enjoyed working with Junior on redoing my bathroom. From the beginning, communication was clear and consistent, and he was always easy to reach when I had questions. He paid close attention to the details and made sure everything was done right. I'm very happy with how it turned out and would definitely work with him again.",
    name: "Osvaldo Neto Cancian",
    role: "Google Review",
    initial: "O",
    initialBg: "#4f46e5",
  },
  {
    text: "Wonderful! I was very happy with the result of the work, it exceeded my expectations. I highly recommend it!",
    name: "Luiz Carlos Amt",
    role: "Google Review",
    initial: "L",
    initialBg: "#e67e22",
  },
  {
    text: "Stacked Construction completely transformed our outdated kitchen into a modern masterpiece. The team was professional, on time, and the final result exceeded every expectation.",
    name: "Sarah M.",
    role: "Fort Myers, FL",
    initial: "S",
    initialBg: "#c8956c",
  },
  {
    text: "Our outdoor kitchen and pool deck renovation was flawless. They understood the SWFL lifestyle and built something our whole family enjoys every single day.",
    name: "Michael T.",
    role: "Naples, FL",
    initial: "M",
    initialBg: "#7a6f65",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-warm-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mb-16 grid gap-6 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
              Testimonials
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.1] text-warm-900 sm:text-5xl lg:text-6xl">
              What Our Clients{" "}
              <em className="font-light italic">Say</em>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-warm-600 lg:text-right">
            Real reviews from real homeowners across Southwest Florida.
            Every project, every detail, every time.
          </p>
        </motion.div>

        {/* Scrolling columns */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={15}
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}

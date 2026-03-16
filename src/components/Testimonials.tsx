const testimonials = [
  {
    quote:
      "Stacked Construction completely transformed our outdated kitchen into a modern masterpiece. The team was professional, on time, and the final result exceeded every expectation.",
    name: "Sarah M.",
    location: "Fort Myers, FL",
  },
  {
    quote:
      "From the first consultation to the final walk-through, communication was outstanding. No surprises, no hidden costs — just honest work and beautiful results.",
    name: "David & Lisa R.",
    location: "Cape Coral, FL",
  },
  {
    quote:
      "Our outdoor kitchen and pool deck renovation was flawless. They understood the SWFL lifestyle and built something our whole family enjoys every single day.",
    name: "Michael T.",
    location: "Naples, FL",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
            Testimonials
          </p>
          <h2 className="font-display text-4xl font-bold leading-[1.1] text-warm-900 sm:text-5xl lg:text-6xl">
            What Our Clients{" "}
            <em className="font-light italic">Say</em>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col border-t border-warm-200 pt-8"
            >
              <div className="mb-5 flex gap-1 text-accent" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-8 flex-1 text-base leading-relaxed text-warm-700">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <p className="font-display text-base font-semibold text-warm-900">
                  {t.name}
                </p>
                <p className="text-sm text-warm-500">{t.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

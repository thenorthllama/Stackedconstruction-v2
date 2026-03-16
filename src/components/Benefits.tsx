const benefits = [
  {
    title: "Honest, Transparent Pricing",
    description:
      "No hidden fees or surprise change orders. You get a detailed, line-item estimate before we break ground — and we stick to it.",
  },
  {
    title: "Quality Craftsmanship",
    description:
      "Every cut, every tile, every finish is done right the first time. Work that lasts decades, not just until the final walk-through.",
  },
  {
    title: "Clear Communication",
    description:
      "You always know what's happening, when it's happening, and why. From the first consultation to the final reveal.",
  },
  {
    title: "On-Time, On-Budget",
    description:
      "Our project management process ensures deadlines and budgets are met — every time. We respect your time and your investment.",
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          {/* Left: heading + image placeholder */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.1] text-warm-900 sm:text-5xl">
              Built on Trust,
              <br />
              <em className="font-light italic">Delivered with Pride</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-warm-600">
              We&apos;re not the biggest contractor in Southwest Florida — and
              that&apos;s by design. We stay hands-on so every project gets the
              attention it deserves.
            </p>
            {/* Image placeholder */}
            <div
              className="mt-10 aspect-[4/3] w-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/about.jpg')" }}
              role="img"
              aria-label="Stacked Construction team at work"
            />
          </div>

          {/* Right: benefits list */}
          <div className="space-y-0 divide-y divide-warm-200 lg:col-span-6 lg:col-start-7">
            {benefits.map((benefit, i) => (
              <div key={benefit.title} className="py-8 first:pt-0 last:pb-0">
                <div className="flex items-start gap-5">
                  <span className="font-display text-5xl font-bold leading-none text-warm-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-semibold text-warm-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-warm-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

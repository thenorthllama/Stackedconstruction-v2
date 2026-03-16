const steps = [
  {
    step: "01",
    title: "Free Consultation",
    description:
      "We visit your home, listen to your vision, assess the space, and discuss your goals and budget — no pressure, no commitment.",
  },
  {
    step: "02",
    title: "Detailed Proposal",
    description:
      "You receive a clear, line-item estimate with material options, a realistic timeline, and a transparent scope of work.",
  },
  {
    step: "03",
    title: "Expert Build",
    description:
      "Our skilled crew brings your project to life with quality materials, clean job sites, and consistent progress updates.",
  },
  {
    step: "04",
    title: "Final Walk-Through",
    description:
      "We walk every detail together. If anything isn't perfect, we make it right before the project is complete.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-warm-900 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
              How It Works
            </p>
            <h2 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              From Vision{" "}
              <em className="font-light italic text-warm-300">to Reality</em>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-warm-500 lg:text-right">
            A simple, transparent process that keeps you informed and in control
            from start to finish.
          </p>
        </div>

        <div className="grid gap-px bg-warm-800 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="bg-warm-900 p-8 lg:p-10">
              <span className="mb-6 block font-display text-6xl font-bold text-warm-800">
                {s.step}
              </span>
              <h3 className="mb-3 font-display text-lg font-semibold text-white">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-warm-500">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

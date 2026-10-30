const stats = [
  { value: "40+", label: "Projects completed" },
  { value: "10+", label: "Years of experience" },
  { value: "4", label: "Cities served" },
  { value: "5/5", label: "Google rating" },
];

export default function TrustBar() {
  return (
    <section className="bg-warm-50 py-14" aria-label="Company statistics">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4 lg:px-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-5xl font-bold text-warm-900">
              {stat.value}
            </p>
            <p className="mt-2 text-base font-medium text-warm-700">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

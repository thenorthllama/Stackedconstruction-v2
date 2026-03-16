const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "3", label: "Counties Served" },
  { value: "5/5", label: "Customer Rating" },
];

export default function TrustBar() {
  return (
    <section className="bg-warm-50 py-14" aria-label="Company statistics">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4 lg:px-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-4xl font-bold text-warm-900 lg:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-widest text-warm-500">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

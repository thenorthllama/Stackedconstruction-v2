const testimonials = [
  {
    text: "Awesome professional! If you are looking for someone to remodel your house, do yourself a favor and hire Junior and his team! You will not be disappointed!",
    name: "Yasmin Frota",
    role: "Google Review",
    initial: "Y",
  },
  {
    text: "Manuel is a true professional and someone you can trust with your project. He is reliable, communicates clearly, and takes real pride in the quality of his work. His attention to detail stands out — he does not rush the process or cut corners. He makes sure things are done the right way and that the final result looks clean and well finished.",
    name: "Leonardo Mendes",
    role: "Google Review",
    initial: "L",
  },
  {
    text: "Highly recommend.",
    name: "Adriano Carvalho",
    role: "Google Review",
    initial: "A",
  },
  {
    text: "Great work, really enjoyed working with Junior, very communicative.",
    name: "Eliabe Damas",
    role: "Google Review",
    initial: "E",
  },
  {
    text: "Excellent professional! Works very well and is highly responsible. Great communicator, understood exactly what I needed and delivered the job perfectly.",
    name: "Carlos Pereira",
    role: "Google Review",
    initial: "C",
  },
  {
    text: "I really enjoyed working with Junior on redoing my bathroom. From the beginning, communication was clear and consistent, and he was always easy to reach when I had questions. He paid close attention to the details and made sure everything was done right. I'm very happy with how it turned out and would definitely work with him again.",
    name: "Osvaldo Neto Cancian",
    role: "Google Review",
    initial: "O",
  },
  {
    text: "Wonderful! I was very happy with the result of the work, it exceeded my expectations. I highly recommend it!",
    name: "Luiz Carlos Amt",
    role: "Google Review",
    initial: "L",
  },
  {
    text: "Stacked Construction completely transformed our outdated kitchen into a modern masterpiece. The team was professional, on time, and the final result exceeded every expectation.",
    name: "Sarah M.",
    role: "Fort Myers, FL",
    initial: "S",
  },
  {
    text: "Our outdoor kitchen and pool deck renovation was flawless. They understood the SWFL lifestyle and built something our whole family enjoys every single day.",
    name: "Michael T.",
    role: "Naples, FL",
    initial: "M",
  },
];

// Static on purpose: the old auto-scrolling columns kept the text moving with no
// pause control (WCAG 2.2.2) and were hard to read.
export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-warm-50 py-24 lg:py-32" aria-labelledby="reviews-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-14 grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2
            id="reviews-heading"
            className="font-display text-[1.75rem] font-bold leading-[1.05] text-warm-900 sm:text-5xl lg:col-span-7"
          >
            What our clients say
          </h2>
          <p className="max-w-md text-lg leading-relaxed text-warm-700 lg:col-span-5">
            Reviews from homeowners across Southwest Florida, rated five out of
            five on Google.
          </p>
        </div>

        <ul className="gap-5 sm:columns-2 lg:columns-3">
          {testimonials.map(({ text, name, role, initial }) => (
            <li key={name} className="mb-5 break-inside-avoid rounded-3xl bg-white p-7">
              <div className="mb-4 flex gap-0.5 text-warm-900" role="img" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} className="h-4 w-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-warm-800">
                &ldquo;{text}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-warm-900 text-sm font-semibold text-white"
                  aria-hidden="true"
                >
                  {initial}
                </span>
                <div>
                  <p className="text-sm font-semibold text-warm-900">{name}</p>
                  <p className="text-sm text-warm-600">{role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

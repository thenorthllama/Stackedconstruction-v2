import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-warm-50">
        <section className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 py-32 text-center lg:px-10">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-warm-500">
            Page Not Found
          </p>
          <h1 className="font-display text-6xl font-bold text-warm-900 sm:text-7xl lg:text-8xl">
            404
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-warm-600">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-warm-900 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-warm-800"
            >
              Go Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-warm-900 px-8 py-4 text-sm font-semibold text-warm-900 transition-all hover:bg-warm-900 hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

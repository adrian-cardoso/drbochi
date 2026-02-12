import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cream via-white to-cream">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
            Naturopathic Medicine
          </p>
          <h1 className="font-heading text-4xl font-bold leading-tight text-text md:text-6xl">
            Whole-Person Care,{" "}
            <span className="text-primary">Rooted in Nature</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text/70 md:text-xl">
            Dr. Alena Bochi, ND combines evidence-based natural therapies with
            modern diagnostics to uncover the root cause of illness and restore
            lasting health.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/mission"
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary/5" />
      <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-accent/10" />
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden md:min-h-[80vh]">
      {/* Background image with Ken Burns animation */}
      <div
        className="absolute inset-0 animate-ken-burns bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=1920&q=80')",
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[70vh] items-center md:min-h-[80vh]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-white/80">
              Naturopathic Medicine
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
              Whole-Person Care,{" "}
              <span className="text-accent">Rooted in Nature</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 md:text-xl">
              Dr. Alena Bochi, ND combines evidence-based natural therapies with
              modern diagnostics to uncover the root cause of illness and restore
              lasting health.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/mission"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-8 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Our Mission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

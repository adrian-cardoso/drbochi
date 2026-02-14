import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
          Ready to Start Your Healing Journey?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
          Take the first step toward whole-person wellness with a personalized
          consultation.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-primary shadow-lg transition-all hover:bg-cream hover:shadow-xl"
        >
          Book a Consultation
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

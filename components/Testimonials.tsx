import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Dr. Bochi truly listens. After years of being told my labs were 'normal,' she found the root cause of my fatigue and helped me feel like myself again.",
    initials: "M.R.",
    detail: "Patient for 2 years",
  },
  {
    quote:
      "I was skeptical about naturopathic medicine, but the personalized approach changed everything. My digestion and energy levels have never been better.",
    initials: "J.L.",
    detail: "Patient for 1 year",
  },
  {
    quote:
      "She takes the time to explain everything and makes you feel truly cared for. I finally have a doctor who treats me as a whole person, not just symptoms.",
    initials: "A.S.",
    detail: "Patient for 3 years",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
            Patient Stories
          </p>
          <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.initials}
              className="group rounded-2xl border border-cream-dark bg-cream/50 p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <Quote className="mb-4 h-8 w-8 text-accent/40" />
              <p className="mb-6 text-sm leading-relaxed text-text/70">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.initials}
                </div>
                <span className="text-xs font-medium text-text/50">
                  {t.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

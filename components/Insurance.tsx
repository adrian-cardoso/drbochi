import { Shield, CreditCard, Video } from "lucide-react";

export default function Insurance() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
            Practical Information
          </p>
          <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">
            Insurance & Payment
          </h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-cream-dark bg-cream/50 p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg">
            <Shield className="mx-auto mb-4 h-8 w-8 text-primary" />
            <h3 className="mb-3 font-heading text-lg font-semibold text-text">
              Insurance Accepted
            </h3>
            <p className="text-sm leading-relaxed text-text/70">
              We accept select insurance plans. Contact our office to verify
              your specific coverage before your first visit.
            </p>
          </div>

          <div className="rounded-2xl border border-cream-dark bg-cream/50 p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg">
            <CreditCard className="mx-auto mb-4 h-8 w-8 text-secondary" />
            <h3 className="mb-3 font-heading text-lg font-semibold text-text">
              Flexible Payment
            </h3>
            <p className="text-sm leading-relaxed text-text/70">
              We offer flexible payment options including HSA/FSA cards, credit
              cards, and payment plans to make care accessible.
            </p>
          </div>

          <div className="rounded-2xl border border-cream-dark bg-cream/50 p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg">
            <Video className="mx-auto mb-4 h-8 w-8 text-accent" />
            <h3 className="mb-3 font-heading text-lg font-semibold text-text">
              Telehealth Available
            </h3>
            <p className="text-sm leading-relaxed text-text/70">
              Can&apos;t make it in person? Virtual consultations are available
              for both new and existing patients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CheckCircle } from "lucide-react";

const conditions = [
  "Hormonal Imbalances",
  "Digestive Issues",
  "Autoimmune Conditions",
  "Chronic Fatigue",
  "Sleep Disorders",
  "Skin Conditions",
  "Anxiety & Stress",
  "Brain Fog",
];

export default function Conditions() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
            How We Can Help
          </p>
          <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">
            Conditions We Treat
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text/70">
            We address the root causes of a wide range of conditions using
            natural, evidence-based approaches.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((condition) => (
            <div
              key={condition}
              className="flex items-center gap-3 rounded-xl border border-cream-dark bg-white p-4 transition-colors hover:border-secondary/40"
            >
              <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
              <span className="text-sm font-medium text-text">{condition}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  ShieldCheck,
  Sparkles,
  Search,
  GraduationCap,
  Heart,
  Leaf,
} from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    title: "First, Do No Harm",
    description:
      "Utilize the most natural and least invasive therapies to support healing.",
  },
  {
    icon: Sparkles,
    title: "The Healing Power of Nature",
    description:
      "Trust in the body's inherent wisdom and ability to heal itself.",
  },
  {
    icon: Search,
    title: "Identify & Treat the Cause",
    description:
      "Look beyond symptoms to find and address the root cause of disease.",
  },
  {
    icon: GraduationCap,
    title: "Doctor as Teacher",
    description:
      "Educate and empower patients to take responsibility for their own health.",
  },
  {
    icon: Heart,
    title: "Treat the Whole Person",
    description:
      "Consider the physical, mental, emotional, and spiritual aspects of health.",
  },
  {
    icon: Leaf,
    title: "Prevention",
    description:
      "Focus on overall health and disease prevention, not just treatment.",
  },
];

export default function Principles() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
            Our Foundation
          </p>
          <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">
            The 6 Naturopathic Principles
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-cream-dark p-8 text-center transition-all hover:border-accent/40 hover:shadow-lg"
            >
              <div className="mx-auto mb-5 inline-flex rounded-full bg-accent/10 p-4 text-accent">
                <p.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-heading text-lg font-semibold text-text">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-text/70">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

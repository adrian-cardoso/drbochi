import {
  FlaskConical,
  Flower2,
  Activity,
  Apple,
  HeartPulse,
} from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Functional Lab Testing",
    description:
      "Comprehensive testing to identify underlying imbalances and guide personalized treatment plans.",
  },
  {
    icon: Flower2,
    title: "Botanical Medicine",
    description:
      "Evidence-based herbal therapies that harness the healing power of plants to support recovery.",
  },
  {
    icon: Activity,
    title: "Acupuncture",
    description:
      "Traditional acupuncture techniques to restore energy flow, relieve pain, and promote balance.",
  },
  {
    icon: Apple,
    title: "Nutritional Counseling",
    description:
      "Individualized nutrition plans designed to nourish your body and address specific health goals.",
  },
  {
    icon: HeartPulse,
    title: "Lifestyle Guidance",
    description:
      "Holistic coaching on sleep, stress management, and daily habits for sustainable well-being.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">
            Our Services
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-cream-dark bg-cream/50 p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-semibold text-text">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-text/70">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

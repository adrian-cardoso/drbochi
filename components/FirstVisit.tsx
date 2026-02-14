import { ClipboardList, Microscope, FileText, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Discovery Call",
    description:
      "Schedule a free 15-minute call to discuss your health concerns and see if we're the right fit for your needs.",
  },
  {
    icon: Microscope,
    step: "02",
    title: "Comprehensive Evaluation",
    description:
      "Your first visit includes an in-depth health history review, physical exam, and any necessary functional lab testing.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Personalized Plan",
    description:
      "Receive a customized treatment plan that may include botanical medicine, nutrition, acupuncture, and lifestyle changes.",
  },
  {
    icon: CalendarCheck,
    step: "04",
    title: "Ongoing Support",
    description:
      "Regular follow-ups to track your progress, adjust your plan, and support you every step of your healing journey.",
  },
];

export default function FirstVisit() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
            Getting Started
          </p>
          <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">
            Your First Visit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text/70">
            We make it easy to take the first step. Here&apos;s what to expect
            when you begin your journey with us.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto mb-4 inline-flex rounded-full bg-secondary/10 p-4 text-secondary">
                <s.icon className="h-7 w-7" />
              </div>
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-accent">
                Step {s.step}
              </p>
              <h3 className="mb-3 font-heading text-lg font-semibold text-text">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-text/70">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

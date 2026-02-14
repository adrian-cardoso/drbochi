"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is naturopathic medicine?",
    answer:
      "Naturopathic medicine is a distinct system of primary care that emphasizes prevention, treatment, and optimal health through the use of therapeutic methods and substances that encourage the body's inherent self-healing process. Naturopathic doctors (NDs) complete rigorous medical training and are licensed healthcare providers.",
  },
  {
    question: "What should I bring to my first appointment?",
    answer:
      "Please bring a list of current medications and supplements, any recent lab work or medical records, your health insurance card, and a list of your health concerns and goals. Wearing comfortable clothing is also recommended.",
  },
  {
    question: "How long is an initial consultation?",
    answer:
      "Initial consultations typically last 60–90 minutes. This allows Dr. Bochi to conduct a thorough health history, discuss your concerns in depth, and begin developing a personalized treatment plan tailored to your needs.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We are a private-pay practice and do not accept insurance. We offer flexible payment options including HSA/FSA cards, credit cards, and payment plans. Many patients find that investing in naturopathic care reduces their overall healthcare costs long-term.",
  },
  {
    question: "Can naturopathic medicine work alongside conventional treatments?",
    answer:
      "Absolutely. Naturopathic medicine is designed to complement conventional care. Dr. Bochi works collaboratively with your existing healthcare team to ensure safe, integrated treatment. She will never ask you to stop any prescribed medications without consulting your primary care provider.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes, we offer telehealth appointments for both initial consultations and follow-up visits. Virtual visits are a convenient option for patients who cannot come to the office in person or prefer the comfort of their own home.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
            Common Questions
          </p>
          <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-cream-dark bg-white transition-all hover:border-primary/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="pr-4 font-heading text-lg font-semibold text-text">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm leading-relaxed text-text/70">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

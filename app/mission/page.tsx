import Image from "next/image";
import { GraduationCap, Heart, Leaf, Award } from "lucide-react";

export const metadata = {
  title: "Our Mission — Dr. Alena Bochi, ND",
  description:
    "Learn about Dr. Bochi's philosophy, education, and whole-person approach to naturopathic medicine.",
};

export default function MissionPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream via-white to-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
              About Dr. Bochi
            </p>
            <h1 className="font-heading text-4xl font-bold text-text md:text-5xl">
              Our Mission
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text/70">
              Empowering patients to achieve optimal health through
              individualized, root-cause naturopathic care.
            </p>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="mx-auto max-w-sm">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/dr-bochi.webp"
                  alt="Dr. Alena Bochi, ND"
                  width={400}
                  height={568}
                  className="h-auto w-full object-cover"
                  unoptimized
                />
              </div>
            </div>

            <div>
              <h2 className="mb-6 font-heading text-3xl font-bold text-text">
                Dr. Alena Bochi, ND
              </h2>
              <div className="space-y-4 text-text/70">
                <p>
                  Dr. Alena Bochi is a licensed Naturopathic Physician practicing
                  in Connecticut. She earned her Bachelor of Science in Biology
                  from Pace University in Westchester, New York, on a full
                  athletic scholarship for tennis, and went on to complete her
                  medical training at the University of Bridgeport College of
                  Naturopathic Medicine.
                </p>
                <p>
                  Dr. Bochi holds a Master of Science from the University of
                  Bridgeport Acupuncture Institute and is currently advancing her
                  expertise through a Doctorate in Chinese Medicine.
                </p>
                <p>
                  During her clinical training, she had the opportunity to study
                  under Dr. Peter J. D&#39;Adamo, a world-renowned Naturopathic
                  Physician and author, gaining specialized knowledge in
                  Generative Medicine, the Blood Type and GenoType Diets,
                  Nutrigenomics, and Microbiome analysis.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-cream-dark bg-cream/50 p-8">
              <div className="mb-6 flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-primary" />
                <h3 className="font-heading text-xl font-semibold text-text">
                  Education & Credentials
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-text">
                      Doctor of Naturopathic Medicine
                    </p>
                    <p className="text-sm text-text/60">
                      University of Bridgeport — College of Naturopathic
                      Medicine
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-text">
                      Master of Science in Acupuncture
                    </p>
                    <p className="text-sm text-text/60">
                      University of Bridgeport Acupuncture Institute
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-text">
                      Doctorate in Chinese Medicine
                    </p>
                    <p className="text-sm text-text/60">
                      Currently pursuing
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-text">
                      Bachelor of Science in Biology
                    </p>
                    <p className="text-sm text-text/60">
                      Pace University — Westchester, New York
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-text">
                      Licensed Naturopathic Physician
                    </p>
                    <p className="text-sm text-text/60">
                      State of Connecticut
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-text">
                      NASM Personal Training Certification
                    </p>
                    <p className="text-sm text-text/60">
                      National Academy of Sports Medicine
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
                My Story
              </p>
              <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">
                Why Naturopathic Medicine?
              </h2>
            </div>
            <div className="rounded-2xl border border-cream-dark bg-white p-8 md:p-12">
              <div className="space-y-4 text-text/70 leading-relaxed">
                <p>
                  My journey into naturopathic medicine began with a deeply
                  personal experience. Growing up, I watched family members
                  struggle with chronic health conditions that conventional
                  medicine could manage but never fully resolve. I saw the
                  frustration of being told everything was &ldquo;normal&rdquo;
                  while they still felt unwell.
                </p>
                <p>
                  That experience ignited a passion in me to find a different
                  approach — one that looks beyond surface-level symptoms to
                  understand the whole person. When I discovered naturopathic
                  medicine, I knew I had found my calling: a system of healing
                  that honors both the art and science of medicine.
                </p>
                <p>
                  As a former collegiate athlete, I also understand firsthand how
                  deeply connected our physical health is to our mental and
                  emotional well-being. That perspective shapes every treatment
                  plan I create — because true healing requires caring for the
                  whole person, not just a diagnosis.
                </p>
                <p className="font-medium text-text">
                  Today, nothing fulfills me more than watching my patients
                  reclaim their health and rediscover what it feels like to
                  truly thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">
              Our Philosophy
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-cream-dark bg-white p-8 text-center">
              <Heart className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-3 font-heading text-lg font-semibold text-text">
                Whole-Person Care
              </h3>
              <p className="text-sm text-text/70">
                We treat the complete individual — body, mind, and spirit — not
                just isolated symptoms.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-dark bg-white p-8 text-center">
              <Leaf className="mx-auto mb-4 h-8 w-8 text-secondary" />
              <h3 className="mb-3 font-heading text-lg font-semibold text-text">
                Nature-Based Healing
              </h3>
              <p className="text-sm text-text/70">
                We harness the power of nature with evidence-based botanical and
                nutritional therapies.
              </p>
            </div>
            <div className="rounded-2xl border border-cream-dark bg-white p-8 text-center">
              <GraduationCap className="mx-auto mb-4 h-8 w-8 text-accent" />
              <h3 className="mb-3 font-heading text-lg font-semibold text-text">
                Patient Empowerment
              </h3>
              <p className="text-sm text-text/70">
                We educate and empower patients to become active participants in
                their own healing journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

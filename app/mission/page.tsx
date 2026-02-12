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
            <div>
              <h2 className="mb-6 font-heading text-3xl font-bold text-text">
                Dr. Alena Bochi, ND
              </h2>
              <div className="space-y-4 text-text/70">
                <p>
                  Dr. Alena Bochi is a licensed naturopathic doctor who is
                  passionate about helping patients uncover the root causes of
                  their health concerns. She believes that true healing goes
                  beyond managing symptoms — it requires understanding the whole
                  person.
                </p>
                <p>
                  With a foundation in both modern science and traditional
                  healing arts, Dr. Bochi integrates functional lab testing,
                  botanical medicine, acupuncture, nutritional counseling, and
                  lifestyle guidance into comprehensive, individualized treatment
                  plans.
                </p>
                <p>
                  Her approach is collaborative — she works alongside her
                  patients as a partner in their health journey, empowering them
                  with the knowledge and tools they need to thrive.
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
                      Licensed Naturopathic Doctor
                    </p>
                    <p className="text-sm text-text/60">
                      State licensed and board certified
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-text">
                      Certified Acupuncturist
                    </p>
                    <p className="text-sm text-text/60">
                      Trained in traditional acupuncture techniques
                    </p>
                  </div>
                </li>
              </ul>
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

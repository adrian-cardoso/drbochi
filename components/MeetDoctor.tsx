import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MeetDoctor() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2">
          {/* Photo */}
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/dr-bochi.webp"
              alt="Dr. Alena Bochi, Naturopathic Doctor"
              width={600}
              height={700}
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Text */}
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-secondary">
              Your Doctor
            </p>
            <h2 className="font-heading text-3xl font-bold text-text md:text-4xl">
              Meet Dr. Bochi
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-text/70">
              Dr. Alena Bochi is a licensed naturopathic doctor dedicated to
              helping patients uncover the root causes of their health concerns
              through personalized, whole-person care.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-text/70">
              With a focus on evidence-based natural therapies, she empowers her
              patients to achieve lasting wellness and vitality.
            </p>
            <Link
              href="/mission"
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

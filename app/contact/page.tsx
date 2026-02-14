import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Dr. Alena Bochi, ND",
  description:
    "Get in touch with Dr. Bochi's office or schedule a consultation.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-cream via-white to-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
              Get in Touch
            </p>
            <h1 className="font-heading text-4xl font-bold text-text md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text/70">
              Ready to start your healing journey? Reach out to schedule a
              consultation or ask a question.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            {/* Form */}
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-text">
                Send a Message
              </h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <h2 className="mb-6 font-heading text-2xl font-bold text-text">
                Office Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-text">Email</p>
                    <a
                      href="mailto:info@drbochi.com"
                      className="text-sm text-text/70 transition-colors hover:text-primary"
                    >
                      info@drbochi.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-text">Phone</p>
                    <p className="text-sm text-text/70">(203) 555-0100</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-text">Location</p>
                    <p className="text-sm text-text/70">
                      Bridgeport, Connecticut
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-3 text-primary">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-text">Hours</p>
                    <p className="text-sm text-text/70">
                      Monday – Friday: 9:00 AM – 5:00 PM
                    </p>
                    <p className="text-sm text-text/70">
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-8">
                <h3 className="mb-3 font-heading text-lg font-semibold text-text">
                  Ready to Book?
                </h3>
                <p className="mb-4 text-sm text-text/70">
                  Schedule a complimentary 15-minute discovery call to learn how
                  naturopathic medicine can help you.
                </p>
                <a
                  href="/account"
                  className="inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Patient Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream/30 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-center font-heading text-2xl font-bold text-text">
            Find Us
          </h2>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48272.28417441298!2d-73.23507!3d41.18655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e80e39c7a8e4c5%3A0x4a4f02ecbca40a74!2sBridgeport%2C%20CT!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location in Bridgeport, Connecticut"
              className="h-64 w-full md:h-96"
            />
          </div>
        </div>
      </section>
    </>
  );
}

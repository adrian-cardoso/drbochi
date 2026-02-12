"use client";

import Link from "next/link";
import { Leaf, Linkedin, Mail, Phone } from "lucide-react";
import SubscribeForm from "./SubscribeForm";

export default function Footer() {
  return (
    <footer className="bg-text text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Leaf className="h-6 w-6 text-accent" />
              <span className="font-heading text-lg font-bold text-white">
                Dr. Alena Bochi, ND
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream-dark">
              Licensed naturopathic doctor dedicated to whole-person care through
              evidence-based natural medicine.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <a
                  href="mailto:info@drbochi.com"
                  className="transition-colors hover:text-accent"
                >
                  info@drbochi.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>(203) 555-0100</span>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-accent" />
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4 text-sm">
              <Link href="/" className="transition-colors hover:text-accent">
                Home
              </Link>
              <Link
                href="/mission"
                className="transition-colors hover:text-accent"
              >
                Mission
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-accent"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="mb-4 font-heading text-lg font-semibold text-white">
              Stay Connected
            </h3>
            <p className="mb-4 text-sm text-cream-dark">
              Subscribe for wellness tips and practice updates.
            </p>
            <SubscribeForm />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-cream-dark">
          &copy; {new Date().getFullYear()} Dr. Alena Bochi, ND. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

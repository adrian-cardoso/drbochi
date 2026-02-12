"use client";

import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { LogOut, CalendarDays, User } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function AccountPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!session) {
    redirect("/account/login");
  }

  return (
    <>
      <section className="bg-gradient-to-br from-cream via-white to-cream py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
              Patient Portal
            </p>
            <h1 className="font-heading text-4xl font-bold text-text md:text-5xl">
              Welcome Back
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl">
            {/* Profile bar */}
            <div className="mb-10 flex items-center justify-between rounded-2xl border border-cream-dark bg-cream/50 p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <User className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-text">
                    {session.user?.name || "Patient"}
                  </p>
                  <p className="text-sm text-text/60">{session.user?.email}</p>
                </div>
              </div>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="inline-flex items-center gap-2 rounded-lg border border-cream-dark px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-cream"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>

            {/* Booking section */}
            <div className="rounded-2xl border border-cream-dark bg-white p-8">
              <div className="mb-6 flex items-center gap-3">
                <CalendarDays className="h-6 w-6 text-primary" />
                <h2 className="font-heading text-2xl font-bold text-text">
                  Book an Appointment
                </h2>
              </div>
              <CalendlyEmbed />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

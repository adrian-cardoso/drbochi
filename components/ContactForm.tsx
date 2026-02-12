"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2 } from "lucide-react";

interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>();

  const onSubmit = async (data: ContactData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-secondary" />
        <h3 className="mb-2 font-heading text-xl font-semibold text-text">
          Message Sent!
        </h3>
        <p className="text-sm text-text/70">
          Thank you for reaching out. We&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-primary underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <label className="mb-1 block text-sm font-medium text-text">
          Full Name
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-sm text-text placeholder:text-text/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="Your full name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-text">
          Email
        </label>
        <input
          type="email"
          className="w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-sm text-text placeholder:text-text/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="you@example.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-text">
          Phone
        </label>
        <input
          type="tel"
          className="w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-sm text-text placeholder:text-text/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="(555) 000-0000"
          {...register("phone")}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-text">
          Message
        </label>
        <textarea
          rows={5}
          className="w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-sm text-text placeholder:text-text/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          placeholder="How can we help you?"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";

interface SubscribeData {
  email: string;
}

export default function SubscribeForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubscribeData>();

  const onSubmit = async (data: SubscribeData) => {
    try {
      const res = await fetch("/api/subscribe", {
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
      <p className="text-sm text-accent">Thank you for subscribing!</p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
      <input
        type="email"
        placeholder="Your email"
        className="w-full rounded-lg bg-white/10 px-4 py-2 text-sm text-white placeholder:text-cream-dark focus:outline-none focus:ring-2 focus:ring-accent"
        {...register("email", { required: true })}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-accent/80 disabled:opacity-50"
      >
        <Send className="h-4 w-4" />
      </button>
      {errors.email && (
        <span className="text-xs text-red-400">Required</span>
      )}
      {status === "error" && (
        <span className="text-xs text-red-400">Error. Try again.</span>
      )}
    </form>
  );
}

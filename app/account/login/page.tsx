"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { LogIn } from "lucide-react";

interface LoginData {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>();

  const onSubmit = async (data: LoginData) => {
    setError("");
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password");
    } else {
      router.push("/account");
    }
  };

  return (
    <section className="flex min-h-[70vh] items-center justify-center py-20">
      <div className="mx-auto w-full max-w-md px-6">
        <div className="mb-8 text-center">
          <h1 className="font-heading text-3xl font-bold text-text">
            Patient Login
          </h1>
          <p className="mt-2 text-sm text-text/70">
            Sign in to access your patient portal
          </p>
        </div>

        <div className="rounded-2xl border border-cream-dark bg-white p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="mb-1 block text-sm font-medium text-text">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-sm text-text placeholder:text-text/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="you@example.com"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-text">
                Password
              </label>
              <input
                type="password"
                className="w-full rounded-lg border border-cream-dark bg-white px-4 py-3 text-sm text-text placeholder:text-text/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
            >
              <LogIn className="h-4 w-4" />
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-text/60">
            Don&apos;t have an account?{" "}
            <Link
              href="/account/register"
              className="font-medium text-primary hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>

        {/* Demo hint */}
        <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-4 text-center text-xs text-text/60">
          <p className="font-medium text-text/80">Demo Credentials</p>
          <p>Email: patient@drbochi.com / Password: password123</p>
        </div>
      </div>
    </section>
  );
}

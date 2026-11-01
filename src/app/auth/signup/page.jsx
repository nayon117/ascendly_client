"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { Description, Label, Radio, RadioGroup } from "@heroui/react";

const SignUpForm = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role");

    try {
      const { data, error } = await authClient.signUp.email({
        name,
        email,
        password,
        role,
        callbackURL: "/",
      });

      if (error) {
        setError(error.message || "Something went wrong. Please try again.");
        return;
      }

      setSuccess("Your account has been created successfully!");

      e.target.reset();

      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 2000);
    } catch (err) {
      setError("Unable to create your account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-primary px-6 py-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 z-0 size-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-md">
        {/* Signup card */}
        <div className="rounded-3xl border border-border bg-primary/80 p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-9">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Create your account
            </h1>

            <p className="mt-3 text-sm leading-6 text-muted">
              Start discovering opportunities and take the next step in your
              career.
            </p>
          </div>

          {/* Error message */}
          {error && (
            <div
              role="alert"
              className="mb-5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
            >
              {error}
            </div>
          )}
          {/* Success message */}
          {success && (
            <div
              role="status"
              className="mb-5 rounded-xl border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent"
            >
              {success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-foreground"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  required
                  minLength={8}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3.5 pr-12 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition hover:text-accent"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d="M3 3l18 18" />
                      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                      <path d="M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.3 4.5 9 7-.3 1.1-1.1 2.5-2.4 3.7" />
                      <path d="M6.2 6.2C3.8 7.8 2.4 10.1 3 12c.7 2.5 4 7 9 7 1.1 0 2.1-.2 3-.6" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-5"
                    >
                      <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>

              <p className="mt-2 text-xs text-muted">
                Use at least 8 characters.
              </p>
            </div>

            {/* role selection */}
            <div className="flex flex-col gap-4">
              <Label> Role </Label>
              <RadioGroup
                defaultValue="seeker"
                name="role"
                orientation="horizontal"
              >
                <Radio value="seeker">
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator />
                    </Radio.Control>
                    Job Seeker
                  </Radio.Content>
                </Radio>
                <Radio value="recruiter">
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator />
                    </Radio.Control>
                    Recruiter
                  </Radio.Content>
                </Radio>

              </RadioGroup>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-bold text-primary transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create Account"}

              {!loading && (
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </button>
          </form>

          {/* Sign in */}
          <p className="mt-7 text-center text-sm text-muted">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="font-semibold text-accent transition hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Bottom text */}
        <p className="mt-8 text-center text-xs leading-6 text-muted">
          By creating an account, you agree to our{" "}
          <Link href="/terms" className="text-secondary hover:text-accent">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-secondary hover:text-accent">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default SignUpForm;

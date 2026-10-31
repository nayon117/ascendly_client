"use client";

import {
  Magnifier,
  MapPin,
  ArrowRight,
  Briefcase,
  Star,
} from "@gravity-ui/icons";

const stats = [
  {
    label: "Active Jobs",
    value: "50K+",
    icon: Briefcase,
  },
  {
    label: "Companies",
    value: "8K+",
    icon: "building",
  },
  {
    label: "Job Seekers",
    value: "1M+",
    icon: "users",
  },
  {
    label: "Satisfaction Rate",
    value: "95%",
    icon: Star,
  },
];

const HeroBanner = () => {
  return (
    <section className="relative isolate overflow-hidden bg-primary">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('hero_image.jfif')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-primary via-primary/95 to-primary/30" />

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-24 lg:py-28">
        <div className="max-w-5xl">
          {/* Trending */}
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-accent">
              <span className="size-2 rounded-full bg-accent" />
              Trending Now
            </span>

            <span className="hidden h-6 w-px bg-border sm:block" />

            <p className="text-sm text-secondary">
              React Developer · Remote · $120k+
            </p>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-4xl leading-tight font-black tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Next
            <br />
            Career <span className="text-accent">Opportunity</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
            Discover top job opportunities from innovative companies and take
            the next step in your career.
          </p>

          {/* Search UI - functionality will be added later */}
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-border bg-primary/80 p-3 backdrop-blur-md sm:flex-row sm:items-center sm:gap-0 sm:rounded-full">
            {/* Job search */}
            <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <Magnifier className="size-5 shrink-0 text-foreground" />

              <input
                type="text"
                placeholder="Search jobs..."
                className="w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted"
              />
            </div>

            {/* Divider */}
            <div className="hidden h-9 w-px bg-border sm:block" />

            {/* Location search */}
            <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <MapPin className="size-5 shrink-0 text-foreground" />

              <input
                type="text"
                placeholder="Location (e.g. Remote)"
                className="w-full bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted"
              />
            </div>

            {/* Search button */}
            <button
              type="button"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-primary transition hover:bg-accent/90"
            >
              Search Jobs
              <ArrowRight className="size-4" />
            </button>
          </div>

          {/* Statistics */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-primary/70 p-5 backdrop-blur-sm transition hover:border-accent/50"
              >
                {typeof Icon === "string" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-4 size-6 text-accent"
                  >
                    {Icon === "building" ? (
                      <>
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M9 21V9h6v12M7 7h.01M11 7h.01M15 7h.01M7 11h.01M15 11h.01" />
                      </>
                    ) : (
                      <>
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M20 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </>
                    )}
                  </svg>
                ) : (
                  <Icon className="mb-4 size-6 text-accent" />
                )}

                <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {value}
                </h3>

                <p className="mt-1 text-sm text-muted">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

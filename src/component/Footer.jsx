import Link from "next/link";
import { LogoFacebook, LogoLinkedin, LogoGithub, ArrowUpRight  } from "@gravity-ui/icons";

const footerLinks = {
  Platform: [
    { name: "Find Jobs", href: "/jobs" },
    { name: "Companies", href: "/companies" },
    { name: "Pricing", href: "/pricing" },
  ],
  Account: [
    { name: "Sign In", href: "/sign-in" },
    { name: "Create Account", href: "/sign-up" },
  ],
  Explore: [
    { name: "Browse Opportunities", href: "/jobs" },
    { name: "Explore Companies", href: "/companies" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: LogoFacebook,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: LogoLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: LogoGithub,
  },
];

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-border bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                <ArrowUpRight className="size-6" />
              </span>

              <span className="text-2xl font-black tracking-tight text-foreground">
                Ascendly<span className="text-accent">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
              Discover meaningful opportunities, connect with ambitious
              companies, and take the next step in your career.
            </p>

            <Link
              href="/jobs"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
            >
              Explore opportunities
              <ArrowUpRight className="size-4" />
            </Link>

            {/* Social links */}
            <div className="mt-8">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-muted">
                Follow us
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="flex size-10 items-center justify-center rounded-xl border border-border text-muted transition duration-200 hover:border-accent hover:bg-accent hover:text-primary"
                  >
                    <Icon className="size-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-5 text-sm font-bold text-foreground">
                {title}
              </h3>

              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted transition hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © 2026 Ascendly. All rights reserved.
          </p>

          <p className="text-xs font-medium tracking-wide text-secondary">
            YOUR NEXT OPPORTUNITY STARTS HERE.
          </p>

          <Link
            href="/"
            className="text-xs font-semibold text-muted transition hover:text-accent"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars, Xmark, ArrowUpRight } from "@gravity-ui/icons";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Find Jobs", href: "/jobs" },
  { name: "Companies", href: "/companies" },
  { name: "Pricing", href: "/pricing" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-primary/95 px-5 py-3 shadow-xl shadow-black/10 backdrop-blur-xl"
      >
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-accent text-primary">
            <ArrowUpRight className="size-6" />
          </span>

          <span className="text-xl font-black tracking-tight text-foreground">
            Ascendly<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-xl px-4 py-2 text-sm font-medium text-muted transition hover:bg-white/5 hover:text-accent"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/sign-in"
            className="text-sm font-semibold text-secondary transition hover:text-accent"
          >
            Sign in
          </Link>

          <Link
            href="/sign-up"
            className="flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-primary transition hover:bg-accent/90"
          >
            Get started
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex size-10 items-center justify-center rounded-xl border border-white/10 text-foreground transition hover:bg-white/10 md:hidden"
        >
          {isOpen ? (
            <Xmark className="size-6" />
          ) : (
            <Bars className="size-6" />
          )}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-primary shadow-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "max-h-96 opacity-100"
            : "pointer-events-none max-h-0 border-transparent opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <ul className="flex flex-col gap-1 p-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                tabIndex={isOpen ? 0 : -1}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-secondary transition hover:bg-white/5 hover:text-accent"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-3 border-t border-white/10 p-4">
          <Link
            href="/sign-in"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="rounded-xl border border-white/10 px-4 py-3 text-center text-sm font-semibold text-foreground transition hover:bg-white/5"
          >
            Sign in
          </Link>

          <Link
            href="/sign-up"
            onClick={closeMenu}
            tabIndex={isOpen ? 0 : -1}
            className="flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-primary transition hover:bg-accent/90"
          >
            Get started
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

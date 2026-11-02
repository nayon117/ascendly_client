
"use client";

import { useState } from "react";
import {
  Bell,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
  LayoutSideContentLeft,
  Xmark,
} from "@gravity-ui/icons";

const DashboardSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: House, label: "Home" },
    { icon: Magnifier, label: "Search" },
    { icon: Bell, label: "Notifications", badge: "3" },
    { icon: Envelope, label: "Messages" },
    { icon: Person, label: "Profile" },
    { icon: Gear, label: "Settings" },
  ];

  const navContent = (
    <div className="flex h-full flex-col">
      {/* Navigation */}
      <div className="mb-3 px-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
          Dashboard Menu
        </p>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item, index) => {
          const isActive = index === 0;
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => setIsOpen(false)}
              className={`group flex w-full cursor-pointer items-center gap-3 rounded-xl border px-3 py-3 text-left text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "border-accent/20 bg-accent/10 text-accent"
                  : "border-transparent text-muted hover:bg-white/5 hover:text-foreground"
              }`}
            >
              <Icon
                className={`size-5 shrink-0 transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-muted group-hover:text-foreground"
                }`}
              />

              <span className="flex-1">{item.label}</span>

              {item.badge && (
                <span className="flex size-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-primary">
                  {item.badge}
                </span>
              )}

              {isActive && (
                <span className="size-1.5 rounded-full bg-accent" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom Profile */}
      <div className="mt-auto border-t border-border pt-5">
        <div className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/5">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-sm font-bold text-accent">
            A
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-foreground">
              Your Account
            </p>
            <p className="truncate text-xs text-muted">
              Personal Workspace
            </p>
          </div>

          <Gear className="size-4 shrink-0 text-muted" />
        </div>

        <p className="mt-4 px-3 text-[10px] text-muted">
          © 2026 Ascendly. All rights reserved.
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 border-r border-border bg-primary p-5 lg:block">
        {navContent}
      </aside>

      {/* Mobile & Tablet Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open dashboard sidebar"
        aria-expanded={isOpen}
        className="z-50 relative top-4 left-4 mr-3 flex size-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-primary text-foreground shadow-lg transition hover:border-accent/40 hover:text-accent lg:hidden"
      >
        <LayoutSideContentLeft className="size-5" />
      </button>

      {/* Mobile & Tablet Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close sidebar"
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 cursor-pointer bg-black/60 backdrop-blur-sm"
          />

          {/* Sidebar Drawer */}
          <aside className="absolute inset-y-0 left-0 flex w-72 max-w-[85vw] flex-col border-r border-border bg-primary p-5 shadow-2xl animate-in slide-in-from-left duration-200">
            {/* Drawer Header */}
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-lg font-black tracking-tight text-foreground">
                Ascendly<span className="text-accent">.</span>
              </h2>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close sidebar"
                className="flex size-9 cursor-pointer items-center justify-center rounded-lg text-muted transition hover:bg-white/5 hover:text-foreground"
              >
                <Xmark className="size-5" />
              </button>
            </div>

            {/* Drawer Navigation */}
            <div className="min-h-0 flex-1 overflow-y-auto">
              {navContent}
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default DashboardSidebar;

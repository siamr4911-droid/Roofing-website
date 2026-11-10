
"use client";

import { useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Location", href: "#locations" },
  { label: "Contact", href: "#contact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      <nav className="mx-auto flex h-[80px] max-w-[1440px] items-center justify-between gap-8 px-5 sm:px-8 xl:px-0">

        {/* Brand */}
        <a
          href="#home"
          className="flex flex-col items-center text-primary"
        >
          <span className="text-3xl leading-none">⌂</span>
          <span className="text-xs font-extrabold tracking-wider">
            ROOFBOT
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition hover:text-primary ${
                index === 0
                  ? "text-primary"
                  : "text-button"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-3 rounded-full bg-button py-2 pl-5 pr-2 text-sm font-medium text-white transition hover:bg-button/90 sm:inline-flex"
        >
          Get a Quote
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-lg text-button">
            ↗
          </span>
        </a>

        {/* Mobile menu */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-200 px-4 py-2 text-button lg:hidden"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="absolute left-0 top-full w-full border-t border-slate-100 bg-white p-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-button"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              Get a Quote ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

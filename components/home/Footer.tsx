
const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Location", href: "#locations" },
  { name: "Contact Us", href: "#contact" },
];

const navigationLinks = [
  { name: "Privacy Policy", href: "#privacy" },
  { name: "Terms & Condition", href: "#terms" },
  { name: "Support", href: "#support" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="overflow-hidden bg-[#151515] text-white"
    >

      <div className="mx-auto max-w-[1440px] px-5 pt-16 pb-0 sm:px-8 sm:pt-20">

        {/* Footer Top */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Roofing You Can Trust.
            <br />
            Quality That Lasts.
          </h2>

          <div className="max-w-md md:ml-auto">

            <p className="text-sm leading-6 text-gray-300">
              Delivering expert roofing solutions with premium materials,
              skilled craftsmanship, and dependable service to protect
              homes and businesses across the USA.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm font-medium text-button transition-colors hover:bg-button hover:text-white"
            >
              Contact Us

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl text-button">
                ↗
              </span>
            </a>

          </div>

        </div>

        {/* Large Typography */}

        <div className="mt-10 mb-16 overflow-hidden sm:mt-14 sm:mb-20">

          <h1 className="bg-gradient-to-b from-white via-white to-[#454545] bg-clip-text text-center text-[clamp(3.5rem,13.5vw,16rem)] font-black leading-[0.85] tracking-normal text-transparent">
            ROOFROOT
          </h1>

        </div>

        {/* Footer Information */}

        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.65fr_0.75fr_0.9fr] lg:gap-8">

          {/* Company Information */}

          <div>

            <p className="max-w-xs text-sm leading-6 text-gray-400">
              From roof repairs to complete replacements, we provide
              durable roofing systems designed to withstand every
              season and protect what matters most.
            </p>

            <h3 className="mt-7 text-sm font-semibold uppercase">
              Follow Us
            </h3>

            <div className="mt-4 flex gap-2">

              {[
                { name: "f", label: "Facebook" },
                { name: "◎", label: "Instagram" },
                { name: "𝕏", label: "X" },
                { name: "in", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-button transition-all hover:-translate-y-1 hover:bg-white hover:text-button"
                >
                  {social.name}
                </a>
              ))}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-sm font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-5 text-sm font-semibold">
              Navigation
            </h3>

            <ul className="space-y-3">

              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs text-gray-400 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}

            </ul>

          </div>

          {/* Contact Information */}

          <div>

            <h3 className="mb-5 text-sm font-semibold">
              Contact Info
            </h3>

            <ul className="space-y-4">

              <li className="flex items-start gap-3 text-xs text-gray-400">

                <span className="text-base text-primary">⌖</span>

                <span>Dallas, TX 75225 United States</span>

              </li>

              <li className="flex items-center gap-3 text-xs text-gray-400">

                <span className="text-base text-primary">✉</span>

                <a
                  href="mailto:example@gmail.com"
                  className="hover:text-primary"
                >
                  example@gmail.com
                </a>

              </li>

              <li className="flex items-center gap-3 text-xs text-gray-400">

                <span className="text-base text-primary">☎</span>

                <a
                  href="tel:+15455454564"
                  className="hover:text-primary"
                >
                  +1 (545) 5454564
                </a>

              </li>

            </ul>

          </div>

        </div>

        {/* Copyright */}

        <div className="pt-7 pb-5 text-center">

          <p className="text-xs text-gray-400">
            © Copyright 2026 <span className="font-semibold text-white">RoofRoot</span> all rights reserved
          </p>

        </div>

      </div>

    </footer>
  );
}

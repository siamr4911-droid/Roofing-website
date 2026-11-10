
import Image from "next/image";
import { Reem_Kufi_Fun } from "next/font/google";

const reemKufiFun = Reem_Kufi_Fun({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-4 h-[650px] overflow-hidden rounded-[28px] bg-[#222E48] md:mx-6 lg:h-[700px]"
    >
      {/* Background Image */}
      <Image
        src="/images/hero.png"
        alt="Professional roofer working on a residential roof"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Background Shade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#18273c]/65 via-[#18273c]/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent" />

      {/* Full Width Heading Container */}
      <div className="absolute inset-x-0 top-8 z-10 mx-auto w-full px-4 lg:top-10 lg:px-6">
        <div className="mx-auto max-w-[1824px]">
          <h1
            className={`${reemKufiFun.className} whitespace-nowrap text-center font-bold leading-none`}
            style={{
              fontSize: "clamp(20px, 8.85vw, 170px)",
              letterSpacing: "-0.055em",
              backgroundImage:
                "linear-gradient(180deg, #FFFFFF 0%, rgba(255,255,255,0) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }}
          >
            PROTECTING HOMES
          </h1>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-5 sm:px-8 xl:px-0">
        <div className="mt-32 w-full sm:mt-40 lg:mt-0">
          <div className="ml-auto max-w-[520px] lg:mr-6">

            <p className="font-sans text-[14px] leading-[1.7] text-white/95 md:text-[16px]">
              From roof repairs and replacements to complete
              installations, our experienced team delivers durable
              craftsmanship, premium materials, and dependable
              service to keep your home protected for years to come.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 font-sans text-sm font-semibold text-[#222E48] transition hover:bg-slate-100"
              >
                Contact Us
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EE7731] text-xl text-white">
                  ↗
                </span>
              </a>

              <a
                href="#services"
                className="font-sans text-sm font-semibold text-white transition hover:opacity-70"
              >
                View Services
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

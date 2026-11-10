
import Image from "next/image";

const stats = [
  {
    number: "98",
    suffix: "%",
    text: "Customer satisfaction for all homes and offices we maintain.",
  },
  {
    number: "220",
    suffix: "+",
    text: "Satisfied clients who trust us with their home or workspace.",
  },
  {
    number: "96",
    suffix: "%",
    text: "On-time arrival rate for scheduled appointments.",
  },
  {
    number: "07",
    suffix: "+",
    text: "Years of professional experience you can rely on.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-0">

        {/* Section information */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <span className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase text-button">
              <span className="mr-2 text-primary">★</span>
              About Us
            </span>

            <h2 className="mt-6 text-[32px] font-bold leading-[1.18] tracking-tight text-button md:text-[46px]">
              Quality{" "}
              <span className="text-primary">
                Roofing Services
              </span>
              <br />
              for Every American Home
            </h2>

            <div className="mt-6 inline-flex overflow-hidden rounded-full">
              <Image
                src="/images/about/about 1.png"
                alt="Roofing professionals"
                width={125}
                height={50}
                className="h-12 w-[125px] object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-start justify-center">
            <p className="max-w-[430px] text-base leading-[1.7] text-[#374155]">
              Professional roof repair, replacement, and installation
              services backed by quality workmanship and dependable
              customer care across the USA.
            </p>

            <a
              href="#services"
              className="mt-6 inline-flex items-center gap-4 rounded-full bg-button py-2 pl-6 pr-2 text-sm font-medium text-white transition hover:bg-button/90"
            >
              Learn More
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg text-button">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="min-h-[175px] rounded-xl bg-[#e8eef5] p-6 md:p-8"
            >
              <h3 className="text-4xl font-bold tracking-tight text-button md:text-5xl">
                {stat.number}
                <span className="text-primary">
                  {stat.suffix}
                </span>
              </h3>

              <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-[#374155]">
                {stat.text}
              </p>
            </div>
          ))}
        </div>

        {/* Images */}
        <div className="relative mx-auto mt-7 grid max-w-[960px] grid-cols-2 gap-5">
          <div className="relative h-[220px] overflow-hidden rounded-xl sm:h-[300px]">
            <Image
              src="/images/about/about 1.png"
              alt="Roofing workers installing tiles"
              fill
              sizes="(max-width: 768px) 50vw, 480px"
              className="object-cover"
            />
          </div>

          <div className="relative h-[220px] overflow-hidden rounded-xl sm:h-[300px]">
            <Image
              src="/images/about/about 2.png"
              alt="Professional metal roof installation"
              fill
              sizes="(max-width: 768px) 50vw, 480px"
              className="object-cover"
            />
          </div>

          <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[8px] border-white bg-[#fff7f1] shadow-sm sm:h-32 sm:w-32">
            <span className="text-center text-xs font-bold leading-5 text-primary">
              ROOFING
              <br />
              EXPERTS
              <br />
              ↗
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

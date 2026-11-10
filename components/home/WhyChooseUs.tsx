
import Image from "next/image";

const benefits = [
  "Quality Materials",
  "Expert Engineers",
  "Roofing Warranty",
  "Award Winning",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">

        {/* Left Image Composition */}

        <div className="relative mx-auto h-[430px] w-full max-w-[620px]">

          {/* ROOFING Text */}
          <span className="absolute -left-[18%] top-1/2 z-30 -translate-y-1/2 -rotate-90 whitespace-nowrap text-5xl font-bold tracking-widest text-[#E3E3E3] sm:text-6xl">
            ROOFING
          </span>

          {/* First Image */}
          <div className="absolute left-[12%] top-0 z-10 aspect-[499/595] w-[52%] overflow-hidden rounded-2xl">
            <Image
              src="/images/why-choose-us/why choose us (1).png"
              alt="Professional roofing team"
              fill
              sizes="(max-width: 768px) 80vw, 500px"
              className="object-cover"
            />
          </div>

          {/* Second Image */}
          <div className="absolute bottom-0 right-[3%] z-20 aspect-[311/342] w-[38%] overflow-hidden rounded-2xl border-[7px] border-white shadow-lg">
            <Image
              src="/images/why-choose-us/why choose us 2.png"
              alt="Roofing professional with homeowner"
              fill
              sizes="(max-width: 768px) 70vw, 400px"
              className="object-cover"
            />
          </div>

          {/* Dotted Circle */}
          <div className="absolute right-[8%] top-12 h-16 w-16 rounded-full border-2 border-dotted border-slate-300" />

        </div>

        {/* Right Content */}

        <div className="max-w-xl">

          <span className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-[11px] font-medium uppercase text-slate-600">
            <span className="mr-2 text-primary">★</span>
            Why Choose Us
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Your Trusted <span className="text-primary">Roofing Partner</span>
            <br />
            Across the USA
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            Protect your investment with trusted roofing professionals.
            We combine quality materials, skilled workmanship, and
            dependable service to deliver durable roofing solutions
            built to last.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">

            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-lg bg-[#F2F3F5] p-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-button">
                  {index + 1}
                </span>

                <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                  {benefit}
                </span>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

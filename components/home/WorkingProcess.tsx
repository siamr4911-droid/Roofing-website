
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Free Roof Inspection",
    description:
      "Our experts perform a thorough roof inspection to identify damage, assess your roof's condition, and recommend the most effective solution at no cost.",
    image: "/images/working-process/card 1.png",
  },
  {
    number: "02",
    title: "Customized Estimate",
    description:
      "Receive a clear, personalized estimate tailored to your roofing needs, including a detailed pricing, materials, and project timeline with no hidden fees.",
    image: "/images/working-process/card 2.png",
  },
  {
    number: "03",
    title: "Professional Installation",
    description:
      "Our certified roofing specialists complete every installation with premium materials, expert craftsmanship, and strict quality standards for lasting protection.",
    image: "/images/working-process/card 3.png",
  },
  {
    number: "04",
    title: "Final Inspection",
    description:
      "We carefully inspect every detail, complete a full site cleanup, and ensure your new roof meets our highest standards before the project is finished.",
    image: "/images/working-process/card 4.png",
  },
];

export default function WorkingProcess() {
  return (
    <section
      id="process"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-0">

        {/* Section heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-xs font-medium uppercase text-button">
            <span className="mr-2 text-primary">★</span>
            Working Process
          </span>

          <h2 className="mt-6 text-[34px] font-bold text-button md:text-[48px]">
            Our{" "}
            <span className="text-primary">
              Working
            </span>{" "}
            Process
          </h2>

          <p className="mx-auto mt-4 max-w-[680px] text-sm leading-relaxed text-[#4c576b] md:text-base">
            We make every roofing project simple and stress-free
            with expert planning, professional installation,
            and reliable support.
          </p>
        </div>

        {/* Process cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
             className="group relative flex h-[350px] flex-col justify-between overflow-hidden rounded-[24px] border-[5px] border-[#E3E3E3] bg-button p-7 text-center text-white md:h-[400px]"
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover blur-[2px] transition-all duration-500 group-hover:scale-110 group-hover:blur-0"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[#152238]/30 via-[#152238]/45 to-[#152238]/85" />

              <div className="relative z-10">
                <span className="text-lg font-semibold tracking-widest">
                  STEP {step.number}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-[1.7] text-white/90">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

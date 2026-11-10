
import Image from "next/image";

const services = [
  {
    title: "Table Booking & Reservation",
    description:
      "Receive our skilled technicians with our seamless online booking system, ensuring a hassle-free roofing experience every time you visit.",
    image: "/images/services/service 1.png",
  },
  {
    title: "Roof Installation",
    description:
      "Professional roof installation using premium materials to ensure lasting durability, safety, and exceptional performance.",
    image: "/images/services/service 2.png",
  },
  {
    title: "Roof Maintenance",
    description:
      "Keep your roof in peak condition with regular maintenance that extends its lifespan and improves performance.",
    image: "/images/services/service 3.png",
  },
  {
    title: "Roof Replacement",
    description:
      "Upgrade your aging roof with a durable replacement that enhances protection, energy efficiency, and curb appeal.",
    image: "/images/services/service 4.png",
  },
  {
    title: "Roof Inspection",
    description:
      "Thorough roof inspections to detect issues early and help prevent costly repairs in the future.",
    image: "/images/services/service 5.png",
  },
  {
    title: "Gutter Installation",
    description:
      "Professional gutter installation to protect your home and effectively manage rainwater.",
    image: "/images/services/service 6.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-section py-20"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 xl:px-0">

        {/* Section heading */}
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium uppercase text-button">
            <span className="mr-2 text-primary">★</span>
            Our Services
          </span>

          <h2 className="mt-6 text-[34px] font-bold tracking-tight text-button md:text-[48px]">
            Expert{" "}
            <span className="text-primary">
              Roofing
            </span>{" "}
            Solutions
          </h2>

          <p className="mx-auto mt-4 max-w-[700px] text-sm leading-relaxed text-[#4c576b] md:text-base">
            From roof repairs and inspections to full replacements,
            we provide reliable roofing solutions designed to
            protect your home and increase its long-term value.
          </p>
        </div>

        {/* Service rows */}
        <div className="space-y-3">
          {services.map((service, index) => (
            <a
              key={service.title}
              href="#contact"
              className={`group grid items-center gap-5 rounded-xl px-4 py-4 transition-all duration-300 md:grid-cols-[260px_240px_1fr_52px] md:gap-8 md:px-6 ${
                index === 0
                  ? "bg-button text-white"
                  : "border-b border-[#dbe3eb] text-button hover:bg-button hover:text-white"
              }`}
            >
              <div className="relative h-[150px] overflow-hidden rounded-lg md:h-[125px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 260px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <h3 className="max-w-[240px] text-xl font-semibold leading-tight md:text-2xl">
                {service.title}
              </h3>

              <p
                className={`max-w-[440px] text-sm leading-relaxed transition-colors ${
                  index === 0
                    ? "text-white/80"
                    : "text-[#4c576b] group-hover:text-white/80"
                }`}
              >
                {service.description}
              </p>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl text-button transition-transform group-hover:rotate-45">
                ↗
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

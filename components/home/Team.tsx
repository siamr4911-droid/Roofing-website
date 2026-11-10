
import Image from "next/image";

const team = [
  {
    name: "Sean Rahman",
    role: "President & Founder",
    image: "/images/team/team 1.png",
  },
  {
    name: "Michael Carter",
    role: "Project Manager",
    image: "/images/team/team 2.png",
  },
  {
    name: "David Wilson",
    role: "Senior Roofing Specialist",
    image: "/images/team/team 3.png",
  },
  {
    name: "Emily Parker",
    role: "Customer Success Manager",
    image: "/images/team/team 4.png",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="bg-section py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">

        <div className="mb-12 text-center">

          <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-medium uppercase text-slate-600">
            <span className="mr-2 text-primary">★</span>
            Team Members
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Meet the <span className="text-primary">Experts</span> Behind Every Roof
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            Our skilled roofing professionals combine years of experience,
            expert craftsmanship, and a customer-first approach to deliver
            durable, high-quality roofing solutions you can trust.
          </p>

        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {team.map((member) => (
            <article
              key={member.name}
              className="group relative h-[330px] overflow-hidden rounded-[22px] bg-slate-200"
            >

              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/80 px-3 py-4 text-center backdrop-blur-md">

                <h3 className="text-base font-bold text-slate-900">
                  {member.name}
                </h3>

                <p className="mt-1 text-xs text-slate-600">
                  {member.role}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

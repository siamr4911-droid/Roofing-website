
import Image from "next/image";

function ProjectCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <article className="group relative h-[240px] overflow-hidden rounded-[24px] sm:h-[280px] lg:h-[560px]">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 1440px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

      <div className="absolute bottom-6 left-6 right-6 z-10 text-white sm:bottom-8 sm:left-8">
        <h3 className="text-xl font-semibold sm:text-2xl">
          {title}
        </h3>

        <p className="mt-2 max-w-xl text-xs leading-5 text-white/90 sm:text-sm">
          {description}
        </p>

        <a
          href="#contact"
          className="mt-4 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-xs font-medium text-button"
        >
          View Details
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-button">
            ↗
          </span>
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-section py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">

        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-[11px] font-medium uppercase tracking-wide text-slate-600">
            <span className="mr-2 text-primary">★</span>
            Our Projects
          </span>

          <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Recent <span className="text-primary">Roofing</span> Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600">
            Explore our portfolio of completed residential and commercial
            properties, showcasing expert craftsmanship, premium materials,
            and results built to last.
          </p>
        </div>

        <div className="space-y-5">

          <ProjectCard
            image="/images/projects/project 1.png"
            title="Complete Residential Roof Replacement"
            description="A full roof replacement completed with premium materials and expert craftsmanship."
          />

          <ProjectCard
            image="/images/projects/project 2.png"
            title="Luxury Residential Roof Renovation"
            description="Transforming an aging roof into a durable, modern roofing system."
          />

         <ProjectCard
  image="/images/projects/project 3.png"
  title="Storm Damage Roof Restoration"
  description="Restoring damaged roofs with quality materials and expert workmanship."
/>

          <ProjectCard
            image="/images/projects/project 4.png"
            title="Premium Gutter & Roofing Upgrade"
            description="Complete roofing and gutter upgrades for improved drainage and protection."
          />

        </div>
      </div>
    </section>
  );
}

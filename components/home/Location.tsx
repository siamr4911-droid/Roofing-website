
const locations = [
  "Austin, TX",
  "San Antonio, TX",
  "Orlando, FL",
  "Tampa, FL",
  "Jacksonville, FL",
  "Nashville, TN",
  "Columbus, OH",
  "Indianapolis, IN",
  "Kansas City, MO",
  "Las Vegas, NV",
];

export default function Location() {
  return (
    <section
      id="locations"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">

        {/* Heading */}

        <div className="mb-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2">

          <div>

            <span className="inline-flex items-center rounded-full border border-gray-200 px-4 py-2 text-xs font-medium text-slate-700">
              <span className="mr-2 text-primary">★</span>
              Locations
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-button sm:text-4xl">
              Roofing Services Across
              <br />
              the <span className="text-primary">United States</span>
            </h2>

          </div>

          <div className="md:pl-10">

            <p className="max-w-md text-sm leading-6 text-slate-600">
              From coast to coast, we provide expert roof installation,
              repair, and replacement services backed by quality
              workmanship and exceptional customer care.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-3 rounded-full bg-button py-1.5 pl-5 pr-1.5 text-sm font-medium text-white transition-colors hover:bg-button/90"
            >
              Get a free quote

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xl text-button">
                ↗
              </span>
            </a>

          </div>

        </div>

        {/* Location Grid */}

        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-x-6 md:grid-cols-2">

          {locations.map((city) => (
            <a
              key={city}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(city)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border-b border-dotted border-gray-300 py-4 transition-colors hover:border-primary"
            >

              <div className="flex items-center gap-3">

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-button transition-transform group-hover:scale-110">

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>

                </span>

                <span className="text-sm font-medium text-slate-600 transition-colors group-hover:text-primary">
                  {city}
                </span>

              </div>

              <span className="text-lg text-button transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}

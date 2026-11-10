
const reviews = [
  {
    name: "Michael Johnson",
    location: "Homeowner, Texas",
    initials: "MJ",
    text: "The team was professional and completed our roof replacement on time. The quality of work and communication throughout the project were excellent.",
  },
  {
    name: "Sarah Williams",
    location: "Homeowner, Florida",
    initials: "SW",
    text: "From the initial inspection to the final cleanup, everything was handled professionally. I am very happy with the finished roof.",
  },
  {
    name: "Michael Johnson",
    location: "Homeowner, Texas",
    initials: "MJ",
    text: "Their team provided great service, quality materials, and clear communication. I would recommend their roofing service to other homeowners.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8">

        {/* Heading */}

        <div className="mb-12 grid items-end gap-8 md:grid-cols-2">

          <div>

            <span className="inline-flex rounded-full border border-slate-200 px-4 py-2 text-[11px] font-medium uppercase text-slate-600">
              <span className="mr-2 text-primary">★</span>
              Testimonials
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Trusted by <span className="text-primary">Homeowners</span>
              <br />
              Across the USA
            </h2>

          </div>

          <div className="max-w-lg md:ml-auto">

            <p className="text-sm leading-7 text-slate-600">
              Thousands of homeowners rely on our experienced team
              for reliable roofing solutions, honest service, and
              superior workmanship that delivers long-lasting
              protection and peace of mind.
            </p>

          </div>

        </div>

        {/* Review Cards */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {reviews.map((review, index) => (
            <article
              key={`${review.initials}-${index}`}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-lg"
            >

              <div className="flex gap-1 text-lg text-primary">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>

              <p className="mt-5 min-h-[110px] text-sm leading-6 text-slate-600">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {review.initials}
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-bold text-slate-900">
                    {review.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {review.location}
                  </p>
                </div>

                <span className="text-2xl font-bold text-blue-500">
                  G
                </span>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

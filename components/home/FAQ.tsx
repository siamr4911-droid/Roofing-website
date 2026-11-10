
"use client";

import Image from "next/image";
import { useState } from "react";

const questions = [
  {
    question: "How do I know if my roof needs to be replaced?",
    answer:
      "Signs such as leaks, missing shingles, sagging areas, or an aging roof may indicate it's time for a replacement. Our free inspection will help determine the best solution.",
  },
  {
    question: "How long does a roof replacement take?",
    answer:
      "Most residential roof replacements take 1 to 3 days, depending on the roof size, materials, and weather conditions.",
  },
  {
    question: "Do you offer free roof inspections?",
    answer:
      "Yes. We offer free roof inspections to identify damage and recommend the best roofing solution for your home.",
  },
  {
    question: "What roofing materials do you install?",
    answer:
      "We install asphalt shingles, metal roofing, and other quality roofing materials based on your needs.",
  },
  {
    question: "Are your roofing services covered by a warranty?",
    answer:
      "Yes. We provide workmanship and material warranty options for added peace of mind.",
  },
  {
    question: "Do you provide emergency roof repair services?",
    answer:
      "Yes. Contact our team for emergency roofing assistance and urgent repair services.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#f8f8f8] py-10 sm:py-12">

      <div className="mx-auto max-w-[1140px] px-5">

        {/* Section Heading */}
        <div className="mb-8 text-center">

          <span className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-600">
            <span className="mr-2 text-primary">★</span>
            FAQ
          </span>

          <h2 className="text-2xl font-semibold leading-tight text-button md:text-[30px]">
            Frequently Asked Questions
          </h2>

        </div>

        {/* Main FAQ Layout */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,0.66fr)_minmax(0,1fr)]">

          {/* Left Content */}
          <div className="flex flex-col">

            {/* FAQ Image */}
            <div className="relative mb-7 aspect-[5/3] w-full max-w-[440px] overflow-hidden rounded-xl">

              <Image
                src="/images/faq/faq.png"
                alt="Roofing consultation with homeowner"
                fill
                sizes="(max-width: 768px) 100vw, 440px"
                className="object-cover"
              />

            </div>

            <h3 className="max-w-md text-2xl font-semibold leading-tight text-button md:text-[30px]">
              Do You Have
              <br />
              Any Questions?
            </h3>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
              Have questions about your roofing project?
              Our experienced team is here to help you
              find the right solution.
            </p>

            <a
              href="#contact"
              className="mt-7 flex w-fit items-center gap-5 rounded-full bg-button py-2 pl-5 pr-2 text-sm text-white transition-colors hover:bg-button/90"
            >
              Contact Us

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-lg text-button">
                ↗
              </span>
            </a>

          </div>

          {/* Right FAQ Accordion */}
          <div className="space-y-3">

            {questions.map((item, index) => (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
              >

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(
                      openIndex === index ? null : index
                    )
                  }
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >

                  <span className="text-sm font-medium text-button">
                    {item.question}
                  </span>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-lg text-button">
                    {openIndex === index ? "−" : "+"}
                  </span>

                </button>

                {openIndex === index && (
                  <div className="px-5 pb-4">

                    <p className="text-xs leading-5 text-slate-500 sm:text-sm">
                      {item.answer}
                    </p>

                  </div>
                )}

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

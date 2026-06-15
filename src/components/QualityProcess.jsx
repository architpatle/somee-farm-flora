import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "Raw Material Selection",
    description:
      "Carefully sourced farm-fresh produce selected for quality, freshness and nutritional value.",
  },
  {
    number: "02",
    title: "Cleaning & Preparation",
    description:
      "Ingredients are cleaned and prepared under hygienic conditions before processing.",
  },
  {
    number: "03",
    title: "Freeze-Drying",
    description:
      "Advanced vacuum freeze-drying technology preserves natural colour, flavour and nutrients.",
  },
  {
    number: "04",
    title: "Quality Inspection",
    description:
      "Every batch undergoes detailed quality checks to ensure consistency and safety.",
  },
  {
    number: "05",
    title: "Packaging & Storage",
    description:
      "Products are securely packed and stored to maintain freshness and shelf stability.",
  },
  {
    number: "06",
    title: "Dispatch & Delivery",
    description:
      "Orders are prepared and dispatched with care for domestic and global distribution.",
  },
];

const QualityProcess = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".process-header > *", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.fromTo(
  ".process-card",
  {
    y: 60,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.12,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 70%",
    },
  }
);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-[#f8f7f2]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}

        <div className="process-header text-center max-w-3xl mx-auto">

          <span
            className="
              text-sm
              uppercase
              tracking-[4px]
              font-semibold
              text-[var(--accent)]
            "
          >
            Our Quality Process
          </span>

          <h2
            className="
              mt-5
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
            "
          >
            Excellence At Every Step
          </h2>

          <p
            className="
              mt-8
              text-lg
              text-gray-600
              leading-relaxed
            "
          >
            Every ingredient follows a carefully
            monitored journey—from sourcing to
            final delivery—to ensure consistent
            quality, safety and performance.
          </p>

        </div>

        {/* Process Grid */}

        <div
          className="
            process-grid
            mt-20

            grid
            md:grid-cols-2
            lg:grid-cols-3

            gap-8
          "
        >

          {processSteps.map((step) => (
            <div
              key={step.number}
              className="
                process-card

                bg-white
                rounded-[32px]

                border
                border-[#ece4d8]

                p-8

                transition-all
                duration-300

                hover:-translate-y-3
                hover:shadow-xl
              "
            >

              {/* Number */}

              <div
                className="
                  h-16
                  w-16

                  rounded-full

                  bg-[var(--accent)]

                  text-white

                  flex
                  items-center
                  justify-center

                  text-xl
                  font-bold
                "
              >
                {step.number}
              </div>

              {/* Title */}

              <h3
                className="
                  mt-6
                  text-2xl
                  font-bold
                  leading-snug
                "
              >
                {step.title}
              </h3>

              {/* Description */}

              <p
                className="
                  mt-4
                  text-gray-600
                  leading-relaxed
                "
              >
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default QualityProcess;
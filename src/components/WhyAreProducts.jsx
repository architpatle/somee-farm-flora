import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    number: "01",
    title: "100% Natural",
    description:
      "No artificial colours, flavours or preservatives.",
  },
  {
    number: "02",
    title: "Export Quality",
    description:
      "Produced under strict quality controls for global markets.",
  },
  {
    number: "03",
    title: "Long Shelf Life",
    description:
      "Maintains freshness and functionality for extended periods.",
  },
  {
    number: "04",
    title: "Nutrient Retention",
    description:
      "Preserves essential nutrients, flavour and natural colour.",
  },
];

const WhyOurProducts = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".why-products-header > *", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      }).from(
        ".feature-card",
        {
          y: 60,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        py-32
        bg-[#184f3c]
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* HEADER */}

        <div
          className="
            why-products-header
            grid
            lg:grid-cols-2
            gap-12
            items-start
          "
        >
          <div>

            <span
              className="
                text-sm
                uppercase
                tracking-[4px]
                font-semibold
                text-[var(--accent-light)]
              "
            >
              Why Our Products
            </span>

            <h2
              className="
                mt-5
                text-white
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
              "
            >
              Ingredients Crafted
              <br />
              For Quality & Purity
            </h2>

          </div>

          <p
            className="
              text-lg
              text-white/75
              leading-relaxed
              lg:pt-8
            "
          >
            Our freeze-dried and powdered ingredients
            are processed using advanced techniques
            to preserve natural flavour, colour and
            nutritional value while meeting global
            quality standards.
          </p>

        </div>

        {/* CARDS */}

        <div
          className="
            mt-20

            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4

            gap-6
          "
        >
          {features.map((feature) => (
            <div
              key={feature.number}
              className="
                feature-card

                relative

                p-8

                rounded-[28px]

                bg-white/10
                backdrop-blur-sm

                border
                border-white/10

                min-h-[260px]
              "
            >
              <div
                className="
                  absolute
                  top-0
                  right-0

                  w-20
                  h-20

                  rounded-bl-[32px]
                  rounded-tr-[28px]

                  bg-[var(--accent)]

                  flex
                  items-center
                  justify-center

                  text-white
                  text-2xl
                  font-bold
                "
              >
                {feature.number}
              </div>

              <h3
                className="
                  text-white
                  text-3xl
                  font-semibold
                  leading-tight
                  max-w-[180px]
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  mt-6
                  text-white/75
                  leading-relaxed
                "
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyOurProducts;
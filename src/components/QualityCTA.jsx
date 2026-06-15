import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QualityCTA = () => {
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

      tl.from(".cta-bg-word", {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .from(
          ".cta-left > *",
          {
            y: 40,
            opacity: 0,
            stagger: 0.12,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.8"
        )
        .from(
          ".cta-button-wrapper",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        py-32
        bg-[#f8f7f2]
        overflow-hidden
      "
    >
      {/* Background Word */}

      <div
        className="
          absolute
          inset-0

          flex
          items-center
          justify-center

          pointer-events-none
          select-none
        "
      >
        <span
          className="
            cta-bg-word

            text-[80px]
            md:text-[140px]
            lg:text-[220px]

            font-bold

            text-black/[0.03]

            leading-none
          "
        >
          TRUST
        </span>
      </div>

      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          px-5
          lg:px-8

          pb-[480px]
          lg:pb-[280px]
        "
      >
        <div
          className="
            pt-16

            grid
            lg:grid-cols-[1.4fr_0.6fr]

            gap-12
            items-end
          "
        >
          {/* LEFT */}

          <div className="cta-left">

            <span
              className="
                text-sm
                uppercase
                tracking-[4px]
                font-semibold
                text-[var(--accent)]
              "
            >
              Quality Assurance
            </span>

            <h2
              className="
                mt-5

                text-4xl
                md:text-5xl
                lg:text-7xl

                font-bold
                leading-tight
              "
            >
              Looking For Quality 
              <br />
              You Can Trust?
            </h2>

            <p
              className="
                mt-8

                max-w-2xl

                text-lg
                text-gray-600
                leading-relaxed
              "
            >
              Our commitment to quality,
              consistency and food safety
              ensures every ingredient meets
              the expectations of manufacturers,
              exporters and global buyers.
            </p>

          </div>

          {/* RIGHT */}

          <div className="lg:flex lg:justify-end">

            <div className="cta-button-wrapper">
              <button
                className="
                  group

                  inline-flex
                  items-center
                  gap-3

                  px-8
                  py-4

                  rounded-full

                  bg-[var(--accent)]
                  text-white

                  font-semibold

                  transition-all
                  duration-300

                  hover:scale-105
                "
              >
                Request A Quote

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityCTA;
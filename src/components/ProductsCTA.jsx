import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductsCTA = () => {
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

      tl.from(".cta-content > *", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      });
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
            text-[80px]
            md:text-[140px]
            lg:text-[220px]

            font-bold

            text-black/[0.03]

            leading-none
          "
        >
          PARTNER
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-5 pb-[480px] lg:pb-[280px] lg:px-8 relative z-10">

        <div
          className="
            cta-content

            

            pt-16

            grid
            lg:grid-cols-[1.4fr_0.6fr]
            gap-12
            items-end
          "
        >
          {/* LEFT */}

          <div>

            <span
              className="
                text-sm
                uppercase
                tracking-[4px]
                font-semibold
                text-[var(--accent)]
              "
            >
              Let's Connect
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
              Looking For A Reliable
              <br />
              Ingredient Partner?
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
              From premium fruit and vegetable
              powders to customised ingredient
              solutions, we help businesses source
              products that meet their quality,
              consistency and supply expectations.
            </p>

          </div>

          {/* RIGHT */}

          <div className="lg:flex lg:justify-end">

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
    </section>
  );
};

export default ProductsCTA;
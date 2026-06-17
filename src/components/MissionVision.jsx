import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionVision = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".mv-header > *", {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".mv-item", {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-[#f8f7f2]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}

        <div className="mv-header text-center max-w-3xl mx-auto">

          <span
            className="
              text-sm
              uppercase
              tracking-[4px]
              font-semibold
              text-[var(--accent)]
            "
          >
            What Drives Us
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
            Our Mission & Vision
          </h2>

          <p
            className="
              mt-8
              text-lg
              text-gray-600
              leading-relaxed
            "
          >
            The principles that guide every ingredient,
            every partnership, and every product we deliver.
          </p>

        </div>

        {/* Mission & Vision */}

        <div
          className="
            mt-20
            grid
            lg:grid-cols-2
            gap-8
          "
        >

          {/* Mission */}

          <div
            className="
              mv-item
              bg-white
              rounded-[32px]
              p-10
              lg:p-12
              shadow-sm
              border
              border-gray-100
            "
          >
            <span
              className="
                text-sm
                uppercase
                tracking-[4px]
                font-semibold
                text-[var(--accent)]
              "
            >
              Our Mission
            </span>

            <h3
              className="
                mt-6
                text-3xl
                lg:text-4xl
                font-bold
                leading-tight
              "
            >
              Delivering Natural
              Ingredient Excellence
            </h3>

            <div
              className="
                mt-8
                w-16
                h-[3px]
                bg-[var(--accent)]
              "
            />

            <p
              className="
                mt-8
                text-lg
                text-gray-600
                leading-relaxed
              "
            >
              To provide premium-quality dehydrated
              vegetable powders that help food
              manufacturers and consumers enjoy
              natural ingredients with maximum
              nutrition, consistency, and convenience.
            </p>
          </div>

          {/* Vision */}

          <div
            className="
              mv-item
              bg-[var(--accent)]
              rounded-[32px]
              p-10
              lg:p-12
              text-white
              relative
              overflow-hidden
            "
          >
            <div
              className="
                absolute
                -top-20
                -right-20
                w-56
                h-56
                rounded-full
                border
                border-white/10
              "
            />

            <span
              className="
                text-sm
                uppercase
                tracking-[4px]
                font-semibold
                text-white/70
              "
            >
              Our Vision
            </span>

            <h3
              className="
                mt-6
                text-3xl
                lg:text-4xl
                font-bold
                leading-tight
              "
            >
              Building A Global
              Ingredient Brand
            </h3>

            <div
              className="
                mt-8
                w-16
                h-[3px]
                bg-white/50
              "
            />

            <p
              className="
                mt-8
                text-lg
                text-white/80
                leading-relaxed
              "
            >
              To become a globally recognised brand
              for innovative and sustainable dehydrated
              food products while supporting healthier
              food solutions and empowering farming
              communities worldwide.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;
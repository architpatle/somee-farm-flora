import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Snowflake,
  FlaskConical,
  PackageCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  {
    icon: Snowflake,
    title: "Colour & Aroma Retained",
    description:
      "Low-temperature freeze-drying preserves the natural colour, aroma, and flavour of fresh ingredients while maintaining superior product quality.",
  },
  {
    icon: FlaskConical,
    title: "Maximum Nutrition",
    description:
      "Essential vitamins, minerals, and antioxidants remain largely intact, providing higher nutritional value than conventional drying methods.",
  },
  {
    icon: PackageCheck,
    title: "Extended Shelf Life",
    description:
      "Reduced moisture content ensures long-lasting freshness and stability without compromising quality or requiring preservatives.",
  },
];

const TechnologySection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-header > *", {
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

      gsap.fromTo(
  ".tech-card",
  {
    y: 80,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 75%",
    },
  }
);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}

        <div className="tech-header text-center max-w-4xl mx-auto">

          <span
            className="
              text-sm
              uppercase
              tracking-[4px]
              font-semibold
              text-[var(--accent)]
            "
          >
            Our Process
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
            Advanced Freeze-Drying
            Technology
          </h2>

          <p
            className="
              mt-8
              text-lg
              text-gray-600
              leading-relaxed
            "
          >
            We use Vacuum Freeze-Drying Technology —
            the gold standard in food preservation —
            to lock in nutrition, flavour, colour,
            and aroma while significantly extending
            shelf life.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            mt-20
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
          "
        >
          {technologies.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  tech-card
                  bg-[#f8f7f2]
                  rounded-[32px]
                  p-8
                  border
                  border-gray-100
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >
                <div
                  className="
                    h-16
                    w-16
                    rounded-2xl
                    bg-white
                    shadow-sm
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={30}
                    className="text-[var(--accent)]"
                  />
                </div>

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-semibold
                    leading-snug
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-gray-600
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechnologySection;
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Factory,
  ChefHat,
  UtensilsCrossed,
  Pill,
  HeartPulse,
  Globe,
  CookingPot,
  Package,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    icon: Factory,
    title: "Food Processing",
    description:
      "Supplying premium freeze-dried ingredients for large-scale food manufacturing operations.",
  },
  {
    icon: CookingPot,
    title: "Spice Manufacturing",
    description:
      "Natural vegetable powders for seasoning blends, spice mixes, and flavour formulations.",
  },
  {
    icon: Package,
    title: "Ready-to-Eat Foods",
    description:
      "Consistent ingredients designed for instant foods and convenience products.",
  },
  {
    icon: ChefHat,
    title: "Restaurants & Hotels",
    description:
      "Reliable ingredients delivering authentic flavour and operational efficiency.",
  },
  {
    icon: Pill,
    title: "Nutraceuticals",
    description:
      "Nutrient-rich ingredients suitable for health-focused formulations.",
  },
  {
    icon: HeartPulse,
    title: "Wellness Brands",
    description:
      "Supporting modern wellness products with clean-label ingredient solutions.",
  },
  {
    icon: Globe,
    title: "Global Export Markets",
    description:
      "Trusted by international buyers seeking premium-quality dehydrated ingredients.",
  },
  {
    icon: UtensilsCrossed,
    title: "Seasoning Industry",
    description:
      "High-quality powders and flakes for seasoning manufacturers worldwide.",
  },
];

const IndustriesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".industry-header > *", {
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

      const cards = gsap.utils.toArray(".industry-card");

      gsap.fromTo(
        cards,
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-[#f8f7f2] pb-[480px] lg:pb-[280px]"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}

        <div className="industry-header text-center max-w-4xl mx-auto">

          <span
            className="
              text-sm
              uppercase
              tracking-[4px]
              font-semibold
              text-[var(--accent)]
            "
          >
            Who We Serve
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
            Industries We Supply
          </h2>

          <p
            className="
              mt-8
              text-lg
              text-gray-600
              leading-relaxed
            "
          >
            Trusted by manufacturers, food brands,
            hospitality businesses, and global buyers
            seeking premium freeze-dried ingredients.
          </p>

        </div>

        {/* Cards */}

        <div
          className="
            mt-20
            grid
            md:grid-cols-2
            lg:grid-cols-4
            gap-8
          "
        >
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <div
                key={industry.title}
                className="
                  industry-card
                  bg-white
                  rounded-[32px]
                  p-8
                  border
                  border-gray-100
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    h-16
                    w-16
                    rounded-2xl
                    bg-[#f8f7f2]
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
                    text-xl
                    lg:text-2xl
                    font-semibold
                    leading-snug
                  "
                >
                  {industry.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-gray-600
                    leading-relaxed
                  "
                >
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default IndustriesSection;
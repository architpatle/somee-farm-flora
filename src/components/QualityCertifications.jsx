import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  ShieldCheck,
  BadgeCheck,
  FileCheck,
  Award,
  ClipboardCheck,
  Factory,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    title: "ISO Quality Standards",
    code: "ISO",
    description:
      "Maintaining consistent quality throughout sourcing, processing and packaging.",
  },
  {
    title: "Food Safety Compliance",
    code: "FSC",
    description:
      "Following stringent food safety practices across all production stages.",
  },
  {
    title: "Export Quality Assurance",
    code: "EQA",
    description:
      "Products prepared to meet domestic and international market expectations.",
  },
  {
    title: "Industry Best Practices",
    code: "IBP",
    description:
      "Adhering to proven manufacturing and quality management procedures.",
  },
  {
    title: "Quality Management",
    code: "QMS",
    description:
      "Multi-level inspections and process monitoring for consistent results.",
  },
  {
    title: "Hygienic Manufacturing",
    code: "HMP",
    description:
      "Clean and controlled production environments designed for food safety.",
  },
];

const QualityCertifications = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".cert-header > *", {
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
  ".cert-card",
  {
    opacity: 0,
    y: 40,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top 75%",
      once: true,
    },
  }
);

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Header */}

        <div className="cert-header text-center max-w-3xl mx-auto">

          <span
            className="
              text-sm
              uppercase
              tracking-[4px]
              font-semibold
              text-[var(--accent)]
            "
          >
            Certifications & Standards
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
            Committed To Quality
            <br />
            And Compliance
          </h2>

          <p
            className="
              mt-8
              text-lg
              text-gray-600
              leading-relaxed
            "
          >
            Our commitment to quality extends
            beyond manufacturing. We follow
            rigorous standards and best
            practices to ensure reliability,
            consistency and customer confidence.
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

         {certifications.map((item, index) => (
  <div
    key={index}
    className="
      cert-card
      group

      bg-white

      rounded-[32px]

      border
      border-[#ece4d8]

      overflow-hidden

      transition-all
      duration-500
      hover:-translate-y-3
      hover:shadow-xl
    "
  >

    {/* Certificate Mockup */}

    <div
      className="
        relative

        h-64

        bg-gradient-to-br
        from-[#faf8f4]
        to-[#f2eee6]

        border-b
        border-[#ece4d8]

        flex
        flex-col
        justify-center
        items-center

        overflow-hidden
      "
    >

      {/* Watermark */}

      <div
        className="
          absolute
          inset-0

          flex
          items-center
          justify-center

          text-[140px]
          font-bold

          text-[var(--accent)]
          opacity-[0.04]

          pointer-events-none
        "
      >
        ✓
      </div>

      {/* Certificate Badge */}

      <div
        className="
          h-20
          w-20

          rounded-full

          bg-[var(--accent)]

          text-white

          flex
          items-center
          justify-center

          text-2xl
          font-bold

          shadow-lg

          transition-all
  duration-500

  group-hover:scale-110
        "
      >
        {item.code}
      </div>

      <span
        className="
          mt-6

          text-xs
          uppercase

          tracking-[4px]

          text-[var(--accent)]

          font-semibold
        "
      >
        Certified Standard
      </span>

      <div
        className="
          mt-4

          h-[2px]
          w-20

          bg-[var(--accent)]
        "
      />

      <h4
        className="
          mt-5

          px-6

          text-center

          text-lg
          font-bold
        "
      >
        {item.title}
      </h4>

    </div>

    {/* Content */}

    <div className="p-8">

      <p
        className="
          text-gray-600
          leading-relaxed
        "
      >
        {item.description}
      </p>

    </div>

  </div>
))}

        </div>

      </div>
    </section>
  );
};

export default QualityCertifications;
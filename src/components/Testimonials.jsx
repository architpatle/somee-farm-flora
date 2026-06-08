import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import mainImage from "../assets/images/orange.png";
import smallImage from "../assets/images/lemon.png";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    review:
      "Somee Farm Flora consistently delivers premium freeze-dried ingredients with excellent quality and reliability. The product consistency and export-grade standards make them a trusted partner for our manufacturing requirements.",
    name: "Procurement Manager",
    company: "Food Manufacturing Company",
  },

  {
    review:
      "The quality of ingredients and commitment to delivery timelines have exceeded our expectations. Their freeze-dried products integrate seamlessly into our production process.",
    name: "Operations Head",
    company: "Global Food Brand",
  },

  {
    review:
      "A dependable supplier with outstanding product consistency, communication, and quality control. We look forward to continuing our partnership.",
    name: "Supply Chain Director",
    company: "Nutraceutical Company",
  },
];

const processCards = [
  {
    number: "01",
    title: "Natural\nIngredients",
  },
  {
    number: "02",
    title: "Freeze\nDrying",
  },
  {
    number: "03",
    title: "Quality\nTesting",
  },
  {
    number: "04",
    title: "Global\nSupply",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const sectionRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-content > *", {
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

      gsap.from(".testimonial-image", {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".process-card", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-[#f8f7f2] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div className="testimonial-content">

            <span
              className="
                text-sm
                uppercase
                tracking-[4px]
                font-semibold
                text-[var(--accent)]
              "
            >
              Client Testimonials
            </span>

            <h2
              className="
                mt-4
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
              "
            >
              Trusted By Food
              Manufacturers Across
              Global Markets
            </h2>

            {/* Testimonial Card */}

            <div
              key={current}
              className="
                mt-12
                bg-white
                rounded-[32px]
                p-8
                shadow-xl
              "
            >
              <div
                className="
                  text-7xl
                  leading-none
                  text-[var(--accent)]
                  opacity-30
                "
              >
                "
              </div>

              <p
                className="
                  text-lg
                  text-gray-600
                  leading-relaxed
                "
              >
                {testimonials[current].review}
              </p>

              <div className="mt-8">

                <h4 className="font-semibold text-xl">
                  {testimonials[current].name}
                </h4>

                <p className="text-gray-500">
                  {testimonials[current].company}
                </p>

              </div>
            </div>

            {/* Controls */}

            <div className="flex items-center gap-6 mt-10">

              <button
                onClick={prevSlide}
                className="
                  h-12
                  w-12
                  rounded-full
                  bg-white
                  shadow-md

                  flex
                  items-center
                  justify-center

                  hover:bg-[var(--accent)]
                  hover:text-white

                  transition-all
                "
              >
                <ChevronLeft size={18} />
              </button>

              <div
                className="
                  h-[2px]
                  w-24
                  bg-[var(--accent)]
                "
              />

              <button
                onClick={nextSlide}
                className="
                  h-12
                  w-12
                  rounded-full
                  bg-white
                  shadow-md

                  flex
                  items-center
                  justify-center

                  hover:bg-[var(--accent)]
                  hover:text-white

                  transition-all
                "
              >
                <ChevronRight size={18} />
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="testimonial-image relative flex justify-center">

            <div
              className="
                h-[550px]
                w-[420px]
                overflow-hidden
                rounded-t-[120px]
                rounded-b-[120px]
                shadow-2xl
              "
            >
              <img
                src={mainImage}
                alt=""
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* Floating Image */}

            <div
              className="
                absolute
                left-0
                top-1/2
                -translate-y-1/2

                h-[220px]
                w-[220px]

                rounded-[40px]
                overflow-hidden

                border-[8px]
                border-white

                shadow-2xl
              "
            >
              <img
                src={smallImage}
                alt=""
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* Stats */}

            <div
              className="
                absolute
                right-0
                bottom-20

                bg-[var(--accent)]

                px-8
                py-5

                rounded-3xl

                shadow-xl
              "
            >
              <h4
                className="
                  text-3xl
                  font-bold
                  text-white
                "
              >
                150+
              </h4>

              <p
                className="
                  text-white/80
                  text-sm
                "
              >
                Products Available
              </p>
            </div>

          </div>

        </div>

        {/* PROCESS SECTION */}

        <div
          className="
            process-section
            mt-28

            grid
            md:grid-cols-2
            lg:grid-cols-4

            gap-8
          "
        >
          {processCards.map((item) => (
            <div
              key={item.number}
              className="
                process-card

                relative

                bg-[#184f3c]

                rounded-[24px]

                p-8

                min-h-[170px]

                overflow-hidden

                text-white

                transition-all
                duration-300

                hover:-translate-y-2
              "
            >
              <h3
                className="
                  text-4xl
                  leading-tight
                  font-medium
                  whitespace-pre-line
                "
              >
                {item.title}
              </h3>

              <div
                className="
                  absolute
                  top-0
                  right-0

                  h-24
                  w-24

                  bg-[#f4d11d]

                  rounded-bl-[40px]

                  flex
                  items-center
                  justify-center

                  text-[#184f3c]

                  text-3xl
                  font-semibold
                "
              >
                {item.number}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
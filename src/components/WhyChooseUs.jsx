import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import mainImage from "../assets/images/why-choose-main.jpg";

import onion from "../assets/images/red-onion.png";
import beetroot from "../assets/images/beetroot.png";
import moringa from "../assets/images/moringa.png";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left Content

      gsap.from(".why-content > *", {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Dashed Ring

      gsap.from(".dashed-ring", {
        scale: 0.6,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Main Circle

      gsap.from(".main-circle", {
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Floating Bubbles Reveal

      gsap.from(".floating-bubble", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Continuous Floating Motion

      gsap.utils
        .toArray(".floating-bubble")
        .forEach((bubble, index) => {
          gsap.to(bubble, {
            y: index % 2 === 0 ? -15 : 15,
            duration: 2.5 + index,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}

          <div className="why-content">

            <span
              className="
                text-sm
                uppercase
                tracking-[4px]
                font-semibold
                text-[var(--accent)]
              "
            >
              Why Choose Us
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
              Trusted Partner For Freeze-Dried
              Ingredients
            </h2>

            <p
              className="
                mt-8
                text-lg
                text-gray-600
                leading-relaxed
              "
            >
              We combine advanced freeze-drying
              technology with strict quality
              standards to deliver ingredients
              that retain natural flavour,
              colour and nutritional value.
            </p>

            {/* Progress Bars */}

            <div className="mt-12 space-y-10">

              <div>
                <div className="flex justify-between mb-4">
                  <span className="text-2xl font-medium">
                    Product Quality
                  </span>

                  <span className="text-2xl font-medium">
                    98%
                  </span>
                </div>

                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="
                      h-full
                      w-[98%]
                      rounded-full
                      bg-[var(--accent)]
                    "
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-4">
                  <span className="text-2xl font-medium">
                    Client Satisfaction
                  </span>

                  <span className="text-2xl font-medium">
                    95%
                  </span>
                </div>

                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="
                      h-full
                      w-[95%]
                      rounded-full
                      bg-[var(--accent)]
                    "
                  />
                </div>
              </div>

            </div>

            <button
              className="
                mt-12
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
              Explore Products
            </button>

          </div>

          {/* RIGHT VISUAL */}

          <div className="relative flex justify-center items-center min-h-[760px]">

            {/* Dotted Ring */}

            <div
              className="
                dashed-ring
                absolute

                h-[700px]
                w-[700px]

                rounded-full

                border-[3px]
                border-dashed

                border-[var(--accent-light)]

                opacity-40
              "
            />

            {/* Main Circle */}

            <div
              className="
                main-circle
                relative

                h-[500px]
                w-[500px]

                rounded-full
                overflow-hidden

                bg-[#f7f4ee]

                shadow-2xl
                z-10
              "
            >
              <img
                src={mainImage}
                alt="Why Choose Us"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* TOP BUBBLE */}

            <div
              className="
                floating-bubble
                absolute

                top-[70px]
                left-[80px]

                h-40
                w-40

                rounded-full

                bg-white

                border-[3px]
                border-dashed
                border-[var(--accent)]

                shadow-xl

                flex
                items-center
                justify-center

                z-20
              "
            >
              <img
                src={onion}
                alt="Onion Powder"
                className="
                  h-24
                  object-contain
                "
              />
            </div>

            {/* MIDDLE BUBBLE */}

            <div
              className="
                floating-bubble
                absolute

                top-1/2
                left-[-50px]

                -translate-y-1/2

                h-44
                w-44

                rounded-full

                bg-white

                border-[3px]
                border-dashed
                border-[var(--accent)]

                shadow-xl

                flex
                items-center
                justify-center

                z-20
              "
            >
              <img
                src={beetroot}
                alt="Beetroot Powder"
                className="
                  h-28
                  object-contain
                "
              />
            </div>

            {/* BOTTOM BUBBLE */}

            <div
              className="
                floating-bubble
                absolute

                bottom-[70px]
                left-[100px]

                h-40
                w-40

                rounded-full

                bg-white

                border-[3px]
                border-dashed
                border-[var(--accent)]

                shadow-xl

                flex
                items-center
                justify-center

                z-20
              "
            >
              <img
                src={moringa}
                alt="Moringa Powder"
                className="
                  h-24
                  object-contain
                "
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
import { useEffect, useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import mainImage from "../assets/images/tomato.png";
import smallImage from "../assets/images/amla.png";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Main Image

      gsap.from(".about-main-image", {
        x: -100,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Floating Image

      gsap.from(".about-small-image", {
        x: 100,
        y: 50,
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Badge

      gsap.from(".about-badge", {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Content

      gsap.from(".about-content > *", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
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
      className="py-32 bg-[#faf8f4] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div className="relative">

            {/* Main Image */}

            <div
              className="
                about-main-image
                relative
                overflow-hidden
                rounded-[70px]
                shadow-2xl
              "
            >
              <img
                src={mainImage}
                alt=""
                className="
                  w-full
                  h-[650px]
                  object-cover
                "
              />
            </div>

            {/* Small Image */}

            <div
              className="
                about-small-image
                absolute
                bottom-[-40px]
                right-[-40px]
                bg-white
                w-[280px]
                h-[280px]

                rounded-[50px]

                overflow-hidden

                border-[10px]
                border-[#faf8f4]

                shadow-2xl
              "
            >
              <img
                src={smallImage}
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                "
              />
            </div>

            {/* Badge */}

            <div
              className="
                about-badge
                absolute
                top-10
                right-[-30px]

                h-32
                w-32

                rounded-full

                bg-white

                shadow-xl

                flex
                flex-col
                items-center
                justify-center
              "
            >
              <span
                className="
                  text-3xl
                  font-extrabold
                  text-[var(--accent)]
                "
              >
                15+
              </span>

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[2px]
                  text-center
                  text-gray-500
                "
              >
                Years
                <br />
                Experience
              </span>
            </div>

          </div>

          {/* RIGHT */}

          <div className="about-content">

            <span
              className="
                text-sm
                uppercase
                tracking-[4px]
                font-semibold
                text-[var(--accent)]
              "
            >
              About Somee Farm Flora
            </span>

            <h2
              className="
                heading-font
                mt-5
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                leading-tight
              "
            >
              Premium Freeze-Dried
              Ingredients For
              Modern Food Manufacturing
            </h2>

            <p
              className="
                mt-8
                text-lg
                text-gray-600
                leading-relaxed
              "
            >
              At Somee Farm Flora, we specialize
              in manufacturing premium freeze-dried
              vegetable, fruit and botanical powders
              that preserve natural flavour, colour
              and nutrition.
            </p>

            <p
              className="
                mt-5
                text-lg
                text-gray-600
                leading-relaxed
              "
            >
              Our advanced freeze-drying technology
              helps us deliver high-quality ingredients
              trusted by food manufacturers,
              nutraceutical brands and export markets.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-5">

              {[
                "100% Natural Ingredients",
                "Vacuum Freeze-Dried Technology",
                "Export Quality Standards",
                "Bulk & Private Label Supply",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div
                    className="
                      h-8
                      w-8
                      rounded-full
                      bg-green-100
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <Check
                      size={18}
                      className="text-green-600"
                    />
                  </div>

                  <span className="text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}

            <button
              className="
                mt-12

                inline-flex
                items-center
                gap-3

                px-8
                py-4

                rounded-full

                border
                border-[var(--accent)]

                text-[var(--accent)]
                font-semibold

                hover:bg-[var(--accent)]
                hover:text-white

                transition-all
                duration-300
              "
            >
              Learn More

              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
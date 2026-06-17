import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Leaf,
  Factory,
  Globe2,
  ArrowRight,
  Check,
} from "lucide-react";

import aboutMainImage from "../assets/images/why-choose-main.jpg";

gsap.registerPlugin(ScrollTrigger);

const AboutStory = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-content > *", {
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
      className="py-32 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-0 lg:gap-20 items-center">

          {/* VISUAL */}

          <div
            className="
              relative
              flex
              justify-center
              items-center
              min-h-[420px]
              md:min-h-[550px]
              lg:min-h-[760px]
            "
          >

            {/* DASHED RING */}

            <div
              className="
                dashed-ring
                absolute
                h-[320px]
                w-[320px]
                md:h-[500px]
                md:w-[500px]
                lg:h-[700px]
                lg:w-[700px]
                rounded-full
                border-[3px]
                border-dashed
                border-[var(--accent-light)]
                opacity-40
              "
            />

            {/* MAIN IMAGE */}

            <div
              className="
                main-circle
                relative
                h-[240px]
                w-[240px]
                md:h-[360px]
                md:w-[360px]
                lg:h-[500px]
                lg:w-[500px]
                rounded-full
                overflow-hidden
                bg-[#f7f4ee]
                shadow-2xl
                z-10
              "
            >
              <img
                src={aboutMainImage}
                alt="About Somee International"
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
                hidden lg:flex
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
                items-center
                justify-center
                z-20
              "
            >
              <Leaf
                size={60}
                className="
                  text-[var(--accent)]
                  stroke-[1.75]
                "
              />
            </div>

            {/* MIDDLE BUBBLE */}

            <div
              className="
                floating-bubble
                hidden lg:flex
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
                items-center
                justify-center
                z-20
              "
            >
              <Factory
                size={70}
                className="
                  text-[var(--accent)]
                  stroke-[1.75]
                "
              />
            </div>

            {/* BOTTOM BUBBLE */}

            <div
              className="
                floating-bubble
                hidden lg:flex
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
                items-center
                justify-center
                z-20
              "
            >
              <Globe2
                size={60}
                className="
                  text-[var(--accent)]
                  stroke-[1.75]
                "
              />
            </div>

          </div>

          {/* CONTENT */}

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
              Who We Are
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
              Rooted In Nature,
              <br />
              Driven By Innovation
            </h2>

            <p
              className="
                mt-8
                text-lg
                text-gray-600
                leading-relaxed
              "
            >
              Somee International is a trusted manufacturer and
              supplier of premium-quality dehydrated vegetable
              powders. Under our flagship brand Somee Farm Flora,
              we deliver natural, nutritious, and high-quality
              food ingredients to customers across India and
              international markets.
            </p>

            {/* <p
              className="
                mt-5
                text-lg
                text-gray-600
                leading-relaxed
              "
            >
              Using advanced Vacuum Freeze Drying Technology,
              we preserve the natural colour, aroma, flavour,
              and nutritional value of fresh produce while
              ensuring exceptional consistency and shelf stability.
            </p> */}

            <p
              className="
                mt-5
                text-lg
                text-gray-600
                leading-relaxed
              "
            >
              Every ingredient is sourced from carefully selected
              farms and processed under strict quality standards,
              reflecting our commitment to purity, reliability,
              and food safety.
            </p>

            {/* HIGHLIGHTS */}

            <div className="mt-10 space-y-5">

              {[
                "Premium Freeze-Dried Technology",
                "Farm-Fresh Raw Material Sourcing",
                "Strict Quality Control Standards",
                "Domestic & Global Supply Network",
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

            <button
              className="
                mt-12
                px-8
                py-4
                rounded-full
                bg-[var(--accent)]
                text-white
                font-semibold
                flex
                items-center
                gap-2
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Discover Our Journey
              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutStory;
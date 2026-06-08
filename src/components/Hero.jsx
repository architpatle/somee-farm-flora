import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

import heroBg from "../assets/images/hero-bg-2.png";

import onionLeft from "../assets/images/red-onion.png";
import onionRight from "../assets/images/white-onion.png";

import beetLeft from "../assets/images/tomato.png";
import beetRight from "../assets/images/beetroot.png";

import moringaLeft from "../assets/images/moringa.png";
import moringaRight from "../assets/images/orange.png";

import enquiryLeft from "../assets/images/amla.png";
import enquiryRight from "../assets/images/lemon.png";

const slides = [
  {
    type: "content",

    title: "Premium Freeze-Dried Food Ingredients",

    subtitle: "Natural. Nutritious. Export Ready.",

    description:
      "Delivering nutrient-rich vegetable and fruit powders crafted for food manufacturers, nutraceutical brands and global markets.",

    leftImage: onionLeft,
    rightImage: beetRight,
  },

  {
    type: "content",

    title: "Red Onion Powder",

    subtitle: "Strong Natural Flavor",

    description:
      "Ideal for seasonings, sauces, snack manufacturing and ready-to-cook products.",

    leftImage: onionLeft,
    rightImage: onionRight,
  },

  {
    type: "content",

    title: "Beetroot Powder",

    subtitle: "Rich Color. Rich Nutrition.",

    description:
      "Premium freeze-dried beetroot powder retaining natural color, flavor and nutritional value.",

    leftImage: beetLeft,
    rightImage: beetRight,
  },

  {
    type: "form",

    title: "Let's Discuss Your Requirement",

    leftImage: enquiryLeft,
    rightImage: enquiryRight,
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section
      className="
        relative        min-h-[calc(100vh]
        overflow-hidden mt-0
      "
    >
      {/* Background */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-white/7 backdrop-blur-[1px]" />

      {/* Content */}

      <div className="relative z-10 max-w-8xl mx-auto px-5 lg:px-8">

        <div className="min-h-[calc(100vh)] grid lg:grid-cols-[1fr_1.4fr_1fr] items-center">

          {/* LEFT IMAGE */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${activeSlide}`}
              initial={{
                opacity: 0,
                x: -100,
                rotate: -6,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: -2,
              }}
              exit={{
                opacity: 0,
                x: -100,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                hidden
                lg:flex
                justify-center
                translate-y-[-70px]
              "
            >
              <img
                src={slide.leftImage}
                alt=""
                className="
                  max-w-[350px]
                  object-contain
                "
              />
            </motion.div>
          </AnimatePresence>

          {/* CENTER */}

          <AnimatePresence mode="wait">

            <motion.div
              key={activeSlide}
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -50,
              }}
              transition={{
                duration: 0.7,
              }}
              className="text-center"
            >

              {slide.type === "content" ? (
                <>
                  <span
                    className="
                      inline-block
                      px-4
                      py-2
                      rounded-full
                      border
                      border-gray-300
                      bg-white/70
                      text-xs
                      tracking-[3px]
                      uppercase
                      font-semibold
                    "
                  >
                    Vacuum Freeze-Dried Technology
                  </span>

                  <h1
                    className="
                      heading-font
                      mt-8
                      text-5xl
                      md:text-6xl
                      lg:text-7xl
                      font-extrabold
                      leading-tight
                    "
                  >
                    {slide.title}
                  </h1>

                  <p
                    className="
                      mt-4
                      text-xl
                      font-medium
                      text-[var(--accent)]
                    "
                  >
                    {slide.subtitle}
                  </p>

                  <p
                    className="
                      mt-6
                      text-lg
                      text-gray-600
                      max-w-xl
                      mx-auto
                    "
                  >
                    {slide.description}
                  </p>

                  <div className="mt-10 flex justify-center gap-4 flex-wrap">

                    <button
                      className="
                        px-7
                        py-4
                        rounded-full
                        bg-[var(--accent)]
                        text-white
                        font-semibold
                        flex
                        items-center
                        gap-2
                      "
                    >
                      Explore Products
                      <ArrowRight size={18} />
                    </button>

                    <button
                      className="
                        px-7
                        py-4
                        rounded-full
                        border
                        border-gray-300
                        bg-white
                      "
                    >
                      Get Quote
                    </button>

                  </div>
                </>
              ) : (
                <>
                  <h2
                    className="
                      heading-font
                      text-5xl
                      font-bold
                    "
                  >
                    Let's Discuss Your Requirement
                  </h2>

                  <form
                    className="
                      mt-10
                      bg-white
                      rounded-[30px]
                      p-8
                      shadow-xl
                      text-left
                    "
                  >
                    <div className="space-y-4">

                      <input
                        type="text"
                        placeholder="Your Name"
                        className="
                          w-full
                          border
                          border-gray-200
                          rounded-xl
                          px-4
                          py-4
                        "
                      />

                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="
                          w-full
                          border
                          border-gray-200
                          rounded-xl
                          px-4
                          py-4
                        "
                      />

                      <textarea
                        rows="4"
                        placeholder="Requirement"
                        className="
                          w-full
                          border
                          border-gray-200
                          rounded-xl
                          px-4
                          py-4
                        "
                      />

                      <button
                        className="
                          w-full
                          py-4
                          rounded-xl
                          bg-[var(--accent)]
                          text-white
                          font-semibold
                          flex
                          justify-center
                          items-center
                          gap-2
                        "
                      >
                        <MessageCircle size={18} />
                        Send WhatsApp Enquiry
                      </button>

                    </div>
                  </form>
                </>
              )}

            </motion.div>

          </AnimatePresence>

          {/* RIGHT IMAGE */}

          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${activeSlide}`}
              initial={{
                opacity: 0,
                x: 100,
                rotate: 6,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 2,
              }}
              exit={{
                opacity: 0,
                x: 100,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                hidden
                lg:flex
                justify-center
                translate-y-[70px]
              "
            >
              <img
                src={slide.rightImage}
                alt=""
                className="
                  max-w-[350px]
                  object-contain
                "
              />
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Pagination */}

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">

          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  activeSlide === index
                    ? "w-10 bg-[var(--accent)]"
                    : "w-2 bg-gray-300"
                }
              `}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
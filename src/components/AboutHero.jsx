import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import aboutHeroBg from "../assets/images/products-hero.png";

export default function AboutHero() {
  return (
    <section
      className="
        relative
        pt-[70px]
        lg:pt-[90px]
        min-h-[90vh]
        overflow-hidden
      "
    >
      {/* Background */}

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${aboutHeroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">
        <div className="min-h-[calc(90vh)] flex items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-3xl"
          >
            {/* Badge */}

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
              About Somee International
            </span>

            {/* Heading */}

            <h1
              className="
                heading-font
                mt-8
                text-5xl
                md:text-6xl
                lg:text-7xl
                font-extrabold
                leading-tight
                text-[#0f172a]
              "
            >
              Nature Preserved,
              <br />
              Quality Delivered
            </h1>

            {/* Subtitle */}

            <p
              className="
                mt-5
                text-xl
                font-medium
                text-[var(--accent)]
              "
            >
              Premium Freeze-Dried Ingredients For Global Industries
            </p>

            {/* Description */}

            <p
              className="
                mt-6
                text-lg
                text-gray-600
                max-w-xl
                leading-relaxed
              "
            >
              Somee International is a trusted manufacturer of
              premium freeze-dried vegetable powders, fruit powders,
              herbs, and specialty ingredients. Using advanced
              freeze-drying technology, we preserve the natural
              nutrition, colour, aroma, and flavour of farm-fresh
              produce for customers across domestic and international
              markets.
            </p>

            {/* Buttons */}

            <div
              className="
                mt-10
                flex
                gap-4
                flex-wrap
              "
            >
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
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  cursor-pointer
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
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-gray-50
                  cursor-pointer
                "
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import productsHeroBg from "../assets/images/products-hero.png";

export default function ProductsHero() {
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
          backgroundImage: `url(${productsHeroBg})`,
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
              Premium Product Collection
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
              Freeze-Dried 
              Products
               For
              Global Markets
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
              Natural. Nutritious. Export Ready.
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
              Explore our premium range of freeze-dried
              vegetable powders, fruit powders, flakes,
              herbs and specialty ingredients crafted
              for food manufacturers and international
              buyers.
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
                  hover:translate-y-[-2px]
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
                Enquire Now
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import qualityHeroBg from "../assets/images/quality-hero.png";

export default function QualityHero() {
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
                    backgroundImage: `url(${qualityHeroBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Content */}

            <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8">

                <div className="min-h-[90vh] flex items-center">

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
                            Quality Assurance
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
                            Committed to
                            <br />
                            Excellence at Every
                            <br />
                            Stage
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
                            Precision. Purity. Consistency.
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
                            From sourcing fresh produce to
                            advanced freeze-drying and final
                            packaging, every step is carefully
                            monitored to ensure exceptional
                            quality, safety, and reliability.
                        </p>

                        {/* CTA */}

                        <div className="mt-10">
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
                                Explore Our Process
                                <ArrowRight size={18} />
                            </button>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProductCard from "./ProductCard";

import {
    products,
    productCategories,
} from "../data/productsData";

gsap.registerPlugin(ScrollTrigger);

const ProductsSection = () => {
    const sectionRef = useRef(null);

    const [activeCategory, setActiveCategory] =
        useState("All");

    const filteredProducts =
        activeCategory === "All"
            ? products
            : products.filter(
                (product) =>
                    product.category === activeCategory
            );

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true,
                },
            });

            tl.from(".products-header > *", {
                y: 40,
                opacity: 0,
                stagger: 0.12,
                duration: 0.8,
                ease: "power3.out",
            })
                .from(
                    ".categories-wrapper",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.7,
                        ease: "power3.out",
                    },
                    "-=0.25"
                )
                .from(
                    ".product-card-wrapper",
                    {
                        y: 60,
                        opacity: 0,
                        stagger: 0.12,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.25"
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-32 bg-[#f8f7f2] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-5 lg:px-8">

                {/* SECTION HEADER */}

                <div className="products-header max-w-4xl mx-auto text-center">

                    <span
                        className="
              text-sm
              uppercase
              tracking-[4px]
              font-semibold
              text-[var(--accent)]
            "
                    >
                        Our Products
                    </span>

                    <h2
                        className="
              mt-5
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
              text-[#1f1f1f]
            "
                    >
                        Premium Freeze-Dried &
                        <br />
                        Powdered Ingredients
                    </h2>

                    <p
                        className="
              mt-8
              text-lg
              text-gray-600
              leading-relaxed
              max-w-3xl
              mx-auto
            "
                    >
                        Explore our extensive portfolio of
                        freeze-dried vegetables, fruits,
                        herbal ingredients and natural powders
                        crafted to preserve authentic flavour,
                        colour and nutritional value for food,
                        nutraceutical and industrial
                        applications worldwide.
                    </p>

                </div>

                {/* CATEGORY FILTERS */}

                <div
                    className="
                    categories-wrapper

                    mt-16
                    lg:mt-20

                    flex
                    flex-wrap
                    justify-center
                    gap-3
                 "
                >
                    {productCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() =>
                                setActiveCategory(category)
                            }
                            className={`
  px-6
  py-3

  rounded-full

  text-sm
  font-medium

  transition-all
  duration-300

  cursor-pointer

  ${
    activeCategory === category
      ? "bg-[var(--accent)] text-white shadow-lg"
      : "bg-white text-gray-700 hover:bg-[var(--accent)] hover:text-white"
  }
`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* PRODUCT GRID */}

                <div
                    className="
            products-grid

            mt-16

            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3

            gap-8
          "
                >
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="product-card-wrapper"
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductsSection;
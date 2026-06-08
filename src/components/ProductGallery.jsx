import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import onion from "../assets/images/red-onion.png";
import whiteOnion from "../assets/images/white-onion.png";
import beetroot from "../assets/images/beetroot.png";
import tomato from "../assets/images/tomato.png";
import moringa from "../assets/images/moringa.png";
import orange from "../assets/images/orange.png";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    title: "Red Onion Powder",
    description: "Rich flavour and aroma for seasoning blends.",
    image: onion,
    bg: "from-rose-50 to-red-100",
    className: "col-span-2 row-span-1",
  },
  {
    title: "White Onion Powder",
    description: "Premium quality ingredient for food processing.",
    image: whiteOnion,
  },
  {
    title: "Beetroot Powder",
    description: "Natural colour and nutrition enhancer.",
    image: beetroot,
  },
  {
    title: "Tomato Powder",
    description: "Ideal for soups, sauces and seasonings.",
    image: tomato,
  },
  {
    title: "Moringa Powder",
    description: "Nutrient-rich botanical ingredient.",
    image: moringa,
  },
];

const ProductsGallery = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-heading > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".gallery-heading",
          start: "top 80%",
        },
      });

      gsap.from(".product-card", {
        rotateY: 180,

        opacity: 0,

        duration: 1.2,

        stagger: {
          amount: 0.8,
          grid: "auto",
          from: "center",
        },

        ease: "power4.out",

        scrollTrigger: {
          trigger: ".gallery-grid",
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32"
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}

        <div className="gallery-heading text-center max-w-3xl mx-auto">

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
              mt-4
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
            "
          >
            Premium Freeze-Dried
            Ingredients Collection
          </h2>

        </div>

        {/* Gallery */}

        <div
          className="
            gallery-grid
            mt-20
            grid
            md:grid-cols-3
            gap-6
            auto-rows-[280px]
          "
          style={{
            perspective: "1500px",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className={`
                product-card
                relative
                overflow-hidden
                rounded-[40px]
                group
                cursor-pointer
                bg-[var(--accent-light-40)]

                border
                border-white/60

                ${product.className || ""}
              `}
              style={{
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              {/* Image */}

              <img
                src={product.image}
                alt={product.title}
                className="
                  h-full
                  w-full
                  object-cover

                  transition-all
                  duration-700

                  group-hover:scale-110
                "
              />

              {/* Overlay */}

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/80
                  via-black/30
                  to-transparent

                  opacity-0
                  group-hover:opacity-100

                  transition-all
                  duration-500
                "
              />

              {/* Content */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0

                  p-8

                  translate-y-8
                  opacity-0

                  group-hover:translate-y-0
                  group-hover:opacity-100

                  transition-all
                  duration-500
                "
              >
                <h3
                  className="
                    text-white
                    text-2xl
                    font-bold
                  "
                >
                  {product.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-white/80
                  "
                >
                  {product.description}
                </p>

                <div
                  className="
                    mt-5

                    inline-flex
                    items-center
                    gap-2

                    text-white
                    font-medium
                  "
                >
                  View Product

                  <ArrowUpRight size={18} />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsGallery;
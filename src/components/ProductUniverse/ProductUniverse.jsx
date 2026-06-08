import onion from "../../assets/images/red-onion.png";
import beetroot from "../../assets/images/beetroot.png";
import tomato from "../../assets/images/tomato.png";
import moringa from "../../assets/images/moringa.png";
import orange from "../../assets/images/orange.png";
import garlic from "../../assets/images/white-onion.png";

import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Onion",
    image: onion,
    position:
      "top-[0%] left-1/2 -translate-x-1/2",
  },

  {
    name: "Beetroot",
    image: beetroot,
    position:
      "top-[18%] right-[3%]",
  },

  {
    name: "Orange",
    image: orange,
    position:
      "bottom-[18%] right-[3%]",
  },

  {
    name: "Moringa",
    image: moringa,
    position:
      "bottom-[0%] left-1/2 -translate-x-1/2",
  },

  {
    name: "Tomato",
    image: tomato,
    position:
      "bottom-[18%] left-[3%]",
  },

  {
    name: "Garlic",
    image: garlic,
    position:
      "top-[18%] left-[3%]",
  },
];

const ProductUniverse = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".universe-hub", {
        scale: 0.5,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".universe-node", {
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
        .toArray(".universe-node")
        .forEach((node, index) => {
          gsap.to(node, {
            y: index % 2 === 0 ? -18 : 18,
            duration: 2.5 + Math.random(),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

      gsap.to(".universe-hub", {
        scale: 1.04,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        py-32
        overflow-hidden
        bg-gradient-to-b
        from-[#faf8f4]
        to-white
      "
    >
      {/* Heading */}

      <div className="max-w-4xl mx-auto text-center px-5">

        <span
          className="
            text-sm
            uppercase
            tracking-[4px]
            text-[var(--accent)]
            font-semibold
          "
        >
          Product Ecosystem
        </span>

        <h2
          className="
            heading-font
            mt-4
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-extrabold
          "
        >
          From Farm To Functional
          Ingredients
        </h2>

        <p
          className="
            mt-6
            text-lg
            text-gray-600
            max-w-2xl
            mx-auto
          "
        >
          A diverse portfolio of
          freeze-dried vegetables,
          fruits and botanical powders
          developed for modern food
          manufacturing.
        </p>

      </div>

      {/* Desktop Universe */}

      <div
        className="
          hidden
          lg:block
          relative
          h-[1000px]
          mt-20
          max-w-7xl
          mx-auto
        "
      >

        {/* Connection Lines */}

        <svg
          className="
            absolute
            inset-0
            w-full
            h-full
            pointer-events-none
          "
        >
          <line
            x1="50%"
            y1="50%"
            x2="50%"
            y2="10%"
            stroke="rgba(212,160,86,.25)"
            strokeWidth="2"
          />

          <line
            x1="50%"
            y1="50%"
            x2="85%"
            y2="25%"
            stroke="rgba(212,160,86,.25)"
            strokeWidth="2"
          />

          <line
            x1="50%"
            y1="50%"
            x2="85%"
            y2="75%"
            stroke="rgba(212,160,86,.25)"
            strokeWidth="2"
          />

          <line
            x1="50%"
            y1="50%"
            x2="50%"
            y2="90%"
            stroke="rgba(212,160,86,.25)"
            strokeWidth="2"
          />

          <line
            x1="50%"
            y1="50%"
            x2="15%"
            y2="75%"
            stroke="rgba(212,160,86,.25)"
            strokeWidth="2"
          />

          <line
            x1="50%"
            y1="50%"
            x2="15%"
            y2="25%"
            stroke="rgba(212,160,86,.25)"
            strokeWidth="2"
          />
        </svg>

        {/* Center Hub */}

        <div
          className="
            universe-hub
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2

            h-[280px]
            w-[280px]

            rounded-full
            bg-white/70
            backdrop-blur-xl

            border
            border-white

            shadow-2xl

            flex
            flex-col
            items-center
            justify-center
          "
        >
          <h3
            className="
              heading-font
              text-6xl
              font-extrabold
            "
          >
            150+
          </h3>

          <p
            className="
              mt-2
              text-sm
              tracking-[3px]
              uppercase
              text-gray-500
            "
          >
            Products
          </p>

          <div
            className="
              mt-5
              h-px
              w-16
              bg-gray-200
            "
          />

          <p
            className="
              mt-5
              text-center
              text-gray-600
              text-sm
              px-8
            "
          >
            Export Ready
            <br />
            Premium Quality
          </p>
        </div>

        {/* Product Nodes */}

        {products.map((product) => (
          <div
            key={product.name}
            className={`
              universe-node
              absolute
              ${product.position}
              group
              cursor-pointer
            `}
          >
            <div
              className="
                h-[190px]
                w-[190px]

                rounded-full

                bg-white
                shadow-xl

                flex
                items-center
                justify-center

                transition-all
                duration-500

                group-hover:scale-110
                group-hover:-translate-y-4
                group-hover:shadow-2xl
              "
            >
              <img
                src={product.image}
                alt={product.name}
                className="
                  h-[120px]
                  object-contain
                "
              />
            </div>

            <div
              className="
                mt-4
                text-center
              "
            >
              <h4
                className="
                  font-semibold
                  text-lg
                "
              >
                {product.name}
              </h4>

              <p
                className="
                  text-sm
                  text-gray-500
                "
              >
                Powder
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Layout */}

      <div
        className="
          lg:hidden
          mt-16
          grid
          grid-cols-2
          gap-5
          px-5
        "
      >
        {products.map((product) => (
          <div
            key={product.name}
            className="
              bg-white
              rounded-3xl
              p-5
              shadow-lg
              text-center
            "
          >
            <img
              src={product.image}
              alt={product.name}
              className="
                h-24
                mx-auto
                object-contain
              "
            />

            <h4
              className="
                mt-3
                font-semibold
              "
            >
              {product.name}
            </h4>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ProductUniverse;
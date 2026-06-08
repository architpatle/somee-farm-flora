import { ArrowRight } from "lucide-react";

const FeaturedProducts = () => {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span
            className="
              text-sm
              uppercase
              tracking-[3px]
              text-[var(--accent)]
              font-semibold
            "
          >
            Product Portfolio
          </span>

          <h2
            className="
              heading-font
              mt-4
              text-4xl
              md:text-5xl
              font-extrabold
            "
          >
            Crafted for Modern Food Manufacturing
          </h2>

          <p className="mt-6 text-gray-600 text-lg">
            Premium freeze-dried powders developed
            for food processing, nutraceutical,
            seasoning and export industries.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid lg:grid-cols-3 gap-6">

          {/* Featured Card */}

          <div
            className="
              lg:col-span-2
              rounded-[40px]
              bg-[#f8f8f8]
              overflow-hidden
              group
              cursor-pointer
            "
          >
            <div className="p-10">

              <span className="text-sm text-gray-500">
                Most Popular
              </span>

              <h3
                className="
                  mt-2
                  heading-font
                  text-4xl
                  font-bold
                "
              >
                Red Onion Powder
              </h3>

              <p className="mt-4 text-gray-600 max-w-lg">
                Strong natural flavor,
                long shelf life and ideal
                for seasonings, snacks
                and ready-to-cook foods.
              </p>

            </div>

            <div className="px-10 pb-10">
              <img
                src="/src/assets/images/red-onion.png"
                alt=""
                className="
                  h-[320px]
                  object-contain
                  mx-auto
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />
            </div>

          </div>

          {/* Small Cards */}

          <div className="space-y-6">

            <div
              className="
                bg-[#f8f8f8]
                rounded-[30px]
                p-6
                group
                cursor-pointer
              "
            >
              <img
                src="/src/assets/images/beetroot.png"
                alt=""
                className="
                  h-36
                  mx-auto
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <h4 className="mt-4 text-xl font-bold">
                Beetroot Powder
              </h4>

              <p className="text-sm text-gray-500">
                Rich color and nutrition
              </p>
            </div>

            <div
              className="
                bg-[#f8f8f8]
                rounded-[30px]
                p-6
                group
                cursor-pointer
              "
            >
              <img
                src="/src/assets/images/moringa.png"
                alt=""
                className="
                  h-36
                  mx-auto
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <h4 className="mt-4 text-xl font-bold">
                Moringa Powder
              </h4>

              <p className="text-sm text-gray-500">
                Nutrient-rich superfood
              </p>
            </div>

          </div>

        </div>

        {/* Button */}

        <div className="mt-16 text-center">

          <button
            className="
              inline-flex
              items-center
              gap-2
              px-7
              py-4
              rounded-full
              bg-[var(--accent)]
              text-white
              font-semibold
            "
          >
            View All Products

            <ArrowRight size={18} />
          </button>

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;
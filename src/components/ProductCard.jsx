// src/components/ProductCard.jsx

import { ArrowUpRight } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div
      className="
        group
        bg-white
        rounded-[24px]
        overflow-hidden
        shadow-sm
        hover:shadow-xl
        transition-all
        duration-500
        hover:-translate-y-2
      "
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full
            h-[260px]
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-6">
        <span
          className="
            inline-flex
            px-3
            py-1
            rounded-full
            bg-green-100
            text-green-700
            text-xs
            font-medium
          "
        >
          {product.category}
        </span>

        <h3 className="mt-4 text-xl font-semibold text-[#184f3c]">
          {product.name}
        </h3>

        <p className="mt-3 text-gray-600 leading-relaxed">
          {product.description}
        </p>

        <button
          className="
            mt-6
            flex
            items-center
            gap-2
            text-[#184f3c]
            font-medium
            group/button
            cursor-pointer
          "
        >
          Enquire Now

          <ArrowUpRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover/button:translate-x-1
              group-hover/button:-translate-y-1
            "
          />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
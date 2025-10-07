import React, { useState } from "react";
import Heading from "./Heading";
import Button from "./Button";

function HeroInfoCard({ title, children, price, imageName }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

  return (
    <div className="relative flex flex-col items-center">
      {/* Product Image */}
      {imageName && (
        <img
          src={imageName}
          alt={`Product ${title}`}
          className="w-36 mb-[-4rem] object-contain transition-transform duration-300 hover:scale-110 z-10"
        />
      )}

      {/* Card */}
      <div className="bg-white w-[273px] rounded-lg shadow-md pt-16 p-4 relative z-0">
        {/* Title */}
        <Heading type="h3" className="text-center">
          {title}
        </Heading>

        {/* Description */}
        <p className="text-xs text-gray-500 mt-2 text-center mb-4">
          {children}
        </p>

        {/* Bottom Section */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-3">
            {/* Quantity Buttons */}
            <div className="flex items-center gap-3">
              <Button onClick={decrease} type="quantity">
                –
              </Button>
              <span className="text-gray-800 font-medium w-5 text-center">
                {quantity}
              </span>
              <Button type="quantity" onClick={increase}>
                +
              </Button>
            </div>

            {/* Price */}
            <p className="text-lg font-semibold text-gray-800">{price}</p>
          </div>

          {/* Add to Cart Button */}
          <Button type="tertiary">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
}

export default HeroInfoCard;

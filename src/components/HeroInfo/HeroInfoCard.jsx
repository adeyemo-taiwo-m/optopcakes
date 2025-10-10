import { useState } from "react";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { formatCurrency } from "../../Utils/helpers";
// eslint-disable-next-line
import { motion } from "motion/react";
import ConfirmAddToCart from "../../features/ConfirmAddToCart";

function HeroInfoCard({ title, children, price, imageName, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);
  const numericPrice = Number(price);
  const increase = () => setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);

  function addProduct() {
    const toggleConfirm = () => setShowConfirm(!showConfirm);
    const newProduct = {
      title,
      price: numericPrice,
      quantity,
      totalPrice: price * quantity,
    };
    onAddToCart(newProduct);
    setQuantity(1);

    // Show Confirmation
    toggleConfirm();
    // Hide after 2 seconds
    setTimeout(() => {
      setShowConfirm(false);
    }, 1500);
  }

  return (
    <div className="relative flex group tab:min-w-4/5 flex-col items-center">
      {/* Product Image */}
      {imageName && (
        <img
          src={imageName}
          alt={`Product ${title}`}
          className="w-36 mb-[-4rem]  object-contain transition-transform duration-300 group-hover:scale-110 z-10"
        />
      )}

      {/* Card */}
      <div className="bg-white w-4/5 tab:w-3/5  rounded-lg shadow-md pt-16 p-4 relative z-0">
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
            <p className="text-lg font-semibold text-gray-800">
              {formatCurrency(price)}
            </p>
          </div>

          {/* Add to Cart Button */}

          <Button type="tertiary" onClick={addProduct}>
            Add to Cart
          </Button>
          {showConfirm && <ConfirmAddToCart />}
        </div>
      </div>
    </div>
  );
}

export default HeroInfoCard;

import { useContext, useState } from "react";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { formatCurrency } from "../../Utils/helpers";
// eslint-disable-next-line
import { motion } from "motion/react";
import ConfirmAddToCart from "../../ui/ConfirmAddToCart";
import ConfirmDelete from "../../ui/ConfirmDelete";
import { AppContext } from "../../contexts/AppContext";

function HeroInfoCard({
  title,
  children,
  price,
  imageName,
  onAddToCart,
  onDelete,
}) {
  const [quantity, setQuantity] = useState(1);

  const numericPrice = Number(price);

  const newProduct = {
    title,
    price: numericPrice,
    quantity,
    totalPrice: price * quantity,
  };
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmDeleted, setConfirmDeleted] = useState(false);
  const { cart } = useContext(AppContext);
  const increase = () => setQuantity(quantity + 1);
  const decrease = () => quantity > 1 && setQuantity(quantity - 1);
  const isInCart = cart.some((item) => item.title === newProduct.title);
  function addProduct() {
    const toggleConfirm = () => setShowConfirm(!showConfirm);
    onAddToCart(newProduct);
    setQuantity(1);

    // Show Confirmation
    toggleConfirm();
    // Hide after 2 seconds
    setTimeout(() => {
      setShowConfirm(false);
    }, 1500);
  }

  function deleteProduct() {
    onDelete(newProduct);
    // Show Confirmation
    setConfirmDeleted(true);
    // Hide after 2 seconds
    setTimeout(() => {
      setConfirmDeleted(false);
    }, 1500);
  }

  return (
    <div className="relative flex group tab:min-w-4/5 flex-col items-center">
      {/* Card */}
      <div className="bg-white w-3/5 tab:w-3/5 rounded-lg shadow-md overflow-hidden relative z-0">
        {/* Image section (top 40%) */}
        <div className="relative h-40 w-full">
          {imageName && (
            <img
              src={imageName}
              alt={`Product ${title}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          )}
        </div>

        {/* Card body */}
        <div className="p-4">
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
            <div className="flex gap-2">
              <Button type="tertiary" onClick={addProduct}>
                Add to Cart
              </Button>
              {isInCart && (
                <Button onClick={deleteProduct} type="delete">
                  Delete
                </Button>
              )}
            </div>

            {showConfirm && <ConfirmAddToCart />}
            {confirmDeleted && <ConfirmDelete />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroInfoCard;

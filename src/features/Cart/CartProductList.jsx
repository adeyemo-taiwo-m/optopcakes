import { useContext } from "react";
import { formatCurrency } from "../../Utils/helpers";
import { AppContext } from "../../contexts/AppContext";
import { Element } from "react-scroll";

function CartProductList() {
  const { cart } = useContext(AppContext) || [];

  return (
    <Element name="cart">
      <div className="w-full max-w-4/5 lap:max-w-3/5 desk:max-w-2/5 z-1000 mt-4 absolute right-4 lap:right-30 desk:right-40  mx-auto p-4 bg-white rounded-2xl shadow-sm">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Your Cart</h2>

        {cart?.length === 0 ? (
          <p className="text-gray-500 text-sm text-center">No items in cart.</p>
        ) : (
          <div className="space-y-3">
            {cart?.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-4 gap-4 items-center border-b border-gray-200 pb-3 text-sm mob:grid-cols-3"
              >
                {/* Product Title */}
                <p className="font-medium text-gray-800 col-span-1 mob:col-span-2">
                  {item.title}
                </p>

                {/* Price */}
                <p className="text-gray-600 text-center hidden tab:block">
                  {formatCurrency(item.price)}
                </p>

                {/* Quantity */}
                <p className="text-gray-600 text-center">×{item.quantity}</p>

                {/* Total */}
                <p className="font-semibold text-gray-900 text-right">
                  {formatCurrency(item.totalPrice)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Element>
  );
}

export default CartProductList;

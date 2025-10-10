import React, { useContext } from "react";
import { formatCurrency } from "../../Utils/helpers";
import { AppContext } from "../../contexts/AppContext";
import { Element } from "react-scroll";
import useOutsideClick from "../../hooks/useOutsideClick";
import Button from "../../ui/Button";

function CartProductList() {
  const { cart, setCart, setIsOpenCart } = useContext(AppContext) || [];
  const modalRef = useOutsideClick(() => setIsOpenCart((isOpen) => !isOpen));

  function handleOrder() {
    const orderDetails = cart.map((item, i) => {
      const title = item.title;
      const price = formatCurrency(item.price);
      const quantity = item.quantity;
      const total = formatCurrency(item.totalPrice);

      const items = ` Item ${
        i + 1
      }\n Title : ${title} \n Price: ${price} \n Quantity: ${quantity}\n Sum : ${total}\n`;

      return items;
    });
    const totalPrice = formatCurrency(
      cart.reduce((total, item) => total + item.totalPrice, 0)
    );

    const itemsDetails = orderDetails.join("\n");
    const message = ` Hi Optops, an order from your website\n ${itemsDetails}\nTotal Order is ${totalPrice}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "2348032822302";
    // Send to whatsapp
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );

    setCart([]);
  }

  return (
    <Element name="cart">
      <div
        ref={modalRef}
        className="w-full max-w-4/5  lap:max-w-3/5 desk:max-w-2/5 z-1000 mt-4 absolute right-4 lap:right-30 desk:right-40  mx-auto p-4 bg-white/70 border-2 border-white  backdrop-blur-lg rounded-2xl shadow-sm"
      >
        <h2 className="text-lg font-semibold mb-4 text-primary-default">
          Your Cart
        </h2>

        {cart?.length === 0 ? (
          <p className="text-gray-500 text-sm text-center">No items in cart.</p>
        ) : (
          <div className="space-y-3 flex-col gap-2">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 text-sm border-t border-gray-200">
              {/* Header Row */}
              <div className="font-semibold text-gray-700 py-2">Product</div>
              <div className="font-semibold text-gray-700 py-2 text-center">
                Price
              </div>
              <div className="font-semibold text-gray-700 py-2 text-center">
                Qty
              </div>
              <div className="font-semibold text-gray-700 py-2 text-right">
                Total
              </div>

              {/* Cart Items */}
              {cart?.map((item, i) => (
                <React.Fragment key={i}>
                  <p className="py-3 font-medium text-secondary-hover border-t border-gray-100">
                    {item.title}
                  </p>
                  <p className="py-3 text-center border-t border-gray-100 text-secondary-default">
                    {formatCurrency(item.price)}
                  </p>
                  <p className="py-3 text-center border-t border-gray-100 text-gray-600">
                    ×{item.quantity}
                  </p>
                  <p className="py-3 text-right border-t border-gray-100 font-semibold text-secondary-default">
                    {formatCurrency(item.totalPrice)}
                  </p>
                </React.Fragment>
              ))}

              {/* Order Total Row */}
              <div className="col-span-3 text-right font-semibold text-gray-700 py-3 border-t border-gray-200">
                Total Order
              </div>
              <div className="text-right font-bold text-secondary-default py-3 border-t border-gray-200">
                {formatCurrency(
                  cart?.reduce((total, item) => total + item.totalPrice, 0)
                )}
              </div>
            </div>
            <Button onClick={handleOrder} className={"w-full "}>
              Order now
            </Button>
          </div>
        )}
      </div>
    </Element>
  );
}

export default CartProductList;

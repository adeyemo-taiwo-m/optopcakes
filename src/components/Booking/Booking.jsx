import React from "react";
import { paragraph } from "../../Utils/Paragragh";
import { FaWhatsapp } from "react-icons/fa";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

function Booking() {
  const inputFields = [
    { placeholder: "Full Name", type: "text" },
    { placeholder: "Service Needed", type: "text" },
    { placeholder: "Phone Number", type: "tel" },
    { placeholder: "Quantity Needed/No of Guests", type: "number" },
  ];
  return (
    <section className={` ${paragraph} space-y-8 py-14 `}>
      <div class="flex flex-col lap:flex-row items-center justify-between gap-8 p-6 bg-white rounded-2xl shadow-md">
        {/* <!-- Left: Image --> */}
        <div class="w-full lap:w-1/2">
          <img
            src="/booking.png"
            alt="Booking illustration"
            class="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* <!-- Right: Booking Form --> */}
        <div class="w-full lap:w-1/2">
          <Heading
            type="h2"
            otherStyle={"mx-0 text-center lap:text-left  mb-8"}
          >
            Book our services
          </Heading>
          <form class="flex flex-col gap-6">
            {/* <!-- Input Fields --> */}
            <div class="flex flex-col gap-4">
              {inputFields.map((inputField, i) => (
                <Input key={i} inputField={inputField} />
              ))}
            </div>

            {/* <!-- Buttons Row --> */}
            <div class="flex flex-col tab:flex-row gap-4">
              <Button>Submit Your Order</Button>

              <Button
                type="whatsapp"
                className="text-whatsapp hover:text-white"
              >
                <FaWhatsapp className="text-current transition-colors duration-300 text-2xl" />
                Chat Us
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Booking;

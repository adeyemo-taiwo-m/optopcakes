import React from "react";
import { paragraph } from "../../Utils/Paragragh";
import { FaWhatsapp } from "react-icons/fa";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { fadeUpSection } from "../../Utils/helpers";

// eslint-disable-next-line
import { motion } from "motion/react";
import { Element } from "react-scroll";
import { Form, useForm } from "react-hook-form";

function Booking() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    if (!data) return null;

    const { name, service, quantity, phoneNumber } = data;

    const messageToSend = `Hi Optops, an order from your website\n
    Name : ${name} ,\n
    Service: ${service} ,\n
    Quantity: ${quantity},\n
    Phone Number: ${phoneNumber}
    `;

    const encodedMessage = encodeURIComponent(messageToSend);
    console.log(encodedMessage);
    const whatsappNumber = "2348032822302";
    // Send to whatsapp
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );

    // reset form

    reset();
  }
  const inputFields = [
    {
      placeholder: "Full Name",
      type: "text",
      fieldName: "name",
      message: "Kindly input your name",
    },
    {
      placeholder: "Service Needed",
      type: "text",
      fieldName: "service",
      message: "Enter your prefered service ",
    },
    {
      placeholder: "Phone Number",
      type: "tel",
      fieldName: "phoneNumber",
      message: "Enter a valid number",
    },
    {
      placeholder: "Quantity Needed/No of Guests",
      type: "number",
      fieldName: "quantity",
      message: "Quality/Guest No must be number",
    },
  ];
  return (
    <Element name="booking">
      <motion.section
        {...fadeUpSection()}
        className={` ${paragraph} space-y-8 py-14 `}
      >
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
            <form onSubmit={handleSubmit(onSubmit)} class="flex flex-col gap-6">
              {/* <!-- Input Fields --> */}
              <div class="flex flex-col gap-4">
                {inputFields.map((inputField, i) => (
                  <Input
                    key={i}
                    inputField={inputField}
                    register={register}
                    errors={errors}
                  />
                ))}
              </div>

              {/* <!-- Buttons Row --> */}
              <div class="flex  flex-col w-full tab:flex-row gap-4">
                <Button className={"flex-1"}>Submit Your Order</Button>
                <a
                  href="https://wa.me/2348032822302"
                  className="rounded-sm border justify-center  hover:bg-whatsapp text-whatsapp hover:text-white border-whatsapp  flex gap-2 px-4 py-3 items-center"
                >
                  <FaWhatsapp className="text-current transition-colors duration-300 text-2xl" />
                  Chat Us
                </a>
              </div>
            </form>
          </div>
        </div>
      </motion.section>
    </Element>
  );
}

export default Booking;

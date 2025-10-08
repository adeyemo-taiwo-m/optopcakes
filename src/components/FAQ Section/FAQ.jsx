import React, { useState } from "react";
import Heading from "../../ui/Heading";
import P from "../../ui/P";
import { paragraph } from "../../Utils/Paragragh";

function FAQ() {
  const faqs = [
    {
      question: "How can I place an order?",
      answer:
        "You can place an order by filling out our booking form or contacting us via WhatsApp for direct assistance.",
    },
    {
      question: "Do you offer nationwide delivery?",
      answer:
        "Yes, we deliver nationwide. Delivery time may vary depending on your location.",
    },
    {
      question: "How do I place an order for small chops or cakes??",
      answer:
        "Yes, as long as your order hasn’t been processed, you can modify it by reaching out to our support team.",
    },
    {
      question: "Can I modify my order after placing it?",
      answer:
        "Yes, as long as your order hasn’t been processed, you can modify it by reaching out to our support team.",
    },
    {
      question: "What is the minimum order for trays or party packs??",
      answer:
        "Yes, as long as your order hasn’t been processed, you can modify it by reaching out to our support team.",
    },
    {
      question:
        "How far in advance should I book catering or engagement services?",
      answer:
        "Yes, as long as your order hasn’t been processed, you can modify it by reaching out to our support team.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={` lap:min-w-3/5  mx-auto ${paragraph} space-y-8`}>
      <div className="space-y-3 pt-10">
        <Heading type="h2">Frequently Asked Questions</Heading>
        <P>
          Find quick answers to common questions about our small chops, cakes,
          catering, and event services.
        </P>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-primary-default/20 rounded-md  p-4 bg-primary-light transition-all"
          >
            {/* Question Row */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="font-medium w-4/5 text-text-header text-base tab:text-lg">
                {faq.question}
              </span>

              <div className="text-white cursor-pointer   rounded-md flex  justify-center items-center w-8 h-8 text-md bg-primary-default font-bold transition-transform duration-200">
                {openIndex === index ? "−" : "+"}
              </div>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="mt-3 text-text-body text-sm tab:text-base leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;

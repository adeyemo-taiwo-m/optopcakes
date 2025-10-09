import Heading from "../../ui/Heading";
import P from "../../ui/P";
import { paragraph } from "../../Utils/Paragragh";
import { fadeUpSection } from "../../Utils/helpers";
//eslint-disable-next-line
import { motion, AnimatePresence } from "motion/react";
import { faqs } from "../../assets/data";
import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      {...fadeUpSection()}
      className={`lap:min-w-3/5 mx-auto ${paragraph} space-y-8`}
    >
      <div className="space-y-3 pt-10">
        <Heading type="h2">Frequently Asked Questions</Heading>
        <P>
          Find quick answers to common questions about our small chops, cakes,
          catering, and event services.
        </P>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            layout
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            className="border border-primary-default/20 rounded-md p-4 bg-primary-light transition-all"
          >
            {/* Question Row */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between text-left"
            >
              <span className="font-medium w-4/5 text-text-header text-base tab:text-lg">
                {faq.question}
              </span>

              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white cursor-pointer rounded-md flex justify-center items-center w-8 h-8 text-md bg-primary-default font-bold"
              >
                {openIndex === index ? "−" : "+"}
              </motion.div>
            </button>

            {/* Animated Answer */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 text-text-body text-sm tab:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default FAQ;

import React from "react";
import { paragraph } from "../Utils/Paragragh";
import Button from "./Button";

function AboutCEO() {
  return (
    <section
      className={`w-full px-4 py-12 ${paragraph} md:px-10 lg:px-20 bg-primary-light/30 flex flex-col lap:flex-row items-center gap-10`}
    >
      {/* CEO Image */}
      <div className="w-full lap:w-1/2 flex justify-center">
        <img
          src="/ceo-image.png"
          alt="CEO Portrait"
          className="w-4/5 sm:w-3/5 lap:w-full max-w-md rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* CEO Text */}
      <div className="w-full lap:w-1/2 text-center lap:text-left space-y-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-default">
          Meet Our CEO
        </h2>

        <p className="text-gray-600  text-sm leading-relaxed">
          <span className="font-semibold">Ayanrinde Elizabeth O. (Adeoye)</span>
          , the founder of <span className="font-semibold">Optopcakes</span>, is
          a passionate food lover who turned a lifelong love for delicious small
          chops into a thriving business. With over a decade of experience in
          catering for weddings, birthdays, and corporate events, she has earned
          numerous awards and certifications that reflect her excellence and
          creativity in the culinary industry.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Elizabeth believes that every occasion deserves a touch of flavor,
          class, and unforgettable presentation — a philosophy that drives every
          creation from her kitchen to your event.
        </p>

        {/* Contact Button */}
        <div>
          <Button
            className={"text-center mx-auto lap:mx-0 flex items-center "}
            onClick={() =>
              (window.location.href = "https://wa.me/.2348032822302")
            }
          >
            Contact the CEO
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AboutCEO;

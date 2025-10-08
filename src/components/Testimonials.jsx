import React from "react";
import Heading from "../ui/Heading";
import P from "../ui/P";
import { paragraph } from "../Utils/Paragragh";
import TestimonialItems from "../ui/TestimonialItems";

function Testimonials() {
  return (
    <section className={` ${paragraph} space-y-8 py-14 bg-primary-light`}>
      <div className="space-y-10 lap:space-y-16 pt-10">
        <div className="space-y-3">
          <Heading type="h2">Hear what out clients say</Heading>
          <P>
            Hear from our happy clients, real stories, star ratings, and
            experiences that showcase the quality and care we bring to every
            event.
          </P>
        </div>
        <div className="space-y-10">
          <TestimonialItems />
          <TestimonialItems />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

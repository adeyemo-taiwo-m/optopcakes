import React from "react";
import Heading from "../ui/Heading";
import P from "../ui/P";
import { paragraph } from "../Utils/Paragragh";

function Testimonials() {
  return (
    <section className={` ${paragraph} space-y-8`}>
      <div className="space-y-3 pt-10">
        <Heading type="h2">Hear what out clients say</Heading>
        <P>
          Hear from our happy clients, real stories, star ratings, and
          experiences that showcase the quality and care we bring to every
          event.
        </P>
      </div>
    </section>
  );
}

export default Testimonials;

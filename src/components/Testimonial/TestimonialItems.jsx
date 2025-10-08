import React from "react";
import TestimonialItem from "./TestimonialItem";
import { TESTIMONIALS } from "../../assets/data";

function TestimonialItems() {
  return (
    <ul className="flex gap-4 w-full overflow-auto no-scrollbar">
      {TESTIMONIALS.map((data, i) => (
        <TestimonialItem data={data} key={i} />
      ))}
    </ul>
  );
}

export default TestimonialItems;

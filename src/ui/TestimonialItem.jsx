import React from "react";
import { HiOutlineStar, HiStar } from "react-icons/hi2";

function TestimonialItem() {
  return (
    <div class="max-w-lg  mx-auto p-6 bg-white min-w-md rounded-2xl shadow-md">
      <p class="text-gray-700 text-base text-center mb-4">
        “This is the best service I’ve ever used. Everything was seamless and
        professional from start to finish!”
      </p>

      <div class="border-t border-gray-200 my-4"></div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <img
            src="/hero-profile-1.png"
            alt="User"
            class="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 class="font-semibold text-gray-900 text-sm">John Doe</h3>
            <p class="text-gray-500 text-xs">Lagos, Nigeria</p>
          </div>
        </div>

        <div class="flex gap-0.5 text-yellow-400">
          <HiStar color="var(--color-primary-default)" />
          <HiStar color="var(--color-primary-default)" />
          <HiStar color="var(--color-primary-default)" />
          <HiStar color="var(--color-primary-default)" />
          <HiOutlineStar color="var(--color-primary-default)" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialItem;

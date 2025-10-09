import { HiOutlineStar, HiStar } from "react-icons/hi2";

function TestimonialItem({ data }) {
  const { review, name, location, img } = data;
  //   Yet to complete this section

  return (
    <li class="tab:max-w-lg min-w-4/5 tab:min-w-md  mx-auto p-6 bg-white  rounded-2xl shadow-md">
      <p class="text-body tab:text-md text-xs text-center leading-normal mb-4">
        {review}
      </p>

      <div class="border-t border-gray-200 my-4"></div>

      <div class="flex items-center flex-col gap-4 tab:flex-row justify-between">
        <div class="flex items-center gap-3">
          <img
            src={img}
            alt="User"
            class="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 class="font-semibold text-gray-900 text-sm">{name}</h3>
            <p class="text-gray-500 text-xs">{location}</p>
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
    </li>
  );
}

export default TestimonialItem;

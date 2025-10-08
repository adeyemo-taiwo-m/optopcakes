import React from "react";

function GridImage({ imageName, variant = 0 }) {
  const spanClass =
    variant === 0
      ? "col-span-2 row-span-2" // big hero
      : variant === 3
      ? "col-span-2 row-span-1" // medium wide
      : "col-span-1 row-span-1"; // normal

  return (
    <img
      src={imageName}
      alt=""
      className={`${spanClass} w-full h-full object-cover rounded-lg block`}
      draggable="false"
    />
  );
}

export default GridImage;

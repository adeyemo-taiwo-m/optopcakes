import React from "react";

function SpinImage({ radius = 200, otherSTyle }) {
  const imageArr = Array.from({ length: 4 }, (_, i) => i + 1);

  return (
    <>
      {imageArr.map((_, i) => {
        const angle = (i * 360) / imageArr.length;
        return (
          <img
            key={i}
            src={`hero-image-${i + 1}.png`}
            width={80}
            className={`absolute animate-spinAround ${otherSTyle}`}
            style={{
              animationDelay: `${i * 2}s`,
              transform: `rotate(${angle}deg) translateX(var(--orbit-radius, 150px)) rotate(-${angle}deg)`,
              "--orbit-radius": `${radius}px`,
              "--orbit-speed": "10s",
            }}
          />
        );
      })}
    </>
  );
}

export default SpinImage;

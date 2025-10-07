import GridImage from "./GridImage";

function GridImages() {
  const imageArr = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 max-w-5xl mx-auto
                    auto-rows-[160px] md:auto-rows-[200px] lg:auto-rows-[240px]"
    >
      {imageArr.map((num, i) => (
        <GridImage key={num} variant={i} imageName={`/grid-${num}.png`} />
      ))}
    </div>
  );
}

export default GridImages;

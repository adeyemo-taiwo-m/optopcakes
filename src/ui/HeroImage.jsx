import SpinImage from "./SpinImage";

function HeroImage() {
  const imageArr = Array.from({ length: 4 }, (_, i) => i + 1);
  console.log(imageArr);
  return (
    <div className="flex relative justify-center items-center my-10">
      <img
        src="/small-chop.png"
        className="w-60 tab:w-100 lap:w-120 desk:w-160"
      />
      <SpinImage radius={120} otherSTyle=" tab:hidden lap:hidden" />
      <SpinImage otherSTyle=" hidden tab:block lap:hidden" />
      <SpinImage radius={230} otherSTyle="hidden lap:block   desk:hidden" />
      <SpinImage radius={270} otherSTyle="hidden desk:block" />
    </div>
  );
}

export default HeroImage;

export default function PrevArrow({ onClick, icon }) {
  return (
    <div
      onClick={onClick}
      className={`absolute w-12 h-12 flex justify-center items-center lap:-left-12 desk:left:8 lap:top-1/2 left-8   -translate-y-1/2 z-10 bg-primary-default text-white p-2 rounded-full cursor-pointer hover:bg-primary-dark transition`}
    >
      {icon}
    </div>
  );
}

export default function Arrow({ onClick, icon }) {
  return (
    <div
      onClick={onClick}
      className={`absolute  w-12 h-12 flex justify-center items-center right-8 lap:-right-12 desk:right:8   top-1/2 -translate-y-1/2 z-10 bg-primary-default text-white p-2 rounded-full cursor-pointer hover:bg-primary-dark transition`}
    >
      {icon}
    </div>
  );
}

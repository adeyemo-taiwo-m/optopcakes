function P({ children, otherStyle }) {
  return (
    <p
      className={`text-center tab:w-4/5 text-sm tab:text-base   tab:mx-auto ${otherStyle} `}
    >
      {children}
    </p>
  );
}

export default P;

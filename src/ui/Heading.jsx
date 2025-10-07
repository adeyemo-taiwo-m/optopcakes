function Heading({ type = "h1", children, otherStyle }) {
  const style = {
    h1: "font-serif text-4xl tab:text-5xl lap:text-6xl] font-semibold lap:mx-0  lap:text-left text-text-header mx-auto text-center   lap:w-8/10 desk:text-7xl desk:w-full",
    h2: "text-3xl mx-auto text-center lap:text-4xl desk:text-5xl font-semibold text-text-header ",
    h3: "font-sans font-semibold text-lg text-text-header text-center",
  };
  return <h1 className={`${style[type]} ${otherStyle}`}>{children}</h1>;
}

export default Heading;

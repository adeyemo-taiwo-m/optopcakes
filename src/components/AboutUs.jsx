import Button from "../ui/Button"; // Assuming you have a Button component
import Heading from "../ui/Heading";
import P from "../ui/P";

function AboutUs() {
  return (
    <section className="w-full py-16 px-4 mob:px-6 tab:px-12 lap:px-20 desk:px-32 ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse mob:flex-col   items-center gap-8 lap:flex-row-reverse">
        {/* Text Side */}
        <div className="flex-1 flex  flex-col justify-center items-start gap-4">
          <Heading type="h2" otherStyle={"lap:mx-0 items-start"}>
            About Us
          </Heading>
          <P otherStyle={"lap:text-left lap:mx-0"}>
            We sell both fried and unfried options, catering to customers who
            want ready-to-cook snacks or event-goers needing catering, we ease
            client stress of catering for their guests both indoor and outdoor.
            Ensuring building a loyal customer base, and maintaining consistent
            product quality and delivery also both in decoration, event planning
            and anchoring
          </P>
          <div className="w-full flex flex-col-reverse tab:flex-row lap:justify-start gap-4  justify-center items-center">
            <Button type="primary" className="mt-4   ">
              Contact us
            </Button>{" "}
            <p className="font-bold text-sm italic text-primary-default">
              What we give differ in taste
            </p>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1">
          <img
            src="/about-us.png"
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

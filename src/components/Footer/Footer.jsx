import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { paragraph } from "../../Utils/Paragragh";
import FooterLink from "./FooterLink";
import { FaXTwitter } from "react-icons/fa6";
import ContactLink from "./ContactLink";

function Footer() {
  return (
    <section
      className={`relative w-full text-white/90 mx-auto  ${paragraph} py-14 bg-secondary-default overflow-visible`}
    >
      <div className="container mx-auto px-4 flex flex-col pt-10 mob:flex-col tab:flex-row lap:flex-row desk:flex-row gap-10 lap:items-center justify-between ">
        {/* Company Info */}
        <div className="flex-1">
          <img
            src="/logo-white.svg"
            alt="Company Logo"
            className="w-24 mb-4 cursor-pointer"
          />
          <p className="text-sm opacity-80 leading-relaxed max-w-9/10">
            We are dedicated to providing top-notch catering and event services
            nationwide, bringing delicious experiences right to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 opacity-80 text-sm">
            <FooterLink>Home</FooterLink>
            <FooterLink> About Us</FooterLink>
            <FooterLink>Services</FooterLink>
            <FooterLink>Testimonials</FooterLink>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="flex-1 ">
          <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 opacity-80 text-sm">
            <FooterLink>View Cart</FooterLink>
            <FooterLink>Our Menu</FooterLink>
            <FooterLink>Book service</FooterLink>
            <FooterLink>Chat Us</FooterLink>
          </ul>
        </div>

        {/* Get in Touch */}

        <div className="flex-1 space-y-10">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
            <div className="flex items-center gap-3 mb-3 ">
              <FaPhoneAlt className="text-xl text-primary-light" />
              <p className="text-xl opacity-80">+234 803 282 2302</p>
            </div>
            <div className="flex items-center  gap-3">
              <FaMapMarkerAlt className="text-xl text-primary-light" />
              <p className="text-sm max-w-9/10 opacity-80">
                Shop 3&4, lane 2, behind badmos filling station,
                ota-efun,oshogbo,osun state
              </p>
            </div>
          </div>
          {/* Refature the links */}
          <div className="flex items-center  gap-4 text-2xl">
            <ContactLink>
              <FaFacebookF />
            </ContactLink>

            <ContactLink>
              <FaWhatsapp />
            </ContactLink>

            <ContactLink>
              <FaXTwitter />
            </ContactLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

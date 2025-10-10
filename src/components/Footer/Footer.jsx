import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSnapchat,
  FaWhatsapp,
} from "react-icons/fa";
import ContactLink from "./ContactLink";
import FooterLink from "./FooterLink";
import { paragraph } from "../../Utils/Paragragh";
import { FaXTwitter } from "react-icons/fa6";
// eslint-disable-next-line
import { motion } from "motion/react";
import { fadeUpSection } from "../../Utils/helpers";
import { Link } from "react-scroll";

function Footer() {
  return (
    <section
      className={`relative w-full text-white/90 mx-auto  ${paragraph} py-14 bg-secondary-default overflow-visible`}
    >
      <motion.div
        {...fadeUpSection()}
        className="container mx-auto px-4 flex flex-col pt-10 mob:flex-col  lap:flex-row desk:flex-row gap-10 lap:items-center justify-between "
      >
        {/* Company Info */}
        <div className="flex-1">
          <Link to="hero">
            <img
              src="/logo-white.svg"
              alt="Company Logo"
              className="w-24 mb-4 cursor-pointer"
            />
          </Link>
          <p className="text-sm opacity-80 leading-relaxed max-w-9/10">
            We are dedicated to providing top-notch catering and event services
            nationwide, bringing delicious experiences right to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 opacity-80 text-sm">
            <FooterLink to="hero">Home</FooterLink>
            <FooterLink to="about"> About Us</FooterLink>
            <FooterLink to="services">Services</FooterLink>
            <FooterLink to="testimonials">Testimonials</FooterLink>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="flex-1 ">
          <h3 className="text-lg font-semibold mb-3">Useful Links</h3>
          <ul className="space-y-2 opacity-80 text-sm">
            <FooterLink to="">View Cart</FooterLink>
            <FooterLink>Our Menu</FooterLink>
            <FooterLink to="booking">Book service</FooterLink>
            <FooterLink
              to={
                "https://www.snapchat.com/add/optopcakes?share_id=HP1K6Q2b168&locale=en-GB"
              }
            >
              Chat Us
            </FooterLink>
          </ul>
        </div>

        {/* Get in Touch */}

        <div className="flex-1 space-y-10">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
            <div className="flex items-center gap-3 mb-3 ">
              <FaPhoneAlt className="text-xl text-primary-light" />
              <a href="tel:+2348032822302" className="text-xl opacity-80">
                +234 803 282 2302
              </a>
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
            <ContactLink to={"https://www.facebook.com/optopcakes"}>
              <FaFacebookF />
            </ContactLink>

            <ContactLink to={"https://wa.me/08032822302"}>
              <FaWhatsapp />
            </ContactLink>

            <ContactLink
              to={"https://www.instagram.com/optopcakes?igsh=cmU1Z2V6aHk4aGUy"}
            >
              <FaInstagram />
            </ContactLink>
            <ContactLink
              to={
                "https://www.snapchat.com/add/optopcakes?share_id=HP1K6Q2b168&locale=en-GB"
              }
            >
              <FaSnapchat />
            </ContactLink>
            <ContactLink to={"https://x.com/optopcakes?s=21"}>
              <FaXTwitter />
            </ContactLink>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Footer;

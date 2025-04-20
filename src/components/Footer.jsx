import LogoDark from "@/svgComponents/LogoDark";
import QRDemo from "@/svgComponents/QRDemo";
import WhatsappIconWhite from "@/svgComponents/WhatsappIconWhite";
import React from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import LocationIcon from "@/svgComponents/LocationIcon";
import MailIcon from "@/svgComponents/MailIcon";
import CallIcon from "@/svgComponents/CallIcon";
import TwitterIcon from "@/svgComponents/TwitterIcon";
import FacebookIcon from "@/svgComponents/FacebookIcon";
import ThreadsIcon from "@/svgComponents/ThreadsIcon";
import InstagramIcon from "@/svgComponents/InstagramIcon";
import LinkedinIcon from "@/svgComponents/LinkedinIcon";
import CopyrightIcon from "@/svgComponents/CopyrightIcon";
import { useMediaQuery } from "@/hooks/use-media-query";
import WhatsappSecondaryIcon from "@/svgComponents/WhatsappSecondaryIcon";
import useConstantsStore from "@/store/useConstantsStore";
import { getImageFromS3 } from "@/hooks/get-images";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/learnshackedu",
    icon: <LinkedinIcon />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/learnshackedu",
    icon: <InstagramIcon />,
  },
  {
    name: "Threads",
    href: "https://www.threads.net/@learnshackedu",
    icon: <ThreadsIcon />,
  },
  // {
  //   name: "Facebook",
  //   href: "https://facebook.com/learnshackedu",
  //   icon: <FacebookIcon />,
  // },
  {
    name: "Twitter",
    href: "https://twitter.com/learnshackedu",
    icon: <TwitterIcon />,
  },
];

const navLinks = {
  "Get in Touch": [
    {
      name: "Sector 142, Noida, Uttar Pradesh, India - 201304",
      href: "https://maps.app.goo.gl/JbMJ6mkJxQTYnewj7",
      icon: <LocationIcon />,
    },
    {
      name: "contact@learnshackedu.com",
      href: "mailto:contact@learnshackedu.com",
      icon: <MailIcon />,
    },
    {
      name: "+91 81787 59588",
      href: "tel:+918178759588",
      icon: <CallIcon />,
    },
    {
      name: <span className="ml-6">(Between 9 AM – 9 PM)</span>,
      href: null,
      icon: null,
    },
  ],
  Countries: [
    { name: "Study in UK", href: "/countries/uk" },
    { name: "Study in Ireland", href: "/countries/ireland" },
    { name: "Study in USA", href: "/countries/usa" },
    { name: "Study in Canada", href: "/countries/canada" },
    { name: "Study in Germany", href: "/countries/germany" },
    { name: "Study in Australia", href: "/countries/australia" },
    { name: "Study in France", href: "/countries/france" },
    { name: "Study in Spain", href: "/countries/spain" },
    { name: "Study in Europe", href: "/countries/europe" },
    { name: "Study in New Zealand", href: "/countries/new-zealand" },
  ],
  "Test Preparation": [
    { name: "IELTS", href: "/test-preparation/ielts" },
    { name: "Duo Lingo", href: "/test-preparation/duo-lingo" },
    { name: "PTE", href: "/test-preparation/pte" },
    { name: "TOEFL", href: "/test-preparation/toefl" },
    { name: "GRE", href: "/test-preparation/gre" },
    { name: "GMAT", href: "/test-preparation/gmat" },
    { name: "SAT", href: "/test-preparation/sat" },
  ],
  Company: [
    // {
    //   name: "About Us",
    //   href: "/about-us"
    // },
    // {
    //   name: "Our Services",
    //   href: "/services"
    // },
    // {
    //   name: "Testimonials & Reviews",
    //   href: "/testimonials"
    // },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
  Services: [
    { name: "Profile Evaluator", href: "/services/profile-evaluator" },
    { name: "Scholarships", href: "/services/scholarships" },
    { name: "Explore Universities", href: "/services/explore-universities" },
  ],
  Resources: [
    { name: "Blogs", href: "/blogs" },
    { name: "Refer & Earn", href: "/refer-earn" },
  ],
  Tools: [
    { name: "Expense Calculator", href: "/tools/expense-calculator" },
    { name: "Loan Calculator", href: "/tools/loan-calculator" },
    { name: "GPA Calculator", href: "/tools/gpa-calculator" },
  ],
};

const Footer = () => {
  const isMobile = useMediaQuery();
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const { constantImages } = useConstantsStore();

  const getBrandQuoteImg = () => {
    if (!constantImages || !constantImages.length) return;

    if (isMobile) {
      return getImageFromS3(constantImages, "brand-quote-mobile.png");
    } else if (isTablet) {
      return getImageFromS3(constantImages, "brand-quote-tablet.png");
    } else {
      return getImageFromS3(constantImages, "brand-quote-desktop.png");
    }
  };

  return (
    <div className="w-full bg-brand-primary sm:pt-14 pt-[60px] px-5 md:px-10 lg:px-24">
      <div className="flex sm:flex-row flex-col w-full justify-between sm:gap-0 gap-10">
        <div className="flex flex-col sm:gap-3 gap-5">
          <LogoDark />
          <span className="text-neutral-0 text-body-lg max-w-[450px]">
            Studying abroad is a big step, and we’re here to make it easier for
            you. From choosing the right university to securing scholarships and
            visas, we’ll guide you every step of the way. Let’s take this
            journey together. Book your FREE counseling session today!
          </span>

          <div className="flex gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="hover:opacity-80 transition-opacity p-4"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:gap-6 gap-5">
          <div className="sm:flex hidden gap-3">
            <QRDemo />
            <div className="flex flex-col gap-2 max-w-60 justify-center">
              <span className="text-neutral-0 text-body-lg">
                Scan the QR code to connect with our expert instantly on
              </span>
              <div className="flex">
                <WhatsappIconWhite />
              </div>
            </div>
          </div>
          <div className="flex sm:hidden flex-col gap-3">
            <span className="text-body-lg text-neutral-0">
              Connect with our LSE expert instantly on
            </span>
            <a
              href="https://wa.me/918178759588"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-fit bg-neutral-0 text-brand-primary hover:brightness-110 rounded-sm px-5 py-3">
                <WhatsappSecondaryIcon />
                Connect on Whatsapp
              </Button>
            </a>
          </div>
          {/* <span className="text-body-lg text-neutral-0">OR</span>
          <div className="flex flex-col gap-3">
            <Button className="w-fit bg-neutral-0 text-brand-primary hover:brightness-110 rounded-sm px-5 py-3">
              Request a Call Back
            </Button>
            <span className="text-body-lg text-neutral-0">
              We will give you a call between 9 AM to 9 PM
            </span>
          </div> */}
        </div>
      </div>
      <Separator className="sm:my-10 my-8  h-[0.5px] bg-neutral-0 opacity-25" />

      <div className="flex flex-wrap">
        {/* <div className="flex-grow flex-shrink-0 pr-80 lg:pr-10 mb-10"> */}
        <div className="flex-1 flex-shrink-0 pr-80 lg:pr-10 mb-10">
          <h3 className="text-neutral-0 font-semibold text-body-xl mb-4">
            Get in Touch
          </h3>
          <div className="flex flex-col gap-3">
            {navLinks["Get in Touch"].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                <div>{item.icon}</div>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-0 text-body-lg inline-block"
                  >
                    <span className="relative group">
                      {item.name}
                      <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-neutral-0 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                ) : (
                  <span className="text-neutral-0 text-body-lg">
                    {item.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex-grow flex-shrink-0 md:pr-40 lg:basis-48 lg:pr-10 mb-10">
          <h3 className="text-neutral-0 font-semibold text-body-xl mb-4">
            Countries
          </h3>
          <div className="flex flex-col gap-3">
            {navLinks.Countries.map((link, index) => (
              <a
                key={index}
                // href={link.href}
                className="text-neutral-0 text-body-lg w-fit"
              >
                <span className="relative group inline-block">
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-neutral-0 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex-grow flex-shrink-0 md:pr-40 lg:basis-48 lg:pr-10 mb-10">
          <h3 className="text-neutral-0 font-semibold text-body-xl mb-4">
            Test Preparation
          </h3>
          <div className="flex flex-col gap-3">
            {navLinks["Test Preparation"].map((link, index) => (
              <a
                key={index}
                // href={link.href}
                className="text-neutral-0 text-body-lg w-fit"
              >
                <span className="relative group inline-block">
                  {link.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-neutral-0 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            ))}
          </div>
        </div> */}

        {/* <div className="flex-grow flex-shrink-0 md:pr-40 lg:basis-48 lg:pr-10 mb-10"> */}
        <div className="flex-1 flex-shrink-0 md:pr-40 lg:basis-48 lg:pr-10 mb-10">
          <div className="mb-10">
            <h3 className="text-neutral-0 font-semibold text-body-xl mb-4">
              Company
            </h3>
            <div className="flex flex-col gap-3">
              {navLinks.Company.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-neutral-0 text-body-lg w-fit"
                >
                  <span className="relative group inline-block">
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-neutral-0 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* <div>
            <h3 className="text-neutral-0 font-semibold text-body-xl mb-4">
              Services
            </h3>
            <div className="flex flex-col gap-3">
              {navLinks.Services.map((link, index) => (
                <a
                  key={index}
                  // href={link.href}
                  className="text-neutral-0 text-body-lg w-fit"
                >
                  <span className="relative group inline-block">
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-neutral-0 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </div>
          </div> */}
        </div>

        {/* <div className="flex-grow flex-shrink-0 md:pr-40 lg:basis-48 lg:pr-10 mb-10">
          <div className="mb-10">
            <h3 className="text-neutral-0 font-semibold text-body-xl mb-4">
              Resources
            </h3>
            <div className="flex flex-col gap-3">
              {navLinks.Resources.map((link, index) => (
                <a
                  key={index}
                  // href={link.href}
                  className="text-neutral-0 text-body-lg w-fit"
                >
                  <span className="relative group inline-block">
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-neutral-0 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-neutral-0 font-semibold text-body-xl mb-4">
              Tools
            </h3>
            <div className="flex flex-col gap-3">
              {navLinks.Tools.map((link, index) => (
                <a
                  key={index}
                  // href={link.href}
                  className="text-neutral-0 text-body-lg w-fit"
                >
                  <span className="relative group inline-block">
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 h-[0.5px] bg-neutral-0 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div> */}
      </div>

      <Separator className="sm:my-10 my-8 mt-0 h-[0.5px] bg-neutral-0 opacity-25" />

      <div className="text-center flex sm:flex-row flex-col gap-8 sm:gap-0 items-center w-full justify-between sm:pb-24 pb-8">
        <p className="text-neutral-0 text-sm flex gap-1">
          <CopyrightIcon />
          Copyright Learnshack Private Limited {new Date().getFullYear()}
        </p>
        <Button
          className="w-fit bg-transparent border border-neutral-0 text-neutral-0 hover:brightness-110 rounded-sm px-5 py-3"
          onClick={() => {
            // const mainContent = document.getElementById("main-content");
            // if (mainContent) {
            // mainContent.scrollTo({ top: 0, behavior: "smooth" });
            // }
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to Top
        </Button>
      </div>

      <img src={getBrandQuoteImg()} alt="brand-quote" className="w-full" />
    </div>
  );
};

export default Footer;

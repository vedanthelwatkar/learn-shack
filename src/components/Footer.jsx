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

const Footer = () => {
  const isMobile = useMediaQuery();

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
    { name: "Blog", href: "/blog", icon: <ThreadsIcon /> },
    {
      name: "Facebook",
      href: "https://facebook.com/learnshackedu",
      icon: <FacebookIcon />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/learnshackedu",
      icon: <TwitterIcon />,
    },
  ];

  // Footer navigation links organized by category
  const navLinks = {
    "Get in Touch": [
      {
        name: "Sector 142, Noida, Uttar Pradesh, India - 201304",
        href: "https://maps.google.com",
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
        name: <span className="ml-6">(Between 10 AM – 08 PM)</span>,
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
      { name: "About Us", href: "/about-us" },
      { name: "Our Services", href: "/services" },
      { name: "Testimonials & Reviews", href: "/testimonials" },
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

  return (
    <div className="w-full bg-brand-primary md:pt-14 pt-[60px] px-5 md:px-24">
      <div className="flex md:flex-row flex-col w-full justify-between md:gap-0 gap-10">
        <div className="flex flex-col md:gap-3 gap-5">
          <LogoDark />
          <span className="text-neutral-0 text-body-lg max-w-[450px]">
            At LearnShack Edu, we turn study abroad dreams into reality. As a
            leading consultancy, we provide accurate information and
            personalized guidance to help you make informed decisions. With
            expert support at every step, we ensure a seamless journey toward
            your academic and career goals. Your success starts here. Book Your
            FREE Counseling Today!
          </span>

          {/* Social Media Links */}
          <div className="flex gap-2 self-center">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className="hover:opacity-80 transition-opacity p-4"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:gap-6 gap-5">
          <div className="md:flex hidden gap-3">
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
          <div className="flex md:hidden flex-col gap-3">
            <span className="text-body-lg text-neutral-0">
              Connect with our LSE expert instantly on
            </span>
            <Button className="w-fit bg-neutral-0 text-brand-primary hover:brightness-110 rounded-sm px-5 py-3">
              Request a Call Back
            </Button>
          </div>
          <span className="text-body-lg text-neutral-0">OR</span>
          <div className="flex flex-col gap-3">
            <Button className="w-fit bg-neutral-0 text-brand-primary hover:brightness-110 rounded-sm px-5 py-3">
              Request a Call Back
            </Button>
            <span className="text-body-lg text-neutral-0">
              We will give you a call between 9 AM to 9 PM
            </span>
          </div>
        </div>
      </div>
      <Separator className="md:my-10 my-8  h-[0.5px] bg-neutral-0 opacity-25" />

      <div className="flex flex-wrap">
        {/* Get in Touch Column */}
        <div className="flex-grow flex-shrink-0 md:pr-12 mb-12">
          <h3 className="text-neutral-0 font-semibold text-lg mb-4">
            Get in Touch
          </h3>
          <div className="flex flex-col gap-3">
            {navLinks["Get in Touch"].map((item, index) => (
              <div key={index} className="flex items-start gap-2">
                {item.icon}
                {item.href ? (
                  <a
                    href={item.href}
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

        {/* Countries Column */}
        <div className="flex-grow flex-shrink-0 md:basis-48 md:pr-12 mb-12">
          <h3 className="text-neutral-0 font-semibold text-lg mb-4">
            Countries
          </h3>
          <div className="flex flex-col gap-3">
            {navLinks.Countries.map((link, index) => (
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

        {/* Test Preparation Column */}
        <div className="flex-grow flex-shrink-0 md:basis-48 md:pr-12 mb-12">
          <h3 className="text-neutral-0 font-semibold text-lg mb-4">
            Test Preparation
          </h3>
          <div className="flex flex-col gap-3">
            {navLinks["Test Preparation"].map((link, index) => (
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

        <div className="flex-grow flex-shrink-0 md:basis-48 md:pr-12 mb-12">
          <div className="mb-10">
            {/* Company Column */}
            <h3 className="text-neutral-0 font-semibold text-lg mb-4">
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

          {/* Services Column */}
          <div>
            <h3 className="text-neutral-0 font-semibold text-lg mb-4">
              Services
            </h3>
            <div className="flex flex-col gap-3">
              {navLinks.Services.map((link, index) => (
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
        </div>

        <div className="flex-grow flex-shrink-0 md:basis-48 md:pr-12 mb-12">
          <div className="mb-10">
            {/* Resources Column */}
            <h3 className="text-neutral-0 font-semibold text-lg mb-4">
              Resources
            </h3>
            <div className="flex flex-col gap-3">
              {navLinks.Resources.map((link, index) => (
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

          {/* Tools Column */}
          <div>
            <h3 className="text-neutral-0 font-semibold text-lg mb-4">Tools</h3>
            <div className="flex flex-col gap-3">
              {navLinks.Tools.map((link, index) => (
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
        </div>
      </div>

      <Separator className="md:my-10 my-8 mt-0 h-[0.5px] bg-neutral-0 opacity-25" />

      <div className="text-center flex md:flex-row flex-col gap-8 md:gap-0 items-center w-full justify-between md:pb-24 pb-8">
        <p className="text-neutral-0 text-sm flex gap-1">
          <CopyrightIcon />
          Copyright LearnShack Edu {new Date().getFullYear()}
        </p>
        <Button
          className="w-fit bg-transparent border border-neutral-0 text-neutral-0 hover:brightness-110 rounded-sm px-5 py-3"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
        </Button>
      </div>

      <div className="w-fit overflow-x-hidden opacity-25 justify-self-center ">
        <div className="flex justify-between text-neutral-0 items-center font-heading md:text-h3 text-h6 w-full">
          <span className="md:pb-7">TURNING</span>
          <span>ASPIRATIONS</span>
          <span>INTO</span>
        </div>
        <div className="text-neutral-0 text-center text-[45px] md:text-[120px] lg:text-[161px] font-black leading-none md:leading-[120px] tracking-[2.25px] uppercase overflow-hidden mb-0 pb-0">
          Achievement
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";
import InitiativeSection from "@/components/InitiativeSection";
import OurPracticeArea from "./OurPracticeArea";

import ContactUs from "../components/ContactUs";

const About = () => {
  return (
    <div className="pt-48 lg:pt-8" id="About">
      <div
        className="flex items-center justify-center h-screen  bg-no-repeat "
        id="about"
      >
        <div className=" container flex flex-col lg:flex-row mt-32">
          <div className="w-full lg:w-1/2 px-4 mb-8 ">
            <div className="text-center">
              <img
                src="https://mlq8klj1dy27.i.optimole.com/w:474/h:642/q:mauto/f:best/https://lexjurist.org.np/wp-content/uploads/2023/11/Abesh-Adhikari.png"
                alt=""
                className="mx-auto h-auto w-3/4  rounded-tl-full rounded-bl-full"
              />
              <div className="text-center mt-8   hidden bottom-32 p-12 bg-black rounded-t-full left-[-64]">
                <h3 className="text-3xl font-bold text-white">Clients</h3>
                <h5 className="text-gray-600">3000+</h5>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4 mb-8">
            <div className="text-center">
              <div className="mb-4">
                <div className="text-2xl font-bold">About Us</div>
                <h2 className="text-4xl font-bold mt-2">
                  We are advocates for Rights and Justice with correct strategy
                </h2>
              </div>
              <div className="mb-6">
                <p className="text-gray-700">
                  With its wide experience in thousands of civil and commercial
                  cases as well as in Public Interest Litigation suits, the firm
                  has developed and demonstrated a unique ability to analyze the
                  facts of a case and execute decisions and actions that are
                  efficient and appropriate for the protection of interests of
                  our clients and attainment of their goals.
                </p>
              </div>
              <div className="mb-6">
                <div className="flex items-center">
                  <img
                    src="https://mlq8klj1dy27.i.optimole.com/w:60/h:60/q:mauto/f:best/https://lexjurist.org.np/wp-content/uploads/elementor/thumbs/left-quote1-1-q8o6n1jjp1mmltl02su14zj84c7ktl3elo2cpl2wd4.png"
                    alt=""
                    className="w-12 h-12 mr-4"
                  />
                  <div className="text-lg font-medium">
                    We believe, with the correct team and strategy, justice
                    can't be denied.
                  </div>
                </div>
              </div>
              <a
                href="https://lexjurist.org.np/contact-us/"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              >
                <i className="bi-plus mr-2" /> Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 lg:pt-8">
        <InitiativeSection />
      </div>
      <div className="pt-0 lg:pt-8 pb-16">
        <OurPracticeArea />
      </div>
      <div className="pt-0 lg:pt-8 flex justify-center items-center pb-16 px-8">
        <ContactUs />
      </div>
    </div>
  );
};

export default About;

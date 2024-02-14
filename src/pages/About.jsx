"use Client";

import Image from "next/image";
import React, { useRef } from "react";
import Layout from "../components/Layout";
import InitiativeSection from "@/components/InitiativeSection";
import OurPracticeArea from "./OurPracticeArea";
import { motion, useInView } from "framer-motion";

import ContactUs from "../components/ContactUs";

export const rightcomVariant = {
  initial: {
    opacity: 0,
    x: -10,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",

      duration: 3,
    },
  },
};
export const leftComVariant = {
  initial: {
    opacity: 0,

    y: 100,

  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 4,
    },
  },
};

const About = () => {
  const ref = useRef(null);

  return (
    <div className="pt-0 lg:pt-8" id="About">
      <section
        className="flex items-center z-3 justify-center h-screen  bg-no-repeat "
        id="about"
      >
        <div class="custom-shape-divider-top-1707898366  ">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <div className=" container flex flex-col items-end lg:flex-row mt-32">
          <div className="w-full pt-[20rem] lg:pt-0 lg:w-1/2 px-4 pb-16 ">
            <div className="text-center ">
              <motion.img
                variants={rightcomVariant}
                initial="initial"
                whileInView="whileInView"
                viewport={{
                  once: true,
                }}
                src="https://mlq8klj1dy27.i.optimole.com/w:474/h:642/q:mauto/f:best/https://lexjurist.org.np/wp-content/uploads/2023/11/Abesh-Adhikari.png"
                alt=""
                className="mx-auto h-auto w-3/4   rounded-tl-full rounded-bl-full"
              />
              <div className="text-center mt-8   hidden bottom-32 p-12 bg-black rounded-t-full left-[-64]">
                <h3 className="text-3xl font-bold text-white">Clients</h3>
                <h5 className="text-gray-600">3000+</h5>
              </div>
            </div>
          </div>
          <motion.div
            className="w-full lg:w-1/2 px-4 mb-8"
            variants={leftComVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{
              once: true,
            }}
          >
            <div className="text-center">
              <div className="mb-4">
                <div className="text-2xl font-bold">About Us</div>
                <h2 className="text-4xl font-bold mt-2">
                  We are advocates for Rights and Justice with correct strategy
                </h2>
              </div>
              <div className="mb-6">
                <p className="text-black">
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
          </motion.div>
        </div>
        <div class="custom-shape-divider-bottom-1707898194 z-[-2]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <section className="pt-64 z-3 lg:pt-8">
        <div class="custom-shape-divider-top-1707898366">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <InitiativeSection />
        <div class="custom-shape-divider-bottom-1707898194 z-[-2]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="pt-0 lg:pt-8 pb-16">
        <div class="custom-shape-divider-top-1707898366">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <OurPracticeArea />
        <div class="custom-shape-divider-bottom-1707898194 z-[-2]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
      <section className="pt-0 lg:pt-8 flex justify-center items-center pb-16 px-8">
        <div class="custom-shape-divider-top-1707898366">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <ContactUs />
        <div class="custom-shape-divider-bottom-1707898194 z-[-2]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default About;

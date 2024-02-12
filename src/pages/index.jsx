import { StickyNavbar } from "@/components/StickyNavBar";
import Head from "next/head";
import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import LawImg from "../Asset/Images/lawstatue2.gif";
import About from "@/components/About";
import InitiativeSection from "@/components/InitiativeSection";
import OurPracticeArea from "@/components/OurPracticeArea";
import SimpleFooter from "@/components/Footer";

const index = () => {
  return (
    <>
      <Head>
        <title>Sankalpa</title>
        <meta name="description" content="Yours One and only legal services" />
      </Head>

      <main className="w-full h-auto flex flex-col items-center relative justify-between mt-15  ">
        <StickyNavbar />

        <div className="h-auto   w-full flex-col    flex items-center justify-center relative ">
          <div className=" flex justify-center  w-full rounded-2xl m-16 lg:m-0 mb-32  xl:px-64 xl:py-[7rem] xl:w-full xl:order-2 order-1 ">
            <Image
              src={LawImg}
              className="w-[100%] rounded-3xl  shadow-2xl lg:p-10 p-5 "
            />
          </div>
          <div className=" md:absolute xl:p-32 md:top-[4rem] md:left-[10rem]  md:w-1/2  order-2 ">
            <AnimatedText
              text="Legal Support One Call Away: Empowering Your Rights With a Phone Call!!"
              className="!text-xl xl:!text-3xl lg:!text-3xl md:text-white text-black w-full mb-64 lg:mb-0 "
            />
          </div>
        </div>

        <div className="h-auto w-full mb-24 md:mb-0 ">
          <About />
        </div>

        <div className="h-auto  lg:h-screen flex flex-col w-full ">
          <InitiativeSection />

          {/* <OurPracticeArea /> */}
        </div>
        <hr className="h-[2px] bg-black"></hr>
        <div className=" w-full lg:h-screen lg:pt-48 lg:mt-32 ">
          <OurPracticeArea />
        </div>
        <div className=" w-full">
          <SimpleFooter />
        </div>
      </main>
    </>
  );
};

export default index;

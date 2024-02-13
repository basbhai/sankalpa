import { StickyNavbar } from "@/components/StickyNavBar";
import Head from "next/head";
import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import LawImg from "../Asset/Images/lawstatue2.gif";
import About from "./About";
import { motion } from "framer-motion";
const index = () => {
  return (
    <>
      <Head>
        <title>Sankalpa</title>
        <meta name="description" content="Yours One and only legal services" />
      </Head>

      <main className="w-full h-auto flex flex-col items-center relative justify-between mt-15  ">
        <div className="h-[90%]   w-full flex-col mb-0 pb-0 md:flex items-center justify-center relative hidden pt-8 ">
          <div className=" flex justify-center  w-[80%] rounded-full m-16 lg:m-0 mb-32  xl:px-64 xl:py-[7rem] xl:w-full xl:order-2 order-1 ">
            <Image
              src={LawImg}
              className="w-[90%] rounded-3xl  bg-gradient-to-b from-blue-gray-600 to-blue-500   shadow-2xl lg:p-10 p-5 "
            />
          </div>
          <div className=" md:absolute xl:p-32 md:top-[5rem] md:left-[15rem]  md:w-1/2  order-2 ">
            <AnimatedText
              text="Legal Support One Call Away: Empowering Your Rights With a Phone Call!!"
              className="!text-xl xl:!text-3xl lg:!text-3xl md:text-white text-black w-full mb-64 lg:mb-0 "
            />
          </div>
        </div>

        <div className="">
          <div className="h-auto items-start  flex flex-col w-full ">
            <About />
          </div>

          {/* <div className=" w-full lg:h-screen lg:pt-48 lg:mt-32 ">
            <OurPracticeArea />
          </div> */}
        </div>
      </main>
    </>
  );
};

export default index;

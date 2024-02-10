import { StickyNavbar } from "@/components/StickyNavBar";
import Head from "next/head";
import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import LawImg from "@/Asset/Images/forBgpic.png";
import About from "@/components/About";

const index = () => {
  return (
    <>
      <Head>
        <title>Sankalpa</title>
        <meta name="description" content="Yours One and only legal services" />
      </Head>

      <main className="w-full h-screen flex flex-col items-start justify-between mt-15  ">
        <StickyNavbar />

        <div className="h-screen mt-32 lg:mt-16 w-full    flex xl:flex-row flex-col items-center justify-center ">
          <div className=" flex justify-start  w-full xl:p-32 xl:w-1/2 xl:order-1 order-2 ">
            <AnimatedText
              text="Legal Support One Call Away: Empowering Your Rights With a Phone Call!!"
              className="!text-xl xl:!text-5xl lg:!text-3xl text-black w-full mb-64 lg:mb-0 "
            />
          </div>
          <div className=" flex justify-center  w-full  xl:p-32 xl:w-[45%] xl:order-2 order-1 pr-16">
            <Image
              src={LawImg}
              className="w-[75%]  shadow-2xl rounded-e-full bg-blue-gray-700 pr-16"
            />
          </div>
        </div>
        <div className="h-screen w-full ">
          <About />
        </div>
      </main>
    </>
  );
};

export default index;

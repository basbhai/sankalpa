import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { PracticeAreaData } from "../components/data";
import { FaPhoenixFramework } from "react-icons/fa";
import { motion } from "framer-motion";

import { cardVariants } from "@/components/InitiativeSection";

export function ProfileCard({ src, title, alt, desc }) {
  return (
    <Card className="mt-6 ml-4 w-96 md:w-[30rem] flex-grow-0">
      <CardHeader floated={false} className="h-80">
        <img src={src} alt={alt} />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography color="blue-gray" className="font-medium" textGradient>
          {desc}
        </Typography>
      </CardBody>
    </Card>
  );
}

const OurPracticeArea = () => {
  return (
    <div className="m-0  h-auto pt-0  relative" id="OurPracticeArea">
      <div className="flex flex-col items-center justify-center pt-32 lg:pt-64  ">
        <div className="flex flex-row">
          <FaPhoenixFramework className="text-3xl text-blue-500 transform scale-[2]" />
          <h3 className=" text-xl mb-5">
            &nbsp;&nbsp; &nbsp; What We Do&nbsp; &nbsp; &nbsp;
          </h3>
          <FaPhoenixFramework className="text-3xl text-blue-500 transform scale-[-2] " />
        </div>

        <h1 className="lg:text-5xl text-[1.5rem] text-bold text-justify pb-16">
          Our Practice Areas
        </h1>
      </div>
      <div className="flex flex-col w-full  justify-center gap-5 lg:flex-row items-stretch">
        {PracticeAreaData.map((data, index) => (
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <ProfileCard
              title={data.title}
              key={index}
              src={data.src}
              desc={data.tag}
              alt={data.alt}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurPracticeArea;

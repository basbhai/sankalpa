import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { InitativesData } from "./data";
import { GoLaw } from "react-icons/go";
import { motion } from "framer-motion";

export const cardVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  whileInView: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1 * index,
      type: "spring",
      duration: 3,
    },
  }),
};

export const CardDefault = ({ title, src, tag, alt }) => {
  return (
    <Card className="mt-6 w-96 md:w-[30rem] flex-grow-0">
      <CardHeader color="blue-gray" className="relative h-56">
        <img src={src} alt={alt} />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{tag}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
};

const InitiativeSection = () => {
  return (
    <div className=" mt-32 h-auto lg:h-schreen">
      <div className="flex flex-col items-center justify-center my-16 ">
        <div className="flex flex-row">
          <GoLaw className="text-3xl text-blue-500" />
          <h3 className=" text-xl mb-5">&nbsp; Our Initiatives &nbsp;</h3>
          <GoLaw className="text-3xl text-blue-500" />
        </div>

        <h1 className="lg:text-5xl text-[1.5rem] text-bold text-justify px-8">
          Our Passion for Justice Never Changes
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
        {InitativesData.map((data, index) => (
          <motion.div
            variants={cardVariants}
            initial="initial"
            whileInView="whileInView"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <CardDefault
              title={data.title}
              key={index}
              src={data.src}
              tag={data.tag}
              alt={data.alt}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InitiativeSection;

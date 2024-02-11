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

export const CardDefault = ({ title, src, tag, alt }) => {
  return (
    <Card className="mt-6 w-96 md:w-[30rem]">
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
    <div className="m-14 mt-32 h-screen py-32">
      <div className="flex flex-col items-center justify-center my-16 ">
        <div className="flex flex-row">
          <GoLaw className="text-3xl text-blue-500" />
          <h3 className=" text-xl mb-5">&nbsp; Our Initiatives &nbsp;</h3>
          <GoLaw className="text-3xl text-blue-500" />
        </div>

        <h1 className="lg:text-5xl text-[1.5rem] text-bold text-justify">
          Our Passion for Justice Never Changes
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
        {InitativesData.map((data, index) => (
          <CardDefault
            title={data.title}
            key={index}
            src={data.src}
            tag={data.tag}
            alt={data.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default InitiativeSection;
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { PracticeAreaData } from "./data";
import { FaPhoenixFramework } from "react-icons/fa";

export function ProfileCard({ src, title, alt, desc }) {
  return (
    <Card className="w-96">
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
    <div className="m-14 mt-32 h-screen pt-32">
      <div className="flex flex-col items-center justify-center my-16 ">
        <div className="flex flex-row">
          <FaPhoenixFramework className="text-3xl text-blue-500 transform scale-[2]" />
          <h3 className=" text-xl mb-5">
            &nbsp;&nbsp; &nbsp; What We Do&nbsp; &nbsp; &nbsp;
          </h3>
          <FaPhoenixFramework className="text-3xl text-blue-500 transform scale-[-2] " />
        </div>

        <h1 className="lg:text-5xl text-[1.5rem] text-bold text-justify">
          Our Practice Areas
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
        {PracticeAreaData.map((data, index) => (
          <ProfileCard
            title={data.title}
            key={index}
            src={data.src}
            desc={data.tag}
            alt={data.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default OurPracticeArea;

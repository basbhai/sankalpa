import React from "react";
import { ContactDetails } from "@/components/data";
import { Card, List, ListItem } from "@material-tailwind/react";
import { FaPhoenixFramework } from "react-icons/fa";
import { SimpleRegistrationForm } from "./SimpleRegistrationForm";

const convertToNormalCase = (key) => {
  const result = key.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

const ContactUs = () => {
  return (
    <div className=" container">
      <div className="flex flex-col items-center justify-center   ">
        <div className="flex flex-row">
          <FaPhoenixFramework className="text-3xl text-blue-500 transform scale-[2]" />
          <h3 className=" text-xl mb-5">
            &nbsp;&nbsp; &nbsp; Lets Talk&nbsp; &nbsp; &nbsp;
          </h3>
          <FaPhoenixFramework className="text-3xl text-blue-500 transform scale-[-2] " />
        </div>

        <h1 className="lg:text-5xl text-[1.5rem] text-bold text-justify pb-16">
          Contact Us
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:grow w-full gap-8">
        <Card className=" basis-1/2">
          <h2 className=" self-center text-center">Give Us a Ring.</h2>
          <List>
            {Object.entries(ContactDetails).map(([key, value]) => (
              <ListItem key={key}>
                <div className="flex flex-row items-center justify-start w-full">
                  <div className="basis-[30%] md:basis-1/4">
                    {convertToNormalCase(key)}
                  </div>
                  <div className="basis-[70%] md:basis-3/4">:{value}</div>
                </div>
              </ListItem>
            ))}
          </List>
        </Card>

        <Card className="basis-1/2 flex flex-col items-center justify-center">
          <h2 className="text-center">Leave your Queries</h2>
          <div>
            <SimpleRegistrationForm />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;

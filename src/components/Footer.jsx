import { Typography } from "@material-tailwind/react";
import { data } from "autoprefixer";
import Link from "next/link";

const SimpleFooter = () => {
  return (
    <footer className=" px-16 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <Typography color="blue-gray" className="font-normal">
        {new Date().getFullYear()} &copy; Sankalpa Legal & Services Pvt Ltd
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Link
            href="https://www.basantastha.com.np"
            className="mr-4 text-dark dark:text-light lg:text-sm"
          >
            Developed By{" "}
            <span className="text-blue-500 text-2xl lg:text-base px-1">☛</span>
            <span className="underline underline-offset-2 font-bold">
              Basanta Shrestha
            </span>
            <span className="text-blue-500 text-2xl lg:text-base px-1">
              &#9754;
            </span>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default SimpleFooter;

import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import Layout from "./Layout";
import Logo from "../Asset/Images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { navLiElement } from "./data";
import { useRouter } from "next/router";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} relative group text-black text-xl`}
    >
      {title}
      <span
        className={`h-[1px] inline-block  bg-black 
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
         `}
      >
        {console.log(router.basePath)}
        &nbsp;
      </span>
    </Link>
  );
};

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className=" my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navLiElement.map((element) => (
        <Typography
          as="li"
          variant="large"
          color="blue-gray"
          className="p-1"
          key={element.id}
        >
          <CustomLink href={element.href} title={element.name} className="" />
        </Typography>
      ))}
    </ul>
  );

  return (
    <Layout className=" flex items-center justify-center z-10 fixed !mx-0  ">
      <Navbar className="sticky  top-0  mt-2 h-max max-w-[90%] shadow-2xl rounded-xl px-4 py-2 lg:px-8 lg:py-4 bg-transparent ">
        <div className="flex items-center justify-between text-white">
          <div className="mr-4 cursor-pointer py-1.5 font-medium bg-white rounded-3xl pr-2 shadow-lg shadow-brown-200">
            <Link href="/">
              <Image
                className="w-[4rem] xl:w-[7rem] h-auto rounded-lg  shadow-white "
                src={Logo}
                alt="nature image"
              />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block text-2xl">{navList}</div>
            <div className="flex items-center gap-x-1"></div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1"></div>
        </MobileNav>
      </Navbar>
    </Layout>
  );
}

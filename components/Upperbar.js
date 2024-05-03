"use client";
import React from "react";
import Image from "next/image";
const bar = () => {
  return (
    <nav className=" text-xs  h-auto  md:w-auto xl:w-auto xl:p-0 xl:m-0    2xl:justify-end   xl:justify-end bg-blue-600  sm:w-auto sm:p-0 sm:justify-start  sm:font-small sm:flex-col  flex flex-row border-gray-200 dark:bg-gray-900  max-h-14 items-center justify-end  ">
      <div className=" md:justify-end 2xl:ml-40 p-2 sm:p-2 xl:mr-0  2xl:mr-0 xl:text-lg 2xl:text-2xl flex flex-row justify-end   2xl:justify-end  lg:justify-end xl:justify-end  md:items-center sm:justify-start   sm:text-xs all sm:mt-1  sm:ml-1 sm:text-start  sm:items-center  sm:flex-col items-center mr-0 max-w-screen-xl    ">
        <div className="    text-xs xl:text-lg xl:pr-0  xl:mr-0  xl:p-0 xl:m-0 2xl:text-2xl flex flex-row  sm:ml-8 2xl:justify-end items-center xl:justify-end lg:justify-end md:w-full md:justify-end  sm:pl-0 lg:mx-2 sm:m-0 sm:text-xs  rtl:space-x-reverse ">
          <a
            href="#"
            className="lg:text-xl text-xs xl:text-xl 2xl:text-2xl    md:mx-2   sm:pl-0 sm:left-0 sm:text-xs sm:ml-0 mb-2 text-gray-200  dark:text-blue-500 hover:underline"
          >
            Feature Listing
          </a>
          <Image src="19.svg" className="h-5 sm:h-8 mx-1 xl:text-2xl 2xl:h-85   md:mx-2 sm:mb-2 " alt="logo" width={50} height={5} />
          <Image src="FlagIndia.svg" className=" h-3 sm:h-5 mr-1 md:mx-2  mb-2" alt="logo"  width={50} height={5} />{" "}
          <a
            href="tel:5541251234"
            className="  text-xs  xl:text-lg 2xl:text-2xl mx-2 mb-2 lg:text-xl sm:text-xs  md:mx-2  text-gray-200 dark:text-white hover:underline"
          >
            {" "}
            +91 88820076755
          </a>
          <h1 className=" text-xs lg:text-2xl  mx-1 xl:text-lg 2xl:text-2xl xl:top-2 2xl:mt-0 text-white md:text-xl  md:mx-2  sm:mt-4 lg:my-2 sm:px-2 sm:text-xs  font-bold h-auto ">|</h1>
          <Image src="logo.svg" className="h-4 sm:h-7 mx-1 md:mx-2 mb-2" alt="Whatsapp" width={50} height={5} />
          <Image src="Flag.svg" className="h-3 sm:h-5 mx-1 md:mx-2 mb-2" alt="" width={50} height={5} />
          <a
            href="tel:5541251234"
            className=" text-xs   xl:text-lg 2xl:text-2xl  mb-2 lg:text-xl  md:mx-2 sm:text-xs text-gray-200 dark:text-white hover:underline"
          >
            +971-50-694-3266
          </a>
        </div>
      </div>
    </nav>
  );
};

export default bar;

"use client"
import { useState } from "react";
import React from "react";
import Image from "next/image";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="  lg:flex-row flex xl:h-20 flex-row sm:w-45 xl:ml-4 xl:text-lg 2xl:h-auto xl:flex-row   xl:justify-between 2xl:flex-row   2xl:justify-between  items-center   justify-between  md:flex-row   xl:right-0 flex-wrap ">
      <div className=" ml-4 lg:ml-2 xl:mr-20 2xl:mx-10 2xl:mr-20 w-1/2  lg:w-auto sm:w-10/12 mr-4  xl:w-auto xl:mt-0  xl:pt-0     xl:w-35 xl:flex-row sm:pr-0 flex  2xl:flex-row xl:ml-2 items-center lg:flex-row  lg:m-0  md:justify-between  text-white sm:mr-0  ">
        <a href="">
        <Image src={"./18.svg"} className="lg:w-10/12" alt="logo" width={400} height={30}/>
        </a>
      </div>
      <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="xl:text-lg 2xl:text-2xl   flex items-center px-3 py-2 lg:flex-row rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-8 w-5 ${isOpen ? "hidden" : "block"}     `}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
        <div
          id="mega-menu-full"
          className={`lg:mr-4 lg:justify-end w-full xl:mt-0 xl:pt-0 block flex-grow lg:flex lg:mt-2 lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"} `}
        >
          <ul className=" flex flex-col xl:text-lg xl:mt-0 xl:justify-end    2xl:text-2xl   sm:flex-col mr-8 md:text-lg lg:flex-row md:p-2 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  ">
            <li>
              <a
                href="#"
                className="lg:text-lg   ml-2  2xl:text-2xl   block text-2xl md:text-lg py-2 lg:px-1 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className=" lg:text-lg 2xl:text-2xl   flex md:text-lg text-2xl items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white "
              >
                Services{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <button
                id="mega-menu-full-dropdown-button"
                data-collapse-toggle="mega-menu-full-dropdown"
                className=" lg:text-lg 2xl:text-2xl   md:text-lg flex text-2xl items-center justify-between w-full py-2 px-3 text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500"
              >
                Technologies{" "}
                <sv
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </sv>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="  lg:text-lg 2xl:text-2xl   md:text-lg  block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 "
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  lg:text-lg 2xl:text-2xl   md:text-lg block text-2xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 "
              >
               Partnership
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  lg:text-lg  2xl:text-2xl   md:text-lg block py-2 text-2xl px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 "
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="  lg:text-lg 2xl:text-2xl   md:text-lg block py-2 text-2xl px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500"
              >
                Career
              </a>
            </li>
          </ul>
        </div>

    </nav>
  );
};

export default Navbar;

import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer classNameName=" md:mb-10 border-2 items-center justify-center flex flex-col  w-full flex   bg-slate-800 text-white  text-xs">
      <div className="  flex-col sm:flex-row 2xl:justify-around 2xl:mr-0  xl:justify-between   xl:mx-4  2xl:px-4 xl:text-xl 2xl:text-3xl  sm:ml-4 grid grid-cols-3  sm:gap-6  sm:justify-between sm:gap-y-10 lg:grid-cols-4  md:flex md:justify-between max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500  md:grid-cols-3 md:px-6">
        <ul
          className=" mr-2 flex-col 2xl:justify-around xl:justify-between  xl:text-xl 2xl:text-3xl   mb-4 sm:flex sm:flex-col space-y-5 md:mb-0 md:block"
          aria-labelledby="mega-menu-full-image-button"
        >
          <span className=" space-y-4 mx-4 "><Image className="space-y-4 sm:h-auto sm:w-auto h-15" src="18.svg" alt="logo" width={300} height={20} /></span>
          <li className=" xl:text-xl 2xl:text-3xl  flex flex-row">
            <a
              href="#"
              className="xl:text-xl 2xl:text-3xl  hover:underline space-y-4 text-sm md:text-xl flex flex-row space-x-4 hover:text-blue-600 dark:hover:text-blue-500"
            ><Image src="location.svg" className=" h-6 sm:h-12 w-12" alt="location" width={30} height={1}/>
              C-171 Sector-63 Noida,Uttar Pradesh 201301
            </a>
          </li>
          <li className=" xl:text-xl 2xl:text-3xl  flex flex-row">
           
            <a
              href="#"
              className=" xl:text-xl 2xl:text-3xl  hover:underline text-sm md:text-xl flex flex-row space-x-4 hover:text-blue-600 dark:hover:text-blue-500"
            ><Image src="location.svg" className="h-6  sm:h-12 w-12" alt="location" width={30} height={1}/>
              Platina Height ,C-24,Sector 62,Noida,Uttar Pradesh 201301
            </a>
            
          </li>
          <li className="xl:text-xl 2xl:text-3xl  flex flex-row text-xl space-x-4">
            <a
              href="#"
              className="xl:text-xl 2xl:text-3xl  hover:underline  hover:text-blue-600 dark:hover:text-blue-500"
            >
            <Image src="facebook.svg" alt="logo" className="h-6 w-6 2xl:w-16 2xl:h-16 sm:h-12 sm:w-12" width={30} height={1} />

            </a>
            <a
              href="#"
              className="xl:text-xl 2xl:text-3xl  hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
            <Image src="instagram.svg" alt="logo" className="h-6 w-6 2xl:w-16 2xl:h-16 sm:h-12 sm:w-12" width={30} height={1}/>
            
            </a>
            <a
              href="#"
              className="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
            <Image src="twitter.svg" alt="logo" className="h-6 w-6 2xl:w-16 2xl:h-16 sm:h-12 sm:w-12" width={30} height={1}/>
            
            </a>
          </li>
          
          
        </ul>
       
        <ul className="xl:text-xl 2xl:text-3xl  mb-4 justify-around space-y-4 md:mb-0">
            <h1 className="xl:text-4xl 2xl:text-5xl  text-blue-500 py-2 sm:py-4 font-bold  text-xl sm:text-2xl"> Services</h1>
          <li className="xl:text-xl 2xl:text-3xl  text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-3xl  hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Expertise
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-3xl  text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-3xl  hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Web development
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-3xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-3xl  hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Mobile App development
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-3xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-3xl  hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              UI/UX design
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-3xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-3xl  hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Hire Developer
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-3xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-3xl  hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Become a Partner
            </a>
          </li>
        </ul>
        <ul className="mb-4 space-y-4  md:mb-0">
            <h1 className="xl:text-4xl 2xl:text-5xl text-blue-500 px-4 py-4 font-bold text-xl sm:text-2xl">Expertise</h1>
          <li className="xl:text-xl 2xl:text-3xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-3xl  hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Blockchain App Developmen
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-3xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-3xl  hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              AI App Development
            </a>
          </li >
          <li className="xl:text-xl 2xl:text-3xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-3xl  hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              IoT App development
            </a>
          </li>
          <li className="xl:text-xl 2xl:text-3xl   text-sm sm:text-lg">
            <a
              href="#"
              className="xl:text-xl 2xl:text-3xl  hover:underline hover:text-blue-600 dark:hover:text-blue-500"
            >
              Blockchain App Development
            </a>
          </li>
          </ul>
      </div>

    
    <ul className=' xl:text-xl 2xl:text-3xl  flex flex-row py-4 px-4 mx-4 my-4 space-x-11  text-gray-600 border-2xl justify-center   text-center  text-xl '>
      <li className="xl:text-xl 2xl:text-3xl  text-xl">
        2023 Techlerate
      </li>
      <li className="xl:text-xl 2xl:text-3xl  text-xl">
        Privacy Policy
      </li>
      <li className="xl:text-xl 2xl:text-3xl  text-xl">
        Term & Condition
      </li>
      </ul>
   
</footer>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
const experties = () => {
  return (
<div div className="flex flex-col">
<div
      className="  xl:w-full xl:h-auto object-contain  xl:my-auto "
      style={{
        backgroundImage: `url("Rectangle.svg")`,
        
      }}
    >
      <div className="   2xl:justify-center lg:justify-around sm:items-center sm:flex-row  my-5 flex flex-row justify-center mx-4 sm:mx-10 sm:px-10">
        <div className="  border-t-4  mx-2 sm:px-2 sm:mr-4 xl:w-1/2 sm:p-10 border-l-4 xl:h-35 border-b-4 border-r-4 border-solid border-box xl:my-5 xl:pt-5 px-2  pt-5 xl:mx-5 border-white xl:h-32 items-center text-center text-8xl font-extrabold">
          <div className="text-center lg:text-4xl font-poppins text-xl sm:text-2xl md:text-4xl text-yellow-400  my-auto font-extrabold">
            25+
          </div>
          <div className="xl:mt-2 text-center md:text-2xl font-poppins  text-sm sm:text-xl text-yellow-400 my-auto font-semiabold">
            ACTIVE CLIENTS
          </div>
        </div>
        <div className="border  mx-2 border-t-4 md:mr-4 md:w-auto sm:px-2 sm:mr-4 xl:w-1/2 sm:p-10 border-l-4 border-b-4 border-r-4 border-box my-5 xl:pt-5  px-2 pt-5 xl:my-5 xl:mx-5 border-white xl:h-32  items-center text-center text-8xl font-extrabold">
          <div className="text-center lg:text-4xl font-poppins  text-yellow-400 text-xl sm:text-2xl md:text-4xl my-auto font-extrabold">
            50+
          </div>
          <div className="xl:mt-2 text-center font-poppins md:text-2xl text-sm sm:text-xl text-yellow-400 my-auto  font-semiabold">
           TEAM SIZE
          </div>
        </div>
        <div className="border mx-2 border-t-4 sm:px-2 sm:mr-4 xl:w-1/2  xl:h-35 sm:p-10 border-l-4 border-b-4 border-r-4 border-box my-5 xl:pt-5 px-2 pt-5 xl:my-5 xl:mx-5 border-white xl:h-32 items-center text-center text-8xl font-extrabold">
          <div className=" text-center lg:text-4xl font-poppins md:text-4xl text-yellow-400 text-xl sm:text-2xl my-auto font-extrabold">
            100+
          </div>
          <div className="xl:mt-2 text-center font-poppins text-sm md:text-2xl sm:text-xl text-yellow-400 my-auto font-semiabold">
            PROJECT DONE
          </div>
        </div>
       </div>
    </div>
    
    <div
      className=" flex flex-col  xl:h-auto xl:w-auto lg:flex-row sm:flex-col justify-between font-poppins bg-blue-900 mb-5 xl:pt-0   "
      style={{
        backgroundImage: `url("loginx.svg")`,
      }}
    >
      <div className=" w-full flex  flex-col md:flex-row    py-5 text-xl  ">
        <div className=" xl:text-xl 2xl:text-3xl   flex flex-col gap-2  py-2 justify-center space-y-2">
          <span className="md:text-5xl xl:text-4xl 2xl:text-5xl   ml-4 text-2xl font-poppins font-bold text-white">
            Get in Touch with
          </span>
          <p className="  stroke-current stroke-2 stroke-text-white md:text-7xl   xl:mt-0  mb-2 text-6xl  text-blue-600  font-bold font-sans size-13 leading-19 px-5 py-2 max-w-157 max-h-auto ml-35">
            Our <br width={100} height={10} /> Experts
          </p>
          <div className="xl:text-4xl 2xl:text-xl text-xl text-white space-x-4  py-4 my-4 space-y-4">
            <span className=" md:text-4xl lg:text-3xl 2xl:text-5xl   text-2xl font-semibold ml-4 text-white">
              Communicate with us
            </span>
            <div className="flex flex-row space-x-4">
              <span className="w-10 h-10">
                <Image src="email.svg" alt="email"  width={100} height={10} />
              </span>
              <span className="md:text-3xl lg:text-2xl 2xl:text-3xl  text-xl"> amit@spacetotech.com</span>
            </div>
            <div className="flex  xl:text-4xl  2xl:text-xl flex-col ">
              <span className="md:text-4xl  lg:text-3xl 2xl:text-5xl   md:my-2 font-semibold font-poppins text-2xl">
                Just a ring, and we're here for you
              </span>
              <div className="flex flex-row mt-2 space-x-4">
                <span className="md:text-3xl lg:text-2xl  2xl:text-3xl  flex font-poppins flex-row justify-around">
                  <Image className="mx-4 " src="23.svg" alt="logo" width={40} height={10} />
                  +91882076755 <Image className="mx-4 " src="24.svg" alt="logo" width={40} height={10} />
                </span>
              </div>
              <span className=" md:text-3xl lg:text-2xl 2xl:text-3xl  my-1  text-xl flex font-poppins flex-row">
                <Image className="mx-4 " src="25.svg" alt="logo" width={40} height={10} />
                +971-50-694-3266 <Image className="mx-4 " src="26.svg" alt="logo" width={40} height={10} />
              </span>
            </div>
            <ul
              className=" font-poppins  mb-4 space-y-5 md:mb-0 md:block text-xl"
              aria-labelledby="mega-menu-full-image-button text-xl"
            >
              <li className=" md:text-3xl  2xl:text-3xl  text-start  text-sm font-poppins ">
                <a
                  href="#"
                  className=" md:text-3xl lg:text-2xl 2xl:text-3xl  hover:underline space-y-4 text-xl flex flex-row space-x-4 hover:text-blue-600 dark:hover:text-blue-500"
                >
                  <Image src="27.svg" className="mx-4 " alt="location" width={30} height={1} />
                  C-171 Sector-63 Noida,Uttar Pradesh 201301
                </a>
              </li>
              <li className="xl:text-xl 2xl:text-xl flex flex-row">
                <a
                  href="#"
                  className="md:text-3xl lg:text-2xl 2xl:text-3xl   hover:underline text-xl flex flex-row space-x-4 hover:text-blue-600 dark:hover:text-blue-500"
                >
                  <Image src="27.svg" className="   mx-4" alt="location" width={30} height={1} />
                  Platina Height ,C-24,Sector 62,Noida,Uttar Pradesh 201301
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" lg:mr-8 xl:mr-12 2xl:w-auto w-auto    xl:w-auto xl:h-auto xl:text-xl 2xl:text-2xl sm:mr-3 sm:w-auto lg:w-auto  flex flex-col   px-4 pt-4 bg-blue-500 mx-2 my-4 space-y-4  ">
        <h1 className=" lg:text-4xl  md:text-5xl 2xl:text-3xl   pt-4 mt-2 text-white font-bold text-2xl text-center">
          Let's Get to Know you
        </h1>
        <form action="get">
          <div className="space-y-3 px-4 py-4 mx-4 my-5 underline underline-offset-4  ">
            <div className="   ">
              <input
                type="Name"
                className="peer lg:text-xl md:text-2xl placeholder-white h-full w-full text-sm border-b border-white bg-transparent pt-4 pb-1.5 font-poppins font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500 "
                placeholder="Name"
              width={100} height={10} />
            </div>

            <div className="relative mt-3">
              <input
                type="email"
                className=" mt-3  lg:text-xl peer md:text-2xl placeholder-white h-full w-full text-sm border-b border-white bg-transparent pt-4 pb-1.5 font-poppins font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500  "
                placeholder="Email Address"
              width={100} height={10} />
            </div>
          </div>

          <div className=" mt-2 flex md:text-xl  flex-row peer py-2 pe-0 ps-8  w-full bg-transparent border-t-transparent border-x-transparent">
            <select
              id="question"
              className=" peer lg:text-xl h-full md:text-2xl  placeholder-white  text-sm  border-b border-white bg-transparent pt-4 pb-1.5 font-poppins font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
            >
              <option
                className="peer md:text-2xl lg:text-xl text-sm placeholder-white  border-white bg-transparent pt-2 pb-1.5 font-poppins font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
                selected
              >
                +91
              </option>
              <option value="option2">option2</option>
              <option value="option3">option3</option>
              <option value="option4">option4</option>
              <option value="option5">option5</option>
            </select>
            <input
              type="text"
              id="phone-input"
              className="peer lg:text-xl md:text-2xl  placeholder-white mt-0 h-full px-4 mx-5 w-full my-3 text-sm border-b border-white bg-transparent pt-4 pb-1.5 font-poppins font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="Contact"
              required
            width={100} height={10} />
          </div>
          <select
            id="question"
            className="peer lg:text-xl md:text-2xl placeholder-white my-3 mx-2 w-full   text-sm border-b border-white bg-transparent pt-4 pb-1.5 font-poppins font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
          >
            <option className="mt-3 lg:text-xl md:text-xl peer h-full w-full text-sm border-b border-white bg-transparent pt-4 pb-1.5 font-poppins font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500" selected>When do you want to launch a solution?</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option> 
            <option value="option4">option4</option>
            <option value="option5">option5</option>
          </select>
          <input
            type="About"
            id="About"
            name="About"
            placeholder="About Project"
            className=" peer my-3 lg:text-xl  md:text-2xl placeholder-white w-full text-sm border-b border-white bg-transparent pt-4 pb-1.5 font-poppins font-normal text-white outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-white focus:outline-0 disabled:border-0 disabled:bg-blue-gray-500"
          width={100} height={10} />

          <div className="flex justify-start px-6 py-6 ">
            <button
              type="submit"
              className=" text-sm md:text-2xl rounded-lg w-auto  h-auto my-3 bg-blue-600 text-white py-3 px-6
                    -md cursor-pointer transition-colors text-center 
                    duration-300 hover:bg-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
      </div>
    
  );
};

export default experties;

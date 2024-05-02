import React from "react";

const banner = () => {
  return (
    
      <div className=" 2xl:h-85 flex flex-row   mt-4  justify-between bg-gray-300 decoration-2   ">
        <div className="flex flex-col sm:text-sm font-poppins ">
          <div className="mx-4 flex md:text-4xl flex-col text-start items-start font-poppins">
            <h1 className=" md:text-3xl 2xl:text-4xl font-bold md:text:4xl sm:text-2xl text-xl my-2 gap-2 text-start items-start decoration-2 py-5 px-5">
              <span className=" lg:text-4xl   lg:font-bold  xl:text-4xl 2xl:text-4xl text-blue-500  md:text-4xl size-4 ">Lets's Build</span> the
              Future of <br />
              Technology Together
            </h1>
            <p className="mb-4 text-sm   2xl:text-2xl md:text-2xl sm:text-lg mx-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium atque
              <br /> perspiciatis aut possimus voluptatum{" "}
            </p>
          </div>
         <div className=" 2xl:h-auto  2xl:w-1/2 md:mb-5 items-center py-4 text-center  rounded-lg  mx-4 mt-2 mb-2 tet-sm sm:text-xl md:text-2xl  2xl:text-4xl h-auto sm:h-95 w-auto  sm:w-[288px] sm:h-[62px] bg-white border "> <span className=" md:text-2xl text-sm" >our Engagement Model</span> </div>
        </div>
        <div className="relative h-auto ">
          <img className="absolute sm:-left-20 top-40 -left-10 sm:top-20 w-11 sm:w-24 lg:w-32 rotate-12" src="arrow.svg" alt="" />
          <img className=" md:h-45 h-full  md:object-fit 2xl:right-4 lg:h-98 lg:w-96 sm:my-0 sm:py-0 sm:h-100 " src="22.svg" alt="" />
        </div>
      </div>
   
  );
};

export default banner;

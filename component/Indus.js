import React from "react";

const Indus = () => {
  return (
    <div className="border border-box  flex flex-col gap-20  ">
      <div className=" font-poppins text-center">
        <h1 className="  text-blue-500 md:text-6xl xl:text-6xl mt-10 capitalize font-bold font-poppins text-3xl text-center dark:text-white">
          Industries we serve
        </h1>
        <p className="xl:text-2xl md:text-2xl 2xl:text-2xl text-black text-sm  sm:text-xl text-center justify-center px-5 sm:py-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt
          non! Veritatis, consectetur magni accusam <br />
          us iure, reiciendis ad quidem minima nesciunt amet modi alias cum
          autem culpa molestias dolores sed.
        </p>
      </div>
      <div className=" flex gap-2 xl:justify-around 2xl:justify-around  xl:pr-2 items-center   justify-between px-2 sm:py-2 sm:mx-2 sm:my-2">
        <div className="relative  sm:mx-4  sm:px-4 border-blue-500">
          <div className="relative ">
            <img
              className="  sm:h-auto w-auto rounded-t-lg  "
              src="elearning.svg"
              alt="product image"
            />
            <button className="cursor-pointer bg-gradient-to-l  from-cyan-900 to-cyan-500  2xl:left-20 lg:text-2xl xl:-right-8 xl:text-2xl w-auto lg:left-5 sm:ml-5  h-auto 2xl:w-10/12  2xl:h-10/12  xl:h-20 absolute  sm:w-40 sm:h-10 -bottom-2 lg:-bottom-5 lg:h-auto lg:w-auto  -right-1 sm:-right-8 md:text-xl text-sm font-bold text-white">
              E-Learning
            </button>
          </div>
        </div>
        <div className="relative  lg:mx-4  lg:px-4 border-blue-500">
          <div className="relative ">
            <img
              className=" sm:h-auto w-auto rounded-t-lg  "
              src="sports.svg"
              alt="product image"
            />
            <button className="cursor-pointer 2xl:left-20 bg-gradient-to-l  from-cyan-900 to-cyan-500 lg:text-2xl xl:-right-8 xl:text-2xl lg:left-5 ml-2 w-auto h-auto 2xl:w-10/12  2xl:h-10/12  xl:h-20 absolute  sm:w-40 sm:h-10 -bottom-2 lg:-bottom-5 lg:h-auto lg:w-auto -right-1 sm:-right-8  md:text-xl text-xs sm:text-sm font-bold   text-white">
              Sports Industry
            </button>
          </div>
        </div>
        <div className="relative  mx-4  px-4 border-blue-500">
          <div className="relative ">
            <img
              className=" sm:h-auto w-auto rounded-t-lg  "
              src="food.svg"
              alt="product image"
            />
            <button className="cursor-pointer 2xl:left-20 bg-gradient-to-l  from-cyan-900 to-cyan-500 lg:text-2xl xl:left-4 xl:-right-10 xl:text-2xl ml-2 lg:left-5 w-auto  h-auto 2xl:w-10/12  2xl:h-10/12  xl:h-20 absolute  sm:w-40 sm:h-10 -bottom-2 lg:-bottom-5 lg:h-auto lg:w-auto -right-1 sm:-right-8 md:text-xl text-sm font-bold  text-white">
              Food Industry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indus;

import React from "react";
import Image from "next/image";
const chooseus = () => {
  return (
    <div className="border border-box  flex flex-col  gap-20 font-poppins text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-blue-500 xl:text-6xl md:text-6xl  mt-10 capitalize font-bold font-poppins text-3xl text-center dark:text-white">
          Why Choose Us
        </h1>
        <p className="xl:text-2xl md:text-2xl 2xl:text-2xl  text-black text-sm  sm:text-xl text-center justify-center px-5 py-5 ">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt
          non! Veritatis, consectetur magni accusam <br width={100} height={10} />
          us iure, reiciendis ad quidem minima nesciunt amet modi alias cum
          autem culpa molestias dolores sed.
        </p>
      </div>
      <div className=" flex flex-col sm:flex-row justify-around  ">
        <div className="h-38 flex flex-col  ml-8 ">
          
        <div className="  flex sm:text-lg  flex-row  ml-8 my-2">
                <Image className="h-10 w-10 xl:h-12 xl:w-20 xl:mt-4 sm:mt-2" src="7.svg" alt="logo"width={100} height={10} />

                <div className=" ml-8 sm:text-lg   2xl:text-2xl  xl:text-2xl sm:my-2   my-2">
                  <h4 className="text-start md:text-2xl sm:text-lg 2xl:text-3xl  xl:text-2xl font-bold text-xl items-start ">
                    Quality
                  </h4>
                  <p className=" text-sm text-start sm:text-lg 2xl:text-2xl xl:text-xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloribus,
                    <br width={100} height={10} />
                    voluptatum maxime, sapiente est impedit nihil itaque illo
                    iusto modi sint facere pariatur.
                  </p>
                </div>
              </div>


              <div className="  flex sm:text-lg  flex-row  ml-8 my-2">
                <Image className="h-10 xl:h-12 w-10 sm:mt-2 xl:w-20 xl:mt-0" src="7.svg" alt="logo"width={100} height={10} />

                <div className=" ml-8 sm:text-lg sm:my-2 2xl:text-2xl  xl:text-2xl  my-2">
                  <h4 className="text-start  md:text-2xl sm:text-lg font-bold 2xl:text-3xl  xl:text-2xl text-xl items-start ">
                    Quality
                  </h4>
                  <p className="text-sm text-start sm:text-lg 2xl:text-2xl  xl:text-xl">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloribus,
                    <br width={100} height={10} />
                    voluptatum maxime, sapiente est impedit nihil itaque illo
                    iusto modi sint facere pariatur.
                  </p>
                </div>
              </div>


              <div className="  flex sm:text-lg  flex-row  ml-8 my-2">
                <Image className="h-10 w-10 sm:mt-2 xl:h-12 xl:w-20 xl:mt-0" src="7.svg" alt="logo"width={100} height={10} />

                <div className=" ml-8 sm:text-lg sm:my-2  2xl:text-2xl  xl:text-2xl my-2">
                  <h4 className="text-start  md:text-2xl sm:text-lg font-bold 2xl:text-3xl  xl:text-2xl text-xl items-start ">
                    Quality
                  </h4>
                  <p className="text-sm text-start sm:text-lg 2xl:text-2xl  xl:text-2x">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloribus,
                    <br width={100} height={10} />
                    voluptatum maxime, sapiente est impedit nihil itaque illo
                    iusto modi sint facere pariatur.
                  </p>
                </div>
              </div>
           

          
              
             
              <div className="  flex sm:text-lg  flex-row  ml-8 my-2">
                <Image className="h-10 w-10 sm:mt-2 xl:h-12 xl:w-20 xl:mt-0" src="7.svg" alt="logo"width={100} height={10} />

                <div className=" ml-8 sm:text-lg sm:my-2 2xl:text-2xl  xl:text-2xl  my-2">
                  <h4 className="text-start  md:text-2xl sm:text-lg font-bold 2xl:text-3xl  xl:text-xl text-2xl items-start ">
                    Quality
                  </h4>
                  <p className="text-sm text-start sm:text-lg 2xl:text-2xl  xl:text-2x">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloribus,
                    <br width={100} height={10} />
                    voluptatum maxime, sapiente est impedit nihil itaque illo
                    iusto modi sint facere pariatur.
                  </p>
                </div>
              </div>
            </div>
         
          <div className=" relative m-2 ">
            <Image className="absolute xl:top-10 xl:-top-0 2xl:top-0  -top-10 2xl:top-15 w-12 sm:-top-0.5 lg:top-10 -left-4  md:top-20 sm:top-20  lg:-left-5 rotate-x-5" src="circle.svg" alt="logo"width={100} height={10} />
            <Image className="relative  sm:-top-0 mx-2 w-auto -top-2 sm:w-auto xl:top-2 sm:-top-2 md:top-2  h-auto md:h-[473px]" src="8.svg" alt="logo"width={100} height={10} />
          </div>
        </div>
        </div>
     
  );
};

export default chooseus;

import React from "react";
import Image from "next/image";
const TechStack = () => {
  return (
    <div
      className="  items-center py-0 h-75"
      style={{
        backgroundImage: `url("tech.svg")`,

        
      }}
    >
      
      <div className=" relative xl:text-4xl 2xl:text-4xl text-2xl text-start ml-5  pt-5 text-white   ">
        
        <h1 className="font-bold   ml-10 text-2xl sm:text-4xl   ">TECHNOLOGY STACK</h1>
      </div>
      <div className=" flex-col  xl: xl:justify-around xl:w-auto  2xl:justify-between flex md:justify-start lg:flex-row xl:flex-row   sm:flex-col justify-between   my-65">
        <div className=" ml-0 xl:w-auto  mx-10 py-10 pl-10 font-poppins ">
          <div className=" xl:w-auto  2xl:w-auto  xl:text-xl  xl:my-2 2xl:w-100  my-2 sm:w-96  hover:text-white ">
            <a
              href="#"
              className=" flex md:justify-start flex-row  items-center  bg-blue-800  shadow md:flex-row md:max-w-xl hover:bg-gray-400 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                className=" mx-5 h-auto md: object-cover rounded-t-lg md:w-auto "
                src="15.svg"
                alt="App"
                width={50}
                height={5}
              />
              <div className=" justify-between  md:w-auto py-2 leading-normal">
                <h4 className="xl:text-xl 2xl:text-2xl text-xl hover:text-white  md:w-auto mx-4  mb-2 sm:text-3xl font-bold tracking-tight text-white  dark:text-white">
                  Mobile App <br /> Development
                </h4>
              </div>
            </a>
          </div>
          <div className=" mt-10 sm:w-96 hover:text-white ">
            <a
              href="#"
              className="flex  flex-row items-center  bg-blue-800  shadow md:flex-row md:max-w-xl hover:bg-gray-400 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                className=" mx-5  object-cover py-2 rounded-t-lg "
                src="16.svg"
                alt="web"
                width={50}
                height={5}
              />
              <div className=" justify-between py-2 leading-normal">
                <h4 className="xl:text-xl 2xl:text-2xl hover:text-white mx-4 px-4 mb-2 text-xl sm:text-3xl font-bold tracking-tight text-white  dark:text-white">
                  Web <br /> Development
                </h4>
              </div>
            </a>
          </div>
          <div className=" mt-10  sm:w-96 xl:text-xl 2xl:w-100 hover:text-white ">
            <a
              href="#"
              className="flex  flex-row items-between py-2  h-85 bg-blue-800  shadow md:flex-row md:max-w-xl hover:bg-gray-400 hover:text-white dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <Image
                className=" mx-2 object-cover py-2 rounded-t-lg "
                src="17.svg"
                alt="UI/Ux"
                width={50}
                height={5}
              />
              <div className=" text-end py-2 leading-normal">
                <h4 className="xl:text-xl 2xl:text-2xl hover:text-white mx-4 px-4 mb-2 text-xl sm:text-3xl font-bold tracking-tight text-white  dark:text-white">
                  UI/UX DESIGN
                </h4>
              </div>
            </a>
          </div>
        </div>

        <div className="w-auto  h-auto lg:mr-8 xl:w-auto sm:w-auto xl:mr-4 2xl:w-auto 2xl:mr-12  py-2 my-12   items-start bg-blue-800 sm:ml-2 sm:mr-2  mx-10 h-55  text-start  text-white ">
          
          <div className=" w-auto h-auto mx-4  my-9">

            <p className=" lg:text-xl md:text-2xl xl:text-lg 2xl:text-2xl my-10 text-sm  sm:text-xl px-4 mx-4 sm:mx-2 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos sunt <br /> ipsum iure assumenda rem modi maxime
              aperiam minus quaerat. Laborum <br />
              fugit error qui tenetur repudiandae nemo quibusdam soluta sit
              quam!{" "}
            </p>
            <div className="flex xl:text-2xl 2xl:text-4xl flex-row justify-start   items-center">
              <div className="applelogo h-34  sm:px-2 py-4 mx-1 sm:mx-4">
                <Image className="h-auto w-auto  " src="apple.svg" alt="logo"  width={50}
                height={5}/>
                <span className="ml-4 md:text-2xl">iOS</span>
              </div>
              <div className="android sm:px-2 py-4 mx-1 sm:mx-4">
                <Image src="Android.svg" alt="android"  width={50}
                height={5} />
                <span className="md:text-2xl">Android</span>
              </div>
              <div className="flutter sm:px-2 py-4 mx-1 sm:mx-4">
                <Image src="Flutter.svg" alt="flutter"  width={50}
                height={5} />
                <span className="md:text-2xl">Flutter</span>
              </div>
              <div className="reactNaive sm:px-2 py-4 mx-1 sm:mx-4">
                <Image src="React.svg" alt="react"  width={50}
                height={5} />
                <span className="md:text-2xl">React Native</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

import React from "react";
import Image from "next/image";
const Certi = () => {
  return (
    <div className=" flex flex-col   py-5  items-center">
      <div className=" font-poppins text-center  ">
        <h1 className="text-blue-500   xl:text-6xl  mt-10 capitalize font-bold font-poppins text-3xl md:text-6xl text-center ">Certifications</h1>
        <p className="xl:text-2xl md:text-2xl 2xl:text-2xl text-black text-sm  sm:text-xl text-center justify-center px-5 py-5">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt
          non! Veritatis, consectetur magni accusamus iure, <br /> reiciendis ad
          quidem minima nesciunt amet modi alias cum autem culpa molestias
          dolores sed.
        </p>
      </div>
    
        <div className="flex w-auto flex-row xl:justify-between  2xl:justify-between space-x-2 items-center justify-center py-5">
          <div className="ml-5 pl-5 pr-3">
            <Image className="" src="20.svg" alt="certi"  width={150}
                height={5} />
          
          </div>
          <div className="mx-5 px-5">
            <Image src="freelencer.svg" alt="certi"  width={150}
                height={5} />
           
          </div>
          <div className="mx-5 px-5">
            <Image src="App future.svg" alt="certi"   width={150}
                height={5}/>
            
          </div>
          <div className="mx-5 px-">
            <Image src="Good Films.svg" alt="certi"  width={150}
                height={5} />
            
          </div>
          <div className="mx-5 px-5">
            <Image src="clutech.svg" alt="certi"  width={150}
                height={5}/>
            
          </div>
        </div>
      </div>
 
  );
};

export default Certi;

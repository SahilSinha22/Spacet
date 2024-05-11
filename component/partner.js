import React from 'react'
import Image from 'next/image'
const partner = () => {
  return (
    
    <div className="border border-box  flex flex-col   ">
      <div className="font-poppins text-center">
        <h1 className="text-blue-500 md:text-6xl xl:text-6xl mt-10 capitalize font-bold font-poppins text-3xl text-center ">Our Partners</h1>
        <p className="text-black  md:text-2xl xl:mx-2 2xl:mx-2 xl:text-2xl 2xl:text-2xl text-sm  sm:text-xl text-center justify-center px-5 py-5">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt
          non! Veritatis, consectetur magni  accusam <br />us iure,  reiciendis ad
          quidem minima nesciunt amet modi alias cum autem culpa molestias
          dolores sed.
        </p>
      </div>
    
        <div className=" md:ml-2 md:w-auto flex flex-row xl:justify-around  2xl:justify-around sm:items-center sm:justify-center  w-full bg-gray-200 justify-around  gap-5 ">
          <div className=' my-1 ml-1  sm:py-5'>
            <Image src="1.svg" alt="logo" width={200} height={2}/>
          </div>
          <div className=' my-1  sm:py-5'>
            <Image src="2.svg" alt="logo" width={200} height={10}/>
          </div>
          <div className='my-1  sm:py-5'>
            <Image src="3.svg" alt="logo" width={200} height={10} />
          </div>
          <div className='my-1  sm:py-5'>
            <Image src="4.svg" alt="logo" width={200} height={10} />
          </div>
          <div className='my-1  sm:py-5'>
            <Image src="5.svg" alt="logo"  width={150} height={2}/>
          </div>
          <div className='my-1  sm:py-5'>
            <Image src="6.svg" alt="logo" width={200} height={10} />
          </div>
          </div>
        </div>

     
   
  )
}

export default partner

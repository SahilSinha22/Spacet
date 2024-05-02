import React from 'react'

const partner = () => {
  return (
    
    <div className="border border-box  flex flex-col   ">
      <div className="font-poppins text-center">
        <h1 className="text-blue-500 md:text-6xl xl:text-6xl mt-10 capitalize font-bold font-poppins text-3xl text-center dark:text-white">Our Partners</h1>
        <p className="text-black  md:text-2xl xl:mx-2 2xl:mx-2 xl:text-2xl 2xl:text-2xl text-sm  sm:text-xl text-center justify-center px-5 py-5">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, sunt
          non! Veritatis, consectetur magni  accusam <br />us iure,  reiciendis ad
          quidem minima nesciunt amet modi alias cum autem culpa molestias
          dolores sed.
        </p>
      </div>
    
        <div className=" md:ml-2 md:w-auto flex flex-row xl:justify-around  2xl:justify-around sm:items-center sm:justify-center  w-full bg-gray-200 justify-around  gap-5 ">
          <div className=' my-1 sm:px-5 sm:py-5'>
            <img src="1.svg" alt="" />
          </div>
          <div className=' my-1 sm:px-5 sm:py-5'>
            <img src="2.svg" alt="" />
          </div>
          <div className='my-1 sm:px-5 sm:py-5'>
            <img src="3.svg" alt="" />
          </div>
          <div className='my-1 sm:px-5 sm:py-5'>
            <img src="4.svg" alt="" />
          </div>
          <div className='my-1 sm:px-5 sm:py-5'>
            <img src="5.svg" alt="" />
          </div>
          <div className='my-1 sm:px-5 sm:py-5'>
            <img src="6.svg" alt="" />
          </div>
          </div>
        </div>

     
   
  )
}

export default partner
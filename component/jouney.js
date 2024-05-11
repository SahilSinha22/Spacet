import React from 'react'
import Image from 'next/image'
const jouney = () => {
  return (
    <div className='flex flex-col justify-center  py-5 items-center'>
      <div className="mx-2">
      <h1 className=' xl:text-6xl md:text-5xl my-10 capitalize font-bold font-poppins text-3xl text-center '>
        <span className='text-blue-500'>Spacetotech</span> Journey of Mobile App Development
      </h1>
      </div>
      <div className="mx-2 item-center">
      <Image className="items-center" src="10.svg" alt="Journey" width={1000} height={150} />
    </div>
    </div>
  )
}

export default jouney

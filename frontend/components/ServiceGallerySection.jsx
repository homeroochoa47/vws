import { urlFor } from '@/lib/helpers'
import Link from 'next/link'
import ServiceGalleryCard from "./cards/ServiceGalleryCard"
import { useState } from "react";

export default function ServiceGallerySection(props) {
  const {photoData} = props
  const {serviceData} = props

  return (
    <div className="flex relative flex-col mt-10 lg:mt-16 px-2 lg:px-10 overflow-x-clip">
      <div id='header' className='flex flex-row relative'>
        <div className='flex flex-col w-full'>
          <h2 className='text-7xl font-medium font-kanit text-dark-grey font-regular lg:pl-2 opacity-90 mx-auto'>Our Commercial Van Wrap Work</h2>
          <div className='hidden sm:block w-[300px] h-[4px] mr-auto my-auto bg-yellow/90 rounded-lg mx-auto'></div>
          <h4 className='text-lg lg:text-2xl text-center leading-tight font-ubuntu text-light-blue font-medium lg:pl-2 mx-auto md:py-2'>Browse our previous work and explore our expertly installed commercial vehicle wraps. We’ve completed projects for car fleets, vans, busses, food trucks, and much more.</h4>
        </div>
      </div>

      {/* <div className={`grid grid-cols-1 md:grid-cols-2 lg:${photoData.length % 3 === 0 ? 'grid-cols-3' : 'grid-cols-4'} gap-5 pt-3 md:pt-0`}>
        {photoData.map((item, index) => (
          <ServiceGalleryCard key={index} data={item} />
        ))}
      </div> */}


    </div>


  )
}

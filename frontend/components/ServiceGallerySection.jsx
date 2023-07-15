import { urlFor } from '@/lib/helpers'
import Link from 'next/link'
import { useState } from "react";

export default function ServiceGallerySection({ photoData, serviceData }) {

  return (
    <div className="lg:mt-10 py-10 w-[95%] xl:w-[85%] mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-end mx-auto w-[95%] md:w-full mb-8 sm:mb-4 border-b-4 border-darkest-grey pb-2">
          <h2 className="w-full text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-one font-semibold text-darkest-grey">
            {serviceData[0].header}
          </h2>
          <p className="text-md md:text-lg lg:text-xl font-two text-dark-grey lg:pl-20">
            {serviceData[0].headerCaption}
          </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {photoData.map((item, index) => (
            <div
            className="zoom relative overflow-hidden rounded-lg shadow-lg hover:scale-[101%] transition duration-450 ease-in-out" key={index}>
                <img src={urlFor(item.leadingImage).url()}
                className="w-full align-middle h-full object-cover aspect-[5/4]" />
                <Link href={`/vehicle-wrap-portfolio/${item.slug.current}`}>
                    <div
                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                        <div className="flex h-full items-end justify-start bg-black/[25%] hover:bg-black/0 transition duration-250 ease-in-out">
                            <h5 className="m-2 md:m-6 text-lg md:text-xl drop-shadow-xl font-bold text-white">
                                {item.title}
                            </h5>
                        </div>
                    </div>
                </Link>
            </div>
        ))}
      </div>
    </div>


  )
}

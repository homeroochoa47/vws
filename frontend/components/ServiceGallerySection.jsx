import { urlFor } from '@/lib/helpers'
import Link from 'next/link'
import ServiceGalleryCard from "./cards/ServiceGalleryCard"
import { useState } from "react";

export default function ServiceGallerySection(props) {
  const {photoData} = props
  const {serviceData} = props

  return (
    <div className="mt-10 py-10 w-[95%] xl:w-[85%] mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row items-end mx-auto w-[95%] md:w-full mb-8 sm:mb-4 border-b-4 border-darkest-grey pb-2">
          <h2 className="w-full text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-one font-semibold text-darkest-grey">
          Our Commercial Van Wrap Work
          </h2>
          <p className="text-md md:text-lg lg:text-xl font-two text-dark-grey pl-20">
            Browse our previous work and explore our expertly installed commercial vehicle wraps. We’ve completed projects for car fleets, vans, busses, food trucks, and much more.
          </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div
        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] hover:scale-[101%] transition duration-450 ease-in-out"
        data-te-ripple-init data-te-ripple-color="dark">
            <img src="/van.png"
            className="w-full align-middle" />
            <a href="#!">
            <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                <div className="flex h-full items-end justify-start">
                <h5 className="m-6 text-xl drop-shadow-xl font-bold text-white">
                    Placeholder
                </h5>
                </div>
            </div>
            <div>
                <div
                className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                </div>
            </div>
            </a>
        </div>
        <div
        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] hover:scale-[101%] transition duration-450 ease-in-out"
        data-te-ripple-init data-te-ripple-color="dark">
            <img src="/van.png"
            className="w-full align-middle" />
            <a href="#!">
            <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                <div className="flex h-full items-end justify-start">
                <h5 className="m-6 text-xl drop-shadow-xl font-bold text-white">
                    Placeholder
                </h5>
                </div>
            </div>
            <div>
                <div
                className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                </div>
            </div>
            </a>
        </div>
        <div
        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] hover:scale-[101%] transition duration-450 ease-in-out"
        data-te-ripple-init data-te-ripple-color="dark">
            <img src="/van.png"
            className="w-full align-middle" />
            <a href="#!">
            <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                <div className="flex h-full items-end justify-start">
                <h5 className="m-6 text-xl drop-shadow-xl font-bold text-white">
                    Placeholder
                </h5>
                </div>
            </div>
            <div>
                <div
                className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                </div>
            </div>
            </a>
        </div>
        <div
        className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] hover:scale-[101%] transition duration-450 ease-in-out"
        data-te-ripple-init data-te-ripple-color="dark">
            <img src="/van.png"
            className="w-full align-middle" />
            <a href="#!">
            <div
                className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                <div className="flex h-full items-end justify-start">
                <h5 className="m-6 text-xl drop-shadow-xl font-bold text-white">
                    Placeholder
                </h5>
                </div>
            </div>
            <div>
                <div
                className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                </div>
            </div>
            </a>
        </div>
        {/* {data.map((item, index) => (
            <div
            key={index}
            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] hover:scale-[101%] transition duration-450 ease-in-out"
            data-te-ripple-init data-te-ripple-color="dark">
                <img src={urlFor(item.leadingImage).url()}
                className="w-full align-middle" />
                <a href="#!">
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                    <div className="flex h-full items-end justify-start">
                    <h5 className="m-6 text-xl drop-shadow-xl font-bold text-white">
                        {item.title}
                    </h5>
                    </div>
                </div>
                <div>
                    <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                    </div>
                </div>
                </a>
            </div>
        ))} */}
      </div>
    </div>


  )
}

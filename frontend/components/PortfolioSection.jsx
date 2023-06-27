import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/helpers'

export default function PortfolioSection() {
  return (
    <div class="py-20 w-[95%] xl:w-[85%] mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row items-end mx-auto w-[95%] md:w-full mb-8 sm:mb-4 border-b-4 border-darkest-grey pb-6">
            <h2 className="w-full md:w-[70%] lg:w-3/5 xl:w-4/5 text-4xl md:text-5xl xl:text-7xl font-one font-semibold text-red">
            Portfolio
            </h2>
            <p className="text-md md:text-lg lg:text-xl font-two text-dark-grey lg:pl-32">
                Browse our previous work and explore our expertly installed commercial vehicle wraps. We’ve completed   projects for car fleets, vans, busses, food trucks, and much more.
            </p>
        </div>

        <div class="grid gap-6 lg:grid-cols-2">
            <div
                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                data-te-ripple-init data-te-ripple-color="dark">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg"
                class="w-full align-middle transition duration-300 ease-linear" />
                <a href="#!">
                <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                    <div class="flex h-full items-end justify-start">
                    <h5 class="m-6 text-lg font-bold text-white">
                        Hollywood exhibition
                    </h5>
                    </div>
                </div>
                <div>
                    <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                    </div>
                </div>
                </a>
            </div>

            <div
                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                data-te-ripple-init data-te-ripple-color="dark">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg"
                class="w-full align-middle transition duration-300 ease-linear" />
                <a href="#!">
                <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                    <div class="flex h-full items-end justify-start">
                    <h5 class="m-6 text-lg font-bold text-white">Genius Loci</h5>
                    </div>
                </div>
                <div>
                    <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                    </div>
                </div>
                </a>
            </div>

            <div
                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                data-te-ripple-init data-te-ripple-color="dark">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/045.jpg"
                class="w-full align-middle transition duration-300 ease-linear" />
                <a href="#!">
                <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                    <div class="flex h-full items-end justify-start">
                    <h5 class="m-6 text-lg font-bold text-white">Big Apple</h5>
                    </div>
                </div>
                <div>
                    <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                    </div>
                </div>
                </a>
            </div>

            <div
                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                data-te-ripple-init data-te-ripple-color="dark">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/047.jpg"
                class="w-full align-middle transition duration-300 ease-linear" />
                <a href="#!">
                <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                    <div class="flex h-full items-end justify-start">
                    <h5 class="m-6 text-lg font-bold text-white">Sun City</h5>
                    </div>
                </div>
                <div>
                    <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                    </div>
                </div>
                </a>
            </div>

            <div
                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                data-te-ripple-init data-te-ripple-color="dark">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/048.jpg"
                class="w-full align-middle transition duration-300 ease-linear" />
                <a href="#!">
                <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                    <div class="flex h-full items-end justify-start">
                    <h5 class="m-6 text-lg font-bold text-white">Paris flavor</h5>
                    </div>
                </div>
                <div>
                    <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                    </div>
                </div>
                </a>
            </div>

            <div
                class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                data-te-ripple-init data-te-ripple-color="dark">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/city/049.jpg"
                class="w-full align-middle transition duration-300 ease-linear" />
                <a href="#!">
                <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                    <div class="flex h-full items-end justify-start">
                    <h5 class="m-6 text-lg font-bold text-white">
                        Sky is the limit
                    </h5>
                    </div>
                </div>
                <div>
                    <div
                    class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]">
                    </div>
                </div>
                </a>
            </div>
        </div>
        {/* Learn More Button */}
        <div className='w-full flex justify-center mt-6'>
            <Link href="/portfolio" className="mb-2 inline-block rounded-[10px] bg-dark-grey/20 px-12 py-3 text-2xl md:font-medium font-three text-dark-grey shadow-sm transition duration-150 ease-in-out hover:bg-green/30 hover:shadow-xl md:mr-2 md:mb-0 border-[3px] border-dark-grey text-center"
                role="button">View our Full Portfolio
            </Link>
        </div>
  </div>
  )
}

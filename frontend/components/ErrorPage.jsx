import React from 'react'
import Link from 'next/link'

export default function ErrorPage() {
  return (
        <div className="flex flex-col w-full h-[75vh] justify-center xl:space-y-3 px-3 lg:px-0">
            <h1 data-aos="fade-in" data-aos-once={true} className="z-1 font-one font-bold text-lighter-grey text-5xl text-left leading-tight md:text-7xl lg:text-8xl lg:text-center">
                Page Not Found
            </h1>
             <h3 data-aos="fade-in" data-aos-once={true} className="font-two lg:w-1/2 lg:mx-auto font-bold text-xl md:text-2xl lg:text-center text-lighter-grey">
                Sorry, we couldn't find the page you are looking for. Try heading back to the home page.
            </h3>
            <div className="flex relative justify-center px-1 space-x-3 lg:space-x-20 mt-4">
                <Link href="/home" className="w-56 text-center mb-2 inline-block rounded-[20px] py-1.5 md:py-3 md:text-lg bg-green/10 text-lighter-grey pt-2.5 pb-2 text-md xl:text-md font-semibold shadow-sm transition duration-150 ease-in-out hover:shadow-xl md:mb-0 hover:bg-green/70 hover:text-white border-green border-2"
                    role="button">Home
                </Link>
                <Link href="/contact" className="w-56 text-center mb-2 inline-block rounded-[20px] py-1.5 md:py-3 md:text-lg text-lighter-grey bg-green/10 pt-2.5 pb-2 text-md xl:text-md font-semibold shadow-sm transition duration-150 ease-in-out hover:shadow-xl md:mb-0 hover:bg-green/70 hover:text-white border-green border-2"
                    role="button">Contact Us
                </Link>
            </div>
        </div>
  )
}

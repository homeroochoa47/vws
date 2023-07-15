import React from 'react'
import Link from 'next/link'
import { urlFor } from '@/lib/helpers'

export default function PortfolioSection({ data }) {
    
    return (
        <div className="py-12 md:py-20 w-[95%] xl:w-[85%] mx-auto">

            {/* Header */}
            <div className="flex flex-col lg:flex-row items-end mx-auto w-[95%] md:w-full mb-3 sm:mb-4 border-b-2 md:border-b-4 border-charcoal pb-2">
                <h2 className="w-full md:w-[70%] lg:w-3/5 xl:w-4/5 text-4xl md:text-5xl xl:text-7xl font-one font-semibold text-charcoal">
                Portfolio
                </h2>
                <p className="text-md md:text-lg lg:text-xl font-two text-dark-grey lg:pl-32">
                    Browse our previous work and explore our expertly installed commercial vehicle wraps. We’ve completed   projects for car fleets, vans, busses, food trucks, and much more.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {data.slice(0, 4).map((item, index) => (
                    <div
                    key={index}
                    className="relative overflow-hidden rounded-lg object-cover shadow-lg hover:scale-[101%] transition duration-450 ease-in-out">
                        <img src={urlFor(item.leadingImage).url()}
                        className="w-full align-middle object-cover aspect-[5/4]" />
                        <Link href={`/vehicle-wrap-portfolio/${item.slug.current}`}>
                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                                <div className="flex w-full h-full items-end justify-start bg-black/[15%] hover:bg-black/0 transition duration-450 ease-in-out">
                                    <h5 className="m-2 md:m-6 text-lg md:text-xl drop-shadow-xl font-bold text-white">
                                    {item.title}
                                    </h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            {/* Learn More Button */}
            <div className='w-full flex justify-center mt-6'>
                <Link href="/vehicle-wrap-portfolio" className="mb-2 inline-block rounded-[20px] px-8 py-1.5 md:px-12 md:py-3 md:text-lg xl:text-xl bg-charcoal/60 text-lighter-grey pt-2.5 pb-2 text-md xl:text-md font-semibold shadow-sm transition duration-150 ease-in-out hover:shadow-xl md:mr-2 md:mb-0 hover:bg-green/70 hover:text-white border-green border-2"
                    role="button">View our Full Portfolio
                </Link>
            </div>
        </div>
  )
}

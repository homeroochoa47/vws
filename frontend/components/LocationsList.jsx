import Link from "next/link"
import { urlFor } from "@/lib/helpers"

export default function LocationsList({ data }) {

    return (
        <div className='py-10 lg:py-20 w-[95%] xl:w-[85%] mx-auto'>
            
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-end mx-auto w-[95%] md:w-full mb-8 sm:mb-4 border-b-4 border-darkest-grey md:pb-2">
                <h2 className="w-full md:w-[70%] lg:w-3/5 xl:w-4/5 text-3xl font-semibold md:text-4xl xl:text-6xl md:leading-tight text-charcoal font-one">
                Locations We Serve
                </h2>
                <p className="text-md md:text-lg lg:text-xl font-two text-dark-grey lg:w-[50%]">
                    With our concierge service, we are able to offer our services throughout southern california. Browse some of our most popular locations below!
                </p>
            </div>

            {/* Grid of location items */}
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-[90%] mx-auto"> 
                {data.locationList.map((item, index) => (
                item.hasOwnPage ? (
                    <Link key={index} class="group flex flex-col bg-charcoal border shadow-sm rounded-xl hover:shadow-md transition" href={`/vehicle-wrap-locations/${item.slug.current}`}>
                        <div class="p-4 md:p-5">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <img class="h-[2.375rem] w-[2.375rem] rounded-full" src={urlFor(item.locationImage).url()} alt="Image Description"/>
                                    <div class="ml-3">
                                        <h3 class="text-lg group-hover:text-green font-semibold text-lighter-grey transition duration-250 ease-in-out">
                                        {item.locationName}, CA
                                        </h3>
                                    </div>
                                </div>
                                <div class="pl-3">
                                    <svg class="w-3.5 h-3.5 text-gray-500" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                ) : (
                    <div key={index} class="group flex flex-col bg-charcoal border shadow-sm rounded-xl hover:shadow-md transition">
                        <div class="flex h-full p-4 md:p-5">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <h3 class="text-lg font-semibold text-lighter-grey transition duration-250 ease-in-out">
                                    {item.locationName}, CA
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                ))}
            </div>
        </div>
    )
}

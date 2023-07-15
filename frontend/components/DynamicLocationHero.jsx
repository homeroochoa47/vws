import { urlFor } from "@/lib/helpers"
import Link from "next/link"

export default function DynamicLocationHero({ data }) {
  return (
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-48">
      <div class="grid lg:grid-cols-8 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div class="lg:col-span-4">
            <h1 className="text-2xl md:text-3xl font-one text-charcoal font-bold tracking-tight lg:text-4xl xl:text-5xl">Vehicle Wrap Services in <span className='text-green'>{data.locationName}, CA</span></h1>
             <p class="my-2 text-sm sm:text-md xl:text-lg md:font-light text-charcoal font-two">{data.locationCaption}</p>
    
            <Link href="/contact" className="mb-2 inline-block rounded-[20px] bg-charcoal/60 px-8 py-1.5 md:px-12 md:py-2 text-sm lg:text-md xl:text-lg text-white shadow-sm transition duration-150 ease-in-out hover:bg-charcoal hover:shadow-xl md:mb-0 border-[1px] border-white font-two"
                role="button">Get Started
            </Link>
    
        </div>
    
        <div class="lg:col-span-4 mt-6 lg:mt-0">
          <img class="w-full rounded-xl object-cover aspect-[5/4]" src={urlFor(data.locationImage).url()} alt={data.locationImage.alt}/>
        </div>
      </div>
    </div>
  )
}

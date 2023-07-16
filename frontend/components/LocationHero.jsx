import { urlFor } from "@/lib/helpers"
import Link from "next/link"

export default function LocationHero({ data }) {
    
    return (
        <div className='flex w-full px-2 lg:px-0 py-8 lg:py-24 relative bg-cover bg-center' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)), url(${urlFor(data[0].heroSection.heroImage).url()})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>

            <div class="lg:mt-5 max-w-4xl flex flex-col mx-auto text-center px-2 lg:px-20 py-4 lg:py-16 rounded-xl bg-charcoal/60 backdrop-blur-xl">
                <h1 class="block font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mx-auto text-green">
                    Areas of Service
                </h1>
                <p class="text-md lg:text-lg xl:text-xl text-lighter-grey">
                    We offer our services throughout Southern California, and with our convenient concierge service, we'll pick up and drop off your vehicles at the location of your choice. Reach out for a quote to find out more!
                </p>
                <Link href="#contact-section" className="w-54 mt-2 inline-block rounded-[20px] bg-green/30 px-8 py-1.5 md:px-12 md:py-3 md:text-lg text-lighter-grey shadow-sm transition duration-150 ease-in-out hover:bg-charcoal hover:shadow-xl border-[1px] border-lighter-grey font-two"
                    role="button">Get Started
                </Link>
            </div>
        </div>
  )
}

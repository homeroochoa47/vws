import { urlFor } from "@/lib/helpers"

export default function ServicesHero({ data, heroBg }) {
    return (
        <div className='flex w-full pt-32'>
            <div className="h-full w-full px-2 lg:px-0 py-8 lg:py-24 bg-[url(/portfolio-bg.svg)] bg-cover bg-center" 
            style={{backgroundImage: `url(${urlFor(heroBg.heroImage).url()})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'}}>
                <div class="lg:mt-5 max-w-4xl flex flex-col mx-auto text-center px-2 lg:px-20 py-6 lg:py-16 rounded-xl bg-dark-grey/70 backdrop-blur-xl">
                    <h1 class="block font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mx-auto text-green">
                        Our Portfolio
                    </h1>
                    <p class="text-md lg:text-lg xl:text-xl text-lighter-grey">Browse our previous work and explore our expertly installed commercial vehicle wraps. We’ve completed projects for car fleets, vans, busses, food trucks, and much more.</p>
                </div>
            </div>
        </div>
  )
}

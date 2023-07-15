import { urlFor } from "@/lib/helpers"

export default function ServicesHero({ data, heroBg }) {

    return (
        <div className='flex w-full pt-32'>
            <div className="h-full w-full py-10 md:py-20" 
            style={{ backgroundImage: `url(${urlFor(heroBg.heroSection.heroImage).url()})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover' }}>
                <div class="sm:max-w-[85vw] mx-auto px-3 sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                        <div class="lg:col-span-3 bg-charcoal/70 backdrop-blur-xl p-3 md:p-6 rounded-xl">
                            <h1 class="block text-3xl font-bold text-green sm:text-4xl md:text-5xl lg:text-5xl">Commercial {data.serviceName}</h1>
                            <p class="mt-1 md:mt-3 text-md md:text-lg text-light-grey">{data.heroCaption}</p>
                        </div>
                        <div class="lg:col-span-4 mt-10 lg:mt-0">
                            <img class="w-full rounded-xl" src={urlFor(data.pageHeroImage).url()} alt="Image Description"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

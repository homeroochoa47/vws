import { urlFor } from "@/lib/helpers"

export default function ServicesHero(props) {
    const {data} = props

    return (
        <div className='flex w-full pt-32'>
            <div className="h-full w-full py-20 bg-[url(/services-bg.svg)] bg-cover bg-center">
                <div class="max-w-[85vw] mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                        <div class="lg:col-span-3 bg-charcoal p-6 rounded-xl">
                            <h1 class="block text-3xl font-bold text-green sm:text-4xl md:text-5xl lg:text-5xl dark:text-white">Commercial {data.serviceName}</h1>
                            <p class="mt-3 text-lg text-gray-800 dark:text-gray-400">{data.heroCaption}</p>
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

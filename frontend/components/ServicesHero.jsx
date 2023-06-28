import { urlFor } from "@/lib/helpers"

export default function ServicesHero(props) {
    const {data} = props
    console.log(data)
  return (
       <div className='flex w-full pt-32 pb-20'>
        <div className="h-full w-full py-10 bg-[url(/services-bg.svg)] bg-cover bg-center">
            {/* Jumbotron  */}
            <div className="relative flex items-center h-full px-4 md:px-6 lg:py-12 lg:px-12">
                <div className="w-full mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div className="space-y-2 mx-auto md:mx-0 w-full order-last md:order-first bg-charcoal p-10 rounded-xl">
                            <h1 className="mt-0 text-5xl font-one text-green font-bold tracking-tight lg:text-6xl xl:text-7xl">
                                Commercial {data.serviceName}
                            </h1>
                            <p className="mb-4 text-lg md:text-xl md:font-light text-light-grey font-two leading-tight">
                                Elevate Your Tesla's Look: Discover Matte Wraps for Model Y Model 3, Model X, and Model S in Matte Black and More
                            </p>
                        </div>

                        {/* Hero Image */}
                        <div className="mt-16 md:mt-0 2xl:w-[110%]">
                            <img src={urlFor(data.pageHeroImage).url()}
                            className="w-[90%] sm:w-[70%] md:w-full mx-auto lg:mx-0 rounded-lg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
  )
}

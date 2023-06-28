import Link from 'next/link'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { urlFor } from "@/lib/helpers"

export default function HomeHero(props) {
    const {data} = props
    
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
          drag: false,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              // Uncomment to allow for mouseover pause
              // if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 1750)
            }
            slider.on("created", () => {
              // Uncomment to allow for mouseover pause
              // slider.container.addEventListener("mouseover", () => {
              //   mouseOver = true
              //   clearNextTimeout()
              // })
              // slider.container.addEventListener("mouseout", () => {
              //   mouseOver = false
              //   nextTimeout()
              // })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )

    // const bgUrl = urlFor(data.backgroundImage).url()

    return (
        <div className={`bg-[url(/home-bg.svg)] md:bg-cover bg-left md:bg-center py-20`}>
            {/* Jumbotron  */}
            <div className="relative flex items-center h-full px-4 md:px-6 lg:py-12 lg:px-12">
                <div className="w-full mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mt-24">
                    <div className="grid items-center md:grid-cols-2">
                        <div className="mt-2 md:mt-12 lg:mt-0 space-y-2 mx-auto md:mx-0 w-full order-last md:order-first">
                            <h3 className="font-three tracking-normal font-medium text-xl md:text-2xl mb-1 text-light-grey italic">
                                {data.topHeader}
                            </h3>
                            <h1 className="mt-0 text-5xl font-one text-off-white font-bold tracking-tight lg:text-6xl xl:text-7xl">
                                {data.mainCaption}
                                <div ref={sliderRef} className="keen-slider text-green text-8xl">
                                    {data.vehicleTypes.map((item, index) => (
                                      <div key={index} className={`keen-slider__slide number-slide{${index}}`}>{item}</div>
                                    ))}
                                </div>
                            </h1>
                            <p className="mb-4 text-lg md:text-xl md:font-light text-off-white font-two leading-tight">
                              {data.followingCaption}
                            </p>
                            <Link href="/contact" className="mb-2 inline-block rounded-[20px] bg-dark-grey/30 px-12 py-3 text-lg leading- text-bg-lightest shadow-sm transition duration-150 ease-in-out hover:bg-charcoal hover:shadow-xl md:mr-2 md:mb-0 border-[1px] border-off-white font-two"
                                role="button">Get Started
                            </Link>
                            <Link href="/portfolio" className="mb-2 inline-block rounded-[20px] bg-dark-grey/30 px-12 py-3 text-lg leading- text-bg-lightest shadow-sm transition duration-150 ease-in-out hover:bg-charcoal hover:shadow-xl md:mr-2 md:mb-0 border-[1px] border-off-white font-two"
                                role="button">See Our Work
                            </Link>
                        </div>

                        {/* Hero Image */}
                        <div className="mt-16 md:mt-0 2xl:w-[110%]">
                            <img src={urlFor(data.heroImage).url()}
                            className="w-[90%] sm:w-[70%] md:w-full mx-auto lg:mx-0 rounded-lg rotate-[-1deg]" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Logo Cloud */}
            <div className="text-center bg-dark-grey drop-shadow-services-box mt-10 py-12 2xl:py-4 w-[80%] mx-auto rounded-[50px]">
                <h2 className="mb-2 text-3xl text-two text-light-grey font-bold">
                    Serving small businesses to Fortune 500 companies
                </h2>
                <div className="flex flex-wrap items-center justify-evenly">
                  {data.companyLogos.map((item, index) => (
                    <div key={index} className="mb-1 lg:mb-0 w-[18%]">
                      <img src={urlFor(item).url()}
                    className="px-6 dark:brightness-150 md:px-6 transition duration-250 ease-out hover:scale-105" alt="Client Company logo" />
                    </div>
                  ))}
                </div>
            </div>
        </div>
    )
};
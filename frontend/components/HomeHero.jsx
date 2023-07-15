import Link from 'next/link'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { urlFor } from "@/lib/helpers"

export default function HomeHero({ data }) {
    
    // Logic for the dynamic text w/Keen Slider
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
        <div className={`bg-[url(/home-bg.svg)] bg-cover bg-left md:bg-center py-10 md:py-20`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)), url(${urlFor(data.backgroundImage).url()})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
            {/* Jumbotron  */}
            <div className="relative flex items-center h-full px-4 md:px-6 lg:py-12 lg:px-8 py-1.5 md:px-12md:">
                <div className="w-full mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mt-24">
                    <div className="flex flex-col lg:flex-row">
                        <div className="mt-2 md:mt-12 lg:mt-0 sm:space-y-2 mx-auto md:mx-0 w-[95%] md:w-full lg:w-1/2">
                            <h3 className="font-three tracking-normal font-medium text-xl md:text-2xl mb-1 text-light-grey italic">
                                <span className='text-green'>Commercial</span> Vehicle Wrap Service
                            </h3>
                            <h1 className="mt-0 text-4xl md:text-5xl font-one text-lighter-grey font-bold tracking-tight lg:text-6xl xl:text-7xl">
                                {data.mainCaption}
                                <div ref={sliderRef} className="keen-slider text-green text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                                    {data.vehicleTypes.map((item, index) => (
                                      <div key={index} className={`keen-slider__slide number-slide{${index}}`}>{item}</div>
                                    ))}
                                </div>
                            </h1>
                            <p className="mb-4 w-[80%] md:w-full lg:w-[80%] text-lg md:text-xl md:font-light text-lighter-grey font-two leading-tight">
                              {data.followingCaption}
                            </p>
                            <Link href="/contact" className="mb-2 inline-block rounded-[20px] px-8 py-1.5 md:px-12 md:py-3 md:text-lg bg-green/10 text-lighter-grey pt-2.5 pb-2 text-md xl:text-md font-semibold shadow-sm transition duration-150 ease-in-out hover:shadow-xl md:mr-2 md:mb-0 hover:bg-green/70 hover:text-white border-green border-2"
                                role="button">Get Started
                            </Link>
                            <Link href="/vehicle-wrap-portfolio" className="mb-2 inline-block rounded-[20px] px-8 py-1.5 md:px-12 md:py-3 md:text-lg text-lighter-grey bg-green/10 pt-2.5 pb-2 text-md xl:text-md font-semibold shadow-sm transition duration-150 ease-in-out hover:shadow-xl md:mr-2 md:mb-0 hover:bg-green/70 hover:text-white border-green border-2"
                                role="button">See Our Work
                            </Link>
                        </div>

                        {/* Hero Image */}
                        <div className="mt-10 lg:mt-0 md:w-[80%] mx-auto lg:w-1/2">
                            <img src={urlFor(data.heroImage).url()}
                            className="w-[90%] sm:w-[70%] md:w-full mx-auto lg:mx-0 rounded-lg rotate-[-1deg]" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Logo Cloud */}
            <div className="text-center bg-dark-grey drop-shadow-services-box mt-10 py-12 2xl:py-4 w-[95%] md:w-[80%] mx-auto rounded-[50px]">
                <h2 className="mb-2 text-xl md:text-2xl lg:text-3xl text-two text-light-grey font-bold px-3 sm:px-0">
                    Serving small businesses to Fortune 500 companies
                </h2>
                <div className="flex flex-wrap gap-y-8 md:gap-y-0 items-center justify-evenly">
                  {data.companyLogos.map((item, index) => (
                    <div key={index} className="mb-1 lg:mb-0 w-[50%] sm:w-48 md:w-[18%]">
                      <img src={urlFor(item).url()}
                    className="px-6 md:px-6 transition duration-250 ease-out hover:scale-105" alt="Client Company logo" />
                    </div>
                  ))}
                </div>
            </div>
        </div>
    )
};
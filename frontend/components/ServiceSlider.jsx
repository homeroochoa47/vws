import {useState, useRef, React} from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Link from "next/link"
import ServiceCard from "./cards/ServiceCard"
// import { urlFor } from "@/lib/helpers"

function Arrow(props) {
    const disabeld = props.disabled ? "arrow--disabled" : ""
    return (
        <img
            onClick={props.onClick}
            className={`block arrow w-[45px] border-2 border-green shadow-sm transition duration-150 ease-in-out hover:bg-green hover:shadow-xl aspect-square cursor-pointer z-10 p-1 rounded-md top-[45%] mt-4 ${
            props.left ? "arrow--left bg-darkest-blue/60" : "right-1 arrow--right bg-darkest-blue"
            } ${disabeld}`} 
            src={`${props.left? "/angle-left-solid.svg": "/angle-right-solid.svg" }`}
            >
        </img>
    )
}


export default function ServiceSlider(props) {
    const {data} = props
    console.log(data)

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        initial: 0,
        slides: {
            perView: 1.25,
            spacing: 15,
        },
        breakpoints: {
            '(max-width: 1536px)': {
                slides: {
                    perView: 1,
                    spacing: 10,
                },
            },
            '(max-width: 1280px)': {
                slides: {
                    perView: 1.1,
                    spacing: 15,
                },
            },
            '(max-width: 1024px)': {
                slides: {
                    origin: "center",
                    perView: 1.8,
                    spacing: 15,
                },
            },
            '(max-width: 800px)': {
              slides: {
                  origin: "center",
                  perView: 1.25,
                  spacing: 15,
              },
            },
            '(max-width: 674px)': {
                slides: {
                    origin: "center",
                    perView: 1.2,
                    spacing: 15,
                },
            },
            '(max-width: 550px)': {
                slides: {
                    origin: "center",
                    perView: 1,
                    spacing: 15,
                },
            },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })
    return (
        <div className="flex flex-col lg:flex-row lg:-mr-4 lg:ml-auto lg:w-[90%] 2xl:w-[82.5%] pt-8 md:py-16 mx-2 px-5 lg:px-0 lg:pl-8 justify-end items-center bg-charcoal rounded-[20px]"> 
            <div className="flex flex-col mx-auto px-4 lg:px-0 mb-6 lg:mb-0 sm:text-center lg:text-left ">
                <h2 className="lg:w-[80%] text-5xl font-one font-semibold text-green xl:leading-tighter xl:text-6xl mb-2 tracking-tight">
                    Our Services
                </h2>
                <p className="text-lg lg:text-xl text-white leading-tight font-three font-bold md:px-8 lg:px-0 lg:w-[80%]">
                We take pride in offering a comprehensive range of custom vinyl wrap services designed to cater to all your commercial vehicle needs.
                <br />
                <span className="text-light-grey font-medium">
                    Whether you have a fleet of trucks, vans, trailers, buses, or any other type of commercial vehicle, we have the expertise to transform them into captivating and professional mobile advertisements.
                </span>
                </p>
                <div className="flex space-x-3 justify-end lg:justify-start sm:w-[90%] lg:w-full">
                
                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                            />

                            <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                            />
                        </>
                    )}
                </div>
            </div>

            <div className="navigation-wrapper w-full lg:w-[60%] xl:w-1/2">
                <div ref={sliderRef} className="keen-slider">
                    {data.services.map((item, index) => {
                    return <ServiceCard props={item} index={index} key={index}/>
                    })}
                </div>
            <div className="flex w-full justify-center md:justify-end md:px-24 my-3">
                <Link href="/contact" className="w-full sm:w-auto mb-2 inline-block rounded-[20px] bg-green/10 px-12 py-2 text-2xl font-medium font-three leading-normal text-light-grey shadow-sm transition duration-150 ease-in-out hover:bg-dark-grey hover:shadow-xl md:mb-0 border-[1px] border-off-white text-center"
                    role="button">Learn More
                </Link>
            </div>
        </div>
    </div>
  )
}
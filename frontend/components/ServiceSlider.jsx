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

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        initial: 0,
        slides: {
            perView: 1.1,
            spacing: 15,
        },
        breakpoints: {
            '(max-width: 1536px)': {
                slides: {
                    perView: 1.1,
                    spacing: 10,
                },
            },
            '(max-width: 1280px)': {
                slides: {
                    perView: 1.25,
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
        <div className="flex flex-col lg:flex-row lg:-mr-4 lg:ml-auto lg:w-[90%] py-8 md:py-16 mx-2 px-3 md:px-5 lg:px-0 lg:pl-8 justify-end items-center bg-charcoal/70 backdrop-blur-2xl rounded-[20px] drop-shadow-services-box"> 
            <div className="flex flex-col mx-auto mb-6 lg:mb-0 md:text-center lg:text-left ">
                <h2 className="lg:w-[80%] text-4xl md:text-5xl font-one font-semibold text-green xl:leading-tighter xl:text-6xl mb-2 tracking-tight">
                    Our Services
                </h2>
                <p className="text-md md:text-lg lg:text-xl text-lighter-grey leading-tight font-three font-bold md:px-8 lg:px-0 lg:w-[80%]">
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

            <div className="navigation-wrapper w-full lg:w-[60%]">
                <div ref={sliderRef} className="keen-slider">
                    {data.services.map((item, index) => {
                    return <ServiceCard props={item} index={index} key={index}/>
                    })}
                </div>
        </div>
    </div>
  )
}
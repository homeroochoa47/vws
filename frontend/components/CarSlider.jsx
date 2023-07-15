import {React, useState} from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { urlFor } from "@/lib/helpers"
import Link from "next/link"

function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active")
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
      })
    })
  }
}


function Arrow(props) {
  const disabeld = props.disabled ? "arrow--disabled" : ""
  return (
      <img
          onClick={props.onClick}
          className={`arrow absolute w-[25px] sm:w-[35px] cursor-pointer z-10 p-1 rounded-md top-[45%] sm:top-[40%] mt-4 ${
          props.left ? "arrow--left left-2 lg:left-10" : "right-2 lg:right-10 arrow--right"
          } ${disabeld}`} 
          src={`${props.left? "/angle-left-solid.svg": "/angle-right-solid.svg" }`}
          >
      </img>
  )
}

export default function CarSlider({ data }) {

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: false,  
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 5,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <div className="px-2 sm:px-10 xl:px-32 py-24 lg:py-32 relative max-w-[1440px] mx-auto pb-8">

      {loaded && instanceRef.current && (
        <div className='mb-2'>
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
        </div>
      )}

      <h1 className='text-lg sm:text-xl md:text-3xl mb-1 font-one font-medium text-charcoal'>{data[0].title}</h1>
      <div ref={sliderRef} className="keen-slider mb-5">
        {data[0].supportingImages.map((item, index) => (
          <div className={`keen-slider__slide number-slide${index} flex flex-col relative xl:h-[80vh]`} key={index}>
            <img
              className={`object-cover xl:h-full`}
              src={urlFor(item.vehicleImage).url()}
              alt={item.vehicleImage.alt}
            />
            <div className='absolute bottom-0 w-full flex flex-col bg-gradient-to-t via-black/50 from-black pt-5'>
            <h4 className="md:text-xl text-light-grey font-two font-medium z-10 px-1 2xl:px-2">{item.vehicleImage.caption}</h4>
            </div>
          </div>
        ))}
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {data[0].supportingImages.map((item, index) => (
          <img
            key={index}
            className={`keen-slider__slide number-slide${index} cursor-pointer`}
            src={urlFor(item.vehicleImage).url()}
            alt={item.alt}
          />
        ))}
      </div>
      
      <div className="flex relative md:px-1 space-x-3 lg:space-x-12 mt-4">
          <Link href="/contact" className="mb-2 inline-block rounded-[20px] bg-green/80 px-8 py-1.5 md:px-12 md:py-3 md:text-2xl text-charcoal shadow-sm transition duration-150 ease-in-out hover:bg-green hover:shadow-xl md:mr-2 md:mb-0 border-[1px] border-lighter-grey font-two mr-3"
            role="button">Get Started
            </Link>
        </div>
    </div>
  )
}
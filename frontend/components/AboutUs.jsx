import { urlFor } from "@/lib/helpers";
import Link from "next/link";

export default function AboutUs(props) {
    const {data} = props

    return (
        <div className="bg-[url(/about-bg.svg)] flex justify-center relative">
            <div className='w-[90%] xl:container relative items-center pt-32 pb-24 md:pt-32 md:pb-20'>
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center">

                    {/* Image */}
                    <img src={urlFor(data.aboutSectionImage).url()} className="md:w-[60%] lg:w-[40%] xl:w-[50%] rounded-[30px] aspect-[5/4] object-cover border-[5px] border-light-blue mt-4 lg:mt-0 drop-shadow-hero-header" />

                    {/* Text */}
                    <div className="mb-6 w-full px-12 lg:w-6/12">
                        <h4 className="pr-6 text-red font-three font-semibold text-xl">
                            Our Story
                        </h4>
                        <h2 className="mb-1 lg:mb-6 text-5xl font-one text-charcoal leading-tighter font-bold">
                        Thousands of vehicles wrapped, and we’re only getting started
                        </h2>
                        <div className="flex flex-wrap ">
                            <div className="mb-2 lg:mb-12 w-full lg:w-6/12">
                                <div className="flex">
                                    <div className="grow">
                                    <p className="mb-1 text-6xl font-one text-red font-bold">15+</p>
                                    <p className="font-three text-xl leading-tight text-dark-grey font-extrabold">
                                        Years of Experience
                                    </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-2 lg:mb-12 w-full lg:w-6/12">
                                <div className="flex">
                                    <div className="grow">
                                    <p className="mb-1 text-6xl font-one text-red font-bold">1000+</p>
                                    <p className="font-three text-xl leading-tight text-dark-grey font-extrabold">
                                        Vehicles Wrapped
                                    </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-2 lg:mb-12 w-full lg:w-6/12">
                                <div className="flex">
                                    <div className="grow">
                                    <p className="mb-1 text-6xl font-one text-red font-bold">200+</p>
                                    <p className="font-three text-xl leading-tight text-dark-grey font-extrabold">
                                        Satisfied Clients
                                    </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-2 lg:mb-12 w-full lg:w-6/12">
                                <div className="flex">
                                    <div className="grow">
                                    <p className="mb-1 text-6xl font-one text-red font-bold">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="#C65956" height="1em" viewBox="0 0 640 512"><path d="M0 241.1C0 161 65 96 145.1 96c38.5 0 75.4 15.3 102.6 42.5L320 210.7l72.2-72.2C419.5 111.3 456.4 96 494.9 96C575 96 640 161 640 241.1v29.7C640 351 575 416 494.9 416c-38.5 0-75.4-15.3-102.6-42.5L320 301.3l-72.2 72.2C220.5 400.7 183.6 416 145.1 416C65 416 0 351 0 270.9V241.1zM274.7 256l-72.2-72.2c-15.2-15.2-35.9-23.8-57.4-23.8C100.3 160 64 196.3 64 241.1v29.7c0 44.8 36.3 81.1 81.1 81.1c21.5 0 42.2-8.5 57.4-23.8L274.7 256zm90.5 0l72.2 72.2c15.2 15.2 35.9 23.8 57.4 23.8c44.8 0 81.1-36.3 81.1-81.1V241.1c0-44.8-36.3-81.1-81.1-81.1c-21.5 0-42.2 8.5-57.4 23.8L365.3 256z"/></svg>
                                    </p>
                                    <p className="font-three text-xl leading-tight text-dark-grey font-extrabold">
                                        Wrap Design Possibilities
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

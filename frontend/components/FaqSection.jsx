import { urlFor } from "@/lib/helpers"
import Link from "next/link";
import dynamic from "next/dynamic"
const DynamicFaq = dynamic(() => import("./cards/FaqCard"), { ssr: false });

export default function FaqSection(props) {
    const { data } = props

    return (
        <div className={`bg-[url(/faq-bg.svg)] bg-cover h-auto py-20`}>

            {/* If the props contain an image, use the first header */}
                <div className="px-3 md:px-10 lg:px-0 relative flex items-center h-full text-center lg:pr-12 lg:text-left w-[95%] mx-auto justify-between">
                    <div className="w-full">
                        <div className="grid items-center lg:grid-cols-2">
                            <div className="flex flex-col w-[95%]">
                                <h2 className="text-4xl md:text-5xl font-one font-bold text-green pb-2">
                                    Have More Questions?
                                </h2>
                                <h5 className="text-xl text-lighter-grey font-three font-bold border-b-4 border-green pb-2">
                                    Check out our frequently asked questions, or contact our team for more information!
                                </h5>

                                {/* Image */}
                                <img src={urlFor(data.faqSectionImage).url()} className="rounded-[30px] aspect-[5/4] object-cover border-[2px] border-light-grey mt-4 lg:mt-4" />
                            </div>

                            {/* Full FAQ container */}
                            <div className="ml-auto w-[95%] text-left">
                                <DynamicFaq/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Learn More Button */}
                <div className='w-full flex justify-center pt-8'>
                    <Link href="/contact" className="mb-2 inline-block rounded-[10px] bg-dark-grey/20 px-12 py-3 text-2xl md:font-medium font-three text-lighter-grey shadow-sm transition duration-150 ease-in-out hover:bg-green/30 hover:shadow-xl md:mr-2 md:mb-0 border-[2px] border-lighter-grey text-center"
                        role="button">Contact Us
                    </Link>
                </div>
        </div>
    )
}
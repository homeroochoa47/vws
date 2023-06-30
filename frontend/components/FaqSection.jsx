import { urlFor } from "@/lib/helpers"
import Link from "next/link";

export default function FaqSection(props) {
    const { data } = props

    return (
        <div className={`bg-[url(/faq-bg.svg)] bg-cover h-auto py-5`}>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="flex flex-col w-full mb-7 border-b-2 border-green">
                    <h2 class="text-2xl font-semibold md:text-4xl xl:text-6xl md:leading-tight text-green font-one">Have More Questions?</h2>
                    <p class="mt-1 hidden md:block text-light-grey text-lg xl:text-xl">Check out our frequently asked questions, or contact our team for more information!</p>
                </div>
                <div class="grid md:grid-cols-5 gap-10">
                    <div class="md:col-span-2">
                    <div class="w-full">
                        <img src={urlFor(data.faqSectionImage).url()} className="rounded-[30px] aspect-[5/4] object-cover border-light-grey" />
                    </div>
                    </div>

                    <div class="md:col-span-3">
                        <div class="hs-accordion-group divide-y-[2px] divide-light-grey drop-shadow-services-box">

                        {/* Accordion Item */}
                        <div class="hs-accordion active bg-charcoal first:rounded-t-lg last:rounded-b-lg" id="hs-bordered-heading-one">
                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 text-xl font-three inline-flex items-center gap-x-3 w-full font-semibold text-left text-lighter-grey transition py-6 px-5 hover:text-green ease-in-out duration-100" aria-controls="hs-basic-bordered-collapse-one">
                                <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-light-grey group-hover:text-green" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M8 15.36L8 2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-light-grey group-hover:text-green" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                How long does a vehicle wrap last?
                            </button>
                            <div id="hs-basic-bordered-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-one">
                                <div class="pb-4 px-5">
                                    <p class="text-light-grey">
                                    <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item */}
                        <div class="hs-accordion bg-charcoal first:rounded-t-lg last:rounded-b-lg" id="hs-bordered-heading-two">
                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 text-xl font-three inline-flex items-center gap-x-3 w-full font-semibold text-left text-lighter-grey transition py-6 px-5 hover:text-green ease-in-out duration-100" aria-controls="hs-basic-bordered-collapse-two">
                                <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-light-grey group-hover:text-green" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M8 15.36L8 2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-light-grey group-hover:text-green" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                Do you design the wraps?
                            </button>
                            <div id="hs-basic-bordered-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-two">
                                <div class="pb-4 px-5">
                                    <p class="text-light-grey">
                                    <em>This is the second item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item */}
                        <div class="hs-accordion bg-charcoal first:rounded-t-lg last:rounded-b-lg" id="hs-bordered-heading-two">
                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 text-xl font-three inline-flex items-center gap-x-3 w-full font-semibold text-left text-lighter-grey transition py-6 px-5 hover:text-green ease-in-out duration-100" aria-controls="hs-basic-bordered-collapse-two">
                                <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-light-grey group-hover:text-green" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M8 15.36L8 2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-light-grey group-hover:text-green" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                Does the wrap damage the paint?
                            </button>
                            <div id="hs-basic-bordered-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-two">
                                <div class="pb-4 px-5">
                                    <p class="text-light-grey">
                                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item */}
                        <div class="hs-accordion bg-charcoal first:rounded-t-lg last:rounded-b-lg" id="hs-bordered-heading-two">
                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 text-xl font-three inline-flex items-center gap-x-3 w-full font-semibold text-left text-lighter-grey transition py-6 px-5 hover:text-green ease-in-out duration-100" aria-controls="hs-basic-bordered-collapse-two">
                                <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-light-grey group-hover:text-green" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M8 15.36L8 2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-light-grey group-hover:text-green" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                How long does the installation process take?
                            </button>
                            <div id="hs-basic-bordered-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-two">
                                <div class="pb-4 px-5">
                                    <p class="text-light-grey">
                                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item */}
                        <div class="hs-accordion bg-charcoal first:rounded-t-lg last:rounded-b-lg" id="hs-bordered-heading-two">
                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 text-xl font-three inline-flex items-center gap-x-3 w-full font-semibold text-left text-lighter-grey transition py-6 px-5 hover:text-green ease-in-out duration-100" aria-controls="hs-basic-bordered-collapse-two">
                                <svg class="hs-accordion-active:hidden hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block w-3 h-3 text-light-grey group-hover:text-green" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                    <path d="M8 15.36L8 2.35999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                <svg class="hs-accordion-active:block hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 hidden w-3 h-3 text-light-grey group-hover:text-green" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 8.85999L14.5 8.85998" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                                </svg>
                                Can I customize the design of the vehicle wrap?
                            </button>
                            <div id="hs-basic-bordered-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-two">
                                <div class="pb-4 px-5">
                                    <p class="text-light-grey">
                                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
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

import { urlFor } from "@/lib/helpers"
import Link from "next/link";

export default function FaqSection({ data }) {
    return (
        <div className={`h-auto md:py-5`} style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25)), url(${urlFor(data.heroImage).url()})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="flex flex-col w-full mb-3 md:mb-7 border-b-2 border-green">
                    <h2 class="text-3xl font-semibold md:text-4xl xl:text-6xl md:leading-tight text-green font-one">Have More Questions?</h2>
                    <p class="mt-1 text-lighter-grey text-md md:text-lg xl:text-xl">Check out our frequently asked questions, or contact our team for more information!</p>
                </div>
                <div class="grid md:grid-cols-5 gap-4">
                    <div class="md:col-span-2 order-last md:order-first">
                        <div class="w-full">
                            <img src={urlFor(data.faqSectionImage).url()} className="rounded-[30px] aspect-[5/4] object-cover border-light-grey" />
                        </div>
                    </div>

                    <div class="md:col-span-3">
                        <div class="hs-accordion-group divide-y-[2px] divide-light-grey drop-shadow-services-box">

                        {/* Accordion Item */}
                        <div class="hs-accordion active bg-charcoal first:rounded-t-lg last:rounded-b-lg" id="hs-bordered-heading-one">
                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 text-lg md:text-xl font-three inline-flex items-center gap-x-3 w-full font-semibold text-left text-lighter-grey transition py-3 md:py-6 px-2.5 md:px-5 hover:text-green ease-in-out duration-100" aria-controls="hs-basic-bordered-collapse-one">
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
                                <div class="pb-4 px-2.5 md:px-5">
                                    <p class="text-light-grey">
                                    A professionally installed and well-maintained vehicle wrap typically lasts between 3 to 7 years. Factors such as material quality, installation, and upkeep can influence its lifespan. Our commitment to using top-notch materials and expert installation techniques ensures that your wrap remains visually impressive and durable over time.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item */}
                        <div class="hs-accordion bg-charcoal first:rounded-t-lg last:rounded-b-lg" id="hs-bordered-heading-two">
                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 text-lg md:text-xl font-three inline-flex items-center gap-x-3 w-full font-semibold text-left text-lighter-grey transition py-3 md:py-6 px-2.5 md:px-5 hover:text-green ease-in-out duration-100" aria-controls="hs-basic-bordered-collapse-two">
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
                                <div class="pb-4 px-2.5 md:px-5">
                                    <p class="text-light-grey">
                                    Yes, we offer comprehensive design services for vehicle wraps. Our skilled team of designers will work closely with you to understand your brand, goals, and vision. We'll then create custom wrap designs that effectively communicate your message and capture the attention of your target audience.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item */}
                        <div class="hs-accordion bg-charcoal first:rounded-t-lg last:rounded-b-lg" id="hs-bordered-heading-two">
                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 text-lg md:text-xl font-three inline-flex items-center gap-x-3 w-full font-semibold text-left text-lighter-grey transition py-3 md:py-6 px-2.5 md:px-5 hover:text-green ease-in-out duration-100" aria-controls="hs-basic-bordered-collapse-two">
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
                                <div class="pb-4 px-2.5 md:px-5">
                                    <p class="text-light-grey">
                                        No, our vehicle wraps are designed and installed in a way that protects the underlying paintwork. In fact, they can actually help preserve the vehicle's original paint by acting as a protective layer against minor scratches, UV rays, and other environmental elements. When the time comes to remove the wrap, our professional technicians use safe and proven techniques to ensure the paint remains unharmed.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item */}
                        <div class="hs-accordion bg-charcoal first:rounded-t-lg last:rounded-b-lg" id="hs-bordered-heading-two">
                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 text-lg md:text-xl font-three inline-flex items-center gap-x-3 w-full font-semibold text-left text-lighter-grey transition py-3 md:py-6 px-2.5 md:px-5 hover:text-green ease-in-out duration-100" aria-controls="hs-basic-bordered-collapse-two">
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
                                <div class="pb-4 px-2.5 md:px-5">
                                    <p class="text-light-grey">
                                    The duration of the installation process can vary depending on the size and complexity of the vehicle wrap. Generally, it takes about 5 to 7 days to complete the installation. Our experienced installers work efficiently to ensure a precise and seamless application, minimizing any disruption to your schedule or business operations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Item */}
                        <div class="hs-accordion bg-charcoal first:rounded-t-lg last:rounded-b-lg" id="hs-bordered-heading-two">
                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 text-lg md:text-xl font-three inline-flex items-center gap-x-3 w-full font-semibold text-left text-lighter-grey transition py-3 md:py-6 px-2.5 md:px-5 hover:text-green ease-in-out duration-100" aria-controls="hs-basic-bordered-collapse-two">
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
                                <div class="pb-4 px-2.5 md:px-5">
                                    <p class="text-light-grey">
                                    Absolutely! We specialize in creating custom designs tailored to your specific needs and preferences. Our design team will collaborate with you to understand your branding objectives and incorporate your desired elements, such as logos, colors, and messaging. We strive to bring your vision to life, ensuring your vehicle wrap truly represents your brand identity and captures attention on the road.
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

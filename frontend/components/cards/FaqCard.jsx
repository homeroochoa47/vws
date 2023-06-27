import { useEffect } from 'react'
import {
    Collapse,
    initTE,
  } from "tw-elements";

export default function FaqCard() {
    useEffect(() => {
        initTE({ Collapse });
}, []);

    return (
        <div id="accordionExample" className='w-full'>
            {/* Accordion Item 1 */}
            <div
                className="rounded-t-lg border border-light-grey bg-charcoal pt-4 pb-2">
                <h2 className="mb-0" id="headingOne">
                <button
                    className="group relative flex w-full items-center rounded-t-[15px] bg-charcoal px-5 py-4 text-left text-2xl font-semibold font-three text-lighter-grey"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne">
                        How long does a vehicle wrap last?
                    <span
                    className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </button>
                </h2>
                <div
                id="collapseOne"
                className="!visible hidden"
                data-te-collapse-item
                aria-labelledby="headingOne"
                data-te-parent="#accordionExample">
                    <div className="px-5 py-4 border-t-[1px] border-light-grey/70 text-md font-lora">
                        Your website is essential to your therapy practice. It's like your online home, where potential clients can get to know you before booking a session. A well-crafted website showcases your expertise, services, and what makes you unique. So, let your website speak for you and create connections that lead to meaningful therapeutic journeys.
                    </div>
                </div>
            </div>

            {/* Accordion Item 2 */}
            <div
                className="border border-t-0 border-light-grey bg-charcoal pt-4 pb-2">
                <h2 className="mb-0" id="headingTwo">
                <button
                    className="group relative flex w-full items-center rounded-none border-0 bg-charcoal px-5 py-4 text-left text-2xl font-semibold font-three text-lighter-grey"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo">
                        Do you design the wraps?
                    <span
                    className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </button>
                </h2>
                <div
                id="collapseTwo"
                className="!visible hidden"
                data-te-collapse-item
                aria-labelledby="headingTwo"
                data-te-parent="#accordionExample">
                    <div className="px-5 py-4 border-t-[1px] border-light-grey/70 text-md font-lora">
                        While website builders are convenient, I believe in creating a website that truly represents you and your therapy practice. With a professional web developer, we can tailor your site to your unique needs, ensuring it reflects your authentic identity and stands out from the crowd. Together, we'll create a website that captures the essence of your practice and makes a lasting impression on visitors.
                    </div>
                </div>
            </div>
            
            {/* Accordion Item 3 */}
            <div
                className="border border-t-0 border-light-grey bg-charcoal pt-4 pb-2">
                <h2 className="mb-0" id="headingThree">
                <button
                    className="group relative flex w-full items-center rounded-none border-0 bg-charcoal px-5 py-4 text-left text-2xl font-semibold font-three text-lighter-grey"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree">
                        Does the wrap damage the paint?
                    <span
                    className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </button>
                </h2>
                <div
                id="collapseThree"
                className="!visible hidden"
                data-te-collapse-item
                aria-labelledby="headingThree"
                data-te-parent="#accordionExample">
                    <div className="px-5 py-4 border-t-[1px] border-light-grey/70 text-md font-lora">
                        Absolutely. SEO is a vital part of the website development process, and I'll work behind the scenes to optimize your website's structure, content, and metadata. This helps search engines recognize your site's relevance and improves its visibility in search results. The goal is to attract more potential clients who are actively searching for therapy services and connect them with your website.
                    </div>
                </div>
            </div>

            {/* Accordion Item 4 */}
            <div
                className="border border-t-0 border-light-grey bg-charcoal pt-4 pb-2">
                <h2 className="mb-0" id="headingFour">
                <button
                    className="group relative flex w-full items-center rounded-none border-0 bg-charcoal px-5 py-4 text-left text-2xl font-semibold font-three text-lighter-grey"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour">
                        How long does the installation process take?
                    <span
                    className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </button>
                </h2>
                <div
                id="collapseFour"
                className="!visible hidden"
                data-te-collapse-item
                aria-labelledby="headingFour"
                data-te-parent="#accordionExample">
                    <div className="px-5 py-4 border-t-[1px] border-light-grey/70 text-md font-lora">
                        The service package format is designed to provide comprehensive website support. Along with creating and hosting your website, I'm here to ensure it stays up-to-date and relevant. As part of the monthly service package, you'll have the convenience of ongoing website maintenance. Just drop me an email or text, and I'll take care of it within 24 hours. 
                    </div>
                </div>
            </div>

            {/* Accordion Item 5 */}
            <div
                className="border border-t-0 border-light-grey bg-charcoal pt-4 pb-2">
                <h2 className="mb-0" id="headingFive">
                <button
                    className="group relative flex w-full items-center rounded-none border-0 bg-charcoal px-5 py-4 text-left text-2xl font-semibold font-three text-lighter-grey"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive">
                    Can I customize the design of the vehicle wrap?
                    <span
                    className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </button>
                </h2>
                <div
                id="collapseFive"
                className="!visible hidden"
                data-te-collapse-item
                aria-labelledby="headingFive"
                data-te-parent="#accordionExample">
                    <div className="px-5 py-4 border-t-[1px] border-light-grey/70 text-md font-lora">
                        As part of your monthly site and service package, you will have full ownership of all written content created for your website, as well as images you provide, branding elements, and any other materials you contribute. They belong to you and can be used and modified according to your needs. While the codebase and overall design are leased and remain under my ownership, you have complete control over the content that represents your therapy practice.
                    </div>
                </div>
            </div>

            {/* Accordion Item 6*/}
            <div
                className="rounded-b-lg border border-t-0 border-light-grey bg-charcoal pt-4 pb-2">
                <h2 className="accordion-header mb-0" id="headingSix">
                <button
                    className="group relative flex w-full items-center border-0 bg-charcoal px-5 py-4 text-left text-2xl font-semibold font-three text-lighter-grey [&[data-te-collapse-collapsed]]:rounded-b-[15px] "
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix">
                    Do I get to keep my domain name?
                    <span
                    className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </span>
                </button>
                </h2>
                <div
                id="collapseSix"
                className="!visible hidden"
                data-te-collapse-item
                aria-labelledby="headingSix"
                data-te-parent="#accordionExample">
                    <div className="px-5 py-4 border-t-[1px] border-light-grey/70 text-md font-lora">
                        Of course! Your domain name is an essential part of your online identity. If you already have a domain name, we can seamlessly connect it to your new website. If you don't have one yet, I can assist you in selecting and registering a domain name that aligns perfectly with your therapy practice. Your online presence should have a memorable and meaningful domain name that represents you.
                    </div>
                </div>
            </div>
        </div>
    )
}

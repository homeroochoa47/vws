import Link from "next/link"

export default function ServiceStats() {
  return (
    <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12 p-3 md:p-8">
        <div className="lg:col-span-1">
        <h2 className="font-semibold font-one text-2xl md:text-3xl xl:text-4xl text-red">
            Drive Success with Eye-Catching Vehicle Wraps
        </h2>
        <p className="mt-2 md:mt-4 text-dark-grey">
        Discover the perks of wrapping your vehicles, and take your brand visibility to new heights. Let your vehicles become mobile billboards that captivate attention, generate leads, and leave a lasting impression on potential customers. Explore the advantages of our custom vehicle wraps below:
        </p>
        <Link href="/contact" className="mt-2 inline-block rounded-[20px] px-8 md:px-12 md:text-lg bg-charcoal/60 text-lighter-grey py-1.5 md:pt-2.5  md:pb-2 text-md xl:text-md font-medium shadow-sm transition duration-150 ease-in-out hover:shadow-xl hover:bg-green/70 hover:text-white border-green border-2"
            role="button">Get Started
        </Link>
        </div>

        <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                <div className="flex gap-x-5 bg-charcoal/5 p-2 rounded-lg">
                    <svg className="flex-shrink-0 mt-1 w-7 h-7 text-dark-grey" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z"></path></svg>
                    <div className="grow">
                        <h3 className="text-lg font-semibold text-dark-grey font-three">
                        Increased Company Exposure
                        </h3>
                        <p className="mt-1 text-dark-grey font-two">
                        Transform your vehicles into moving advertisements, ensuring that your company message reaches a wider audience across various locations and demographics.
                        </p>
                    </div>
                </div>

                <div className="flex gap-x-5 bg-charcoal/5 p-4 rounded-lg">
                    <svg className="flex-shrink-0 mt-1 w-7 h-7 text-dark-grey" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z"></path></svg>
                    <div className="grow">
                        <h3 className="text-lg font-semibold text-dark-grey font-three">
                        Cost-Effective Advertising
                        </h3>
                        <p className="mt-1 text-dark-grey font-two">
                        Compared to traditional advertising methods, custom vehicle wraps offer a cost-effective way to achieve long-term brand visibility and reach a large audience without recurring expenses.
                        </p>
                    </div>
                </div>

                <div className="flex gap-x-5 bg-charcoal/5 p-2 rounded-lg">
                    <svg className="flex-shrink-0 mt-1 w-7 h-7 text-dark-grey" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path></svg>
                    <div className="grow">
                        <h3 className="text-lg font-semibold text-dark-grey font-three">
                            Protection for Your Vehicle
                        </h3>
                        <p className="mt-1 text-dark-grey font-two">
                            Wraps provide a protective layer against scratches, minor dings, and UV damage, preserving the vehicle's original paint and maintaining its resale value.
                        </p>
                    </div>
                </div>

                <div className="flex gap-x-5 bg-charcoal/5 p-2 rounded-lg">
                    <svg className="flex-shrink-0 mt-1 w-7 h-7 text-dark-grey rotate-180" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,189.66l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L184,196.69V139.31l-56-56-56,56v57.38l18.34-18.35a8,8,0,0,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L56,196.69V136a8,8,0,0,1,2.34-5.66L120,68.69V24a8,8,0,0,1,16,0V68.69l61.66,61.65A8,8,0,0,1,200,136v60.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z"></path></svg>
                    <div className="grow">
                        <h3 className="text-lg font-semibold text-dark-grey font-three">
                        Versatility and Flexibility
                        </h3>
                        <p className="mt-1 text-dark-grey font-two">
                        Vehicle wraps offer the flexibility to update or change designs as your marketing needs evolve, allowing you to promote seasonal campaigns or special promotions effortlessly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

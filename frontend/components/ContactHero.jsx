import Link from "next/link"

export default function ContactHero() {
  return (
    <div className='flex w-full px-2 lg:px-0 py-8 lg:py-24 relative bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-darkest-grey to-charcoal'>

        <div class="lg:mt-5 max-w-4xl flex flex-col mx-auto text-center px-2 lg:px-20 py-4 lg:py-16 rounded-xl bg-charcoal">
            <h1 class="block font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mx-auto text-green">
                Get in Touch
            </h1>
            <p class="text-md lg:text-lg xl:text-xl text-lighter-grey px-8 md:px-0">
                Submit a quote request form below and we’ll reach out to you with a quote and more information about our process!
            </p>
        </div>
    </div>
  )
}
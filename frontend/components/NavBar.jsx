import Link from "next/link"
import { useRouter } from 'next/router';
import React, { useEffect, useState } from "react";


export default function NavBar(props) {
  const {data} = props

  //preparing router for nav links
  const router = useRouter();
  const activePath = router.pathname;

  // Set a nav position state that tells the navbar where to be positioned depending on scroll direction
  const [navPosition, setNavPosition] = useState(null);

  useEffect(() => {

    // last scrolled Y Position on screen, in px
    let lastScrollY = window.scrollY;
    const sensitivity = window.innerWidth < 768 ? 25 : .25; // Adjust the 'sensitivity' based on screen size

    const updateNavPosition = () => {
      // when scroll occurs, set a separate scroll Y value in px
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "up" : "down";

      // conditional for scroll direction vs nav position
      if (scrollY < 100) {
        setNavPosition("down");
      } else if (
        (direction !== navPosition) &&
        (Math.abs(scrollY - lastScrollY) > sensitivity)
      ) {
        setNavPosition(direction);
      }
      
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateNavPosition);
    return () => {
      window.removeEventListener("scroll", updateNavPosition);
    };
  }, [navPosition]);







  return (
    <header className={`fixed mx-auto right-0 left-0 flex justify-between items-center z-50 md:w-[85%] rounded-xl transition-all duration-300 ${
      navPosition === "up" ? "-top-32" : "top-0"
    }`}>
      <nav className="relative md:max-w-7xl w-full bg-charcoal rounded-xl mx-2 my-2 md:my-4 py-2.5 md:flex md:items-center md:justify-between md:px-6 lg:px-8 xl:mx-auto" aria-label="Global">
        <div className="flex items-center justify-between md:mr-10 mr-4">

          {/* Logo */}
          <Link href="/" className="w-[125px] lg:w-[150px] rounded-[10px] md:relative transition duration-250 ease-in-out hover:scale-[103%] px-4">
              <img className="w-full" src="/vws-logo.png" alt="Logo" />
          </Link>

          {/* Mobile Nav Setup */}
          <div className="md:hidden">
            <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-semibold bg-charcoal text-light-grey shadow-sm align-middle focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
              <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
              <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
          <div className="flex flex-col gap-x-0 md:flex-row md:gap-y-0 mt-2 md:mt-0 rounded-lg md:bg-transparent md:rounded-none">
            
            <div className="flex flex-col md:flex-row mx-auto md:mx-none md:justify-center items-start md:items-center md:mx-auto gap-y-3 md:gap-y-0 w-full">
              <Link href="/" className={`mx-auto md:mx-1 text-center text-lg font-semibold px-2 hover:text-red transition duration-150 ease-in-out ${activePath === "/" ? "text-green" : "text-light-grey"}`} aria-current="page">
                Home
              </Link> 

              <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--trigger:click] w-full md:inline-flex md:w-auto">
                <button id="hs-dropdown-slideup-animation" type="button" className="hs-dropdown-toggle flex items-center mx-auto md:mx-1 text-center text-lg font-semibold px-2 text-light-grey hover:text-red transition-all duration-50 ease-out">
                  Services
                  <svg className="hs-dropdown-open:rotate-180 ml-1 w-2.5 h-2.5 text-light-grey" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path>
                  </svg>
                </button>

                <div className="hs-dropdown-menu mt-2 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0
                bg-dark-grey w-full md:w-72  hidden z-10 md:rounded-lg border-none bg-clip-padding text-left md:shadow-lg px-8 md:px-4 divide-y-2 divide-lighter-grey" aria-labelledby="hs-dropdown-slideup-animation">

                {data.map((item, index) => (
                  <Link key={index} className="block w-full bg-transparent text-center md:text-left md:pl-6 md:px-4 py-5 text-lg text-lighter-grey font-normal transition duration-50 ease-out  hover:text-green" href={`/vehicle-wrap-services/${item.slug.current}`}>
                    {item.serviceName}
                  </Link>
                ))}
                </div>
              </div>

              <Link href="/vehicle-wrap-portfolio" className={`mx-auto md:mx-1 text-center text-lg font-semibold px-2  hover:text-red transition duration-150 ease-in-out ${activePath === "/vehicle-wrap-portfolio" ? "text-green" : "text-light-grey"}`}>
                Portfolio
              </Link>
              <Link href="/vehicle-wrap-service-locations" className={`mx-auto md:mx-1 text-center text-lg font-semibold px-2  hover:text-red transition duration-150 ease-in-out ${activePath === "/vehicle-wrap-service-locations" ? "text-green" : "text-light-grey"}`}>
                Locations
              </Link>
              <Link href="/contact" className={`mx-auto md:mx-1 text-center text-lg font-semibold px-2  hover:text-red transition duration-150 ease-in-out ${activePath === "/contact" ? "text-green" : "text-light-grey"}`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        <Link href="/contact" className="text-three text-lighter-grey mb-2 hidden xl:inline-block rounded-[25px] bg-green/10 px-10 pt-2.5 pb-2 text-md xl:text-md font-semibold shadow-sm transition duration-150 ease-in-out hover:shadow-xl md:mr-2 md:mb-0 hover:bg-green hover:text-white border-green border-2 whitespace-nowrap" role="button">
          Get a Quote
        </Link>

      </nav>
    </header>
  )
}
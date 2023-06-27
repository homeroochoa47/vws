import Link from "next/link"
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
// import { urlFor } from 'lib/helpers'
import MobileNav from "./MobileNav";


export default function NavBar() {
  //preparing router for nav links
  const router = useRouter();
  const activePath = router.pathname;

  const [width, setWidth] = useState(null)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <header className={`fixed mx-auto mt-5 origin-top ease-in-out bg-charcoal/90 backdrop-blur-md right-0 left-0 flex justify-between pl-2 lg:px-10 xl:px-12 py-1 items-center z-50 w-[75%] rounded-lg`}>
        {/* Logo */}
        <Link href="/home" 
          className="w-[125px] lg:w-[145px] mr-[15px] 2xl:mr-[18px] rounded-[10px] md:relative transition duration-250 ease-in-out px-4"
          >
            <img className="w-full" src="/vws-logo.png" alt="Logo" />
        </Link>

        {/* Select the navbar or mobileNav component depending on the screen width */}
        {width && (width < 1024 ? (<MobileNav/>) : 
          (
            <>
              <div className="transition duration-250 text-light-grey font-three p-4 rounded-[15px]">
                <Link href="/home" className={`mx-1 text-center text-md xl:text-lg font-semibold px-2 hover:text-red transition duration-150 ease-in-out ${activePath === "/home" ? "underline decoration-2 underline-offset-4 text-green decoration-light-grey" : ""}`}>
                  Home
                </Link>
                <Link href="/services" className={`light-grey mx-1 text-center text-md xl:text-lg font-semibold px-2  hover:text-red transition duration-150 ease-in-out ${activePath === "/services" ? "underline decoration-2 underline-offset-4 text-green decoration-light-grey" : ""}`}>
                  Services
                </Link>
                <Link href="/portfolio" className={`text-light-grey mx-1 text-center text-md xl:text-lg font-semibold px-2  hover:text-red transition duration-150 ease-in-out ${activePath === "/about" ? "underline decoration-2 underline-offset-4 text-green decoration-light-grey" : ""}`}>
                  Portfolio
                </Link>
                <Link href="/locations" className={`text-light-grey mx-1 text-center text-md xl:text-lg font-semibold px-2  hover:text-red transition duration-150 ease-in-out ${activePath === "/about" ? "underline decoration-2 underline-offset-4 text-green decoration-light-grey" : ""}`}>
                  Locations
                </Link>
                <Link href="/contact" className={`light-grey mx-1 text-center text-md xl:text-lg font-semibold px-2  hover:text-red transition duration-150 ease-in-out ${activePath === "/contact" ? "underline decoration-2 underline-offset-4 text-green decoration-light-grey" : ""}`}>
                  Contact
                </Link>
              </div>
              
              <Link href="/contact" className="text-three text-white mb-2 inline-block rounded-[25px] bg-green/10 px-10 py-2 text-md xl:text-lg font-medium text-off-white shadow-sm transition duration-150 ease-in-out hover:bg-dark-blue hover:shadow-xl md:mr-2 md:mb-0 hover:bg-green hover:text-white border-green border-2"
              role="button">Get a Quote</Link>
            </>
          )
        )}
    </header>
  )
}


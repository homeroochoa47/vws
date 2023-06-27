import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { urlFor } from "@/lib/helpers";

export default function ServiceCard(props) {
  const item = props.props;
  const index = props.index;

  const scrollTokenRef = useRef(null);
  const containerRef = useRef(null);
  const isScrollingRef = useRef(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleHoverChange = () => {
    setIsHovered(!isHovered);
    !isHovered ? handleMouseEnter() : handleMouseLeave();
  };

  const handleMouseEnter = () => {
    clearInterval(scrollTokenRef.current);
    scrollTokenRef.current = setInterval(() => {
      const container = containerRef.current;
      if (container) {
        container.scrollTop += 1; // Scroll down
      }
    }, 10);
  };

  const handleMouseLeave = () => {
    clearInterval(scrollTokenRef.current);
    scrollTokenRef.current = setInterval(() => {
      const container = containerRef.current;
      if (container) {
        container.scrollTop -= 1; // Scroll up
      }
    }, 10);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className={`keen-slider__slide number-slide1 bg-dark-grey py-1 sm:py-2 px-3 sm:px-4 rounded-[15px] sm:rounded-[8px]`}>
        <div className="relative w-[95%] md:w-full mx-auto md:mx-0">
            <div
            ref={containerRef}
            className={`no-scrollbar w-full pt-2 rounded-[8px]`}
            onMouseEnter={handleHoverChange}
            onMouseLeave={handleHoverChange}
            >
            <img
                className={`object-contain h-auto mx-auto rounded-[8px] border-2 border-light-grey/40`}
                src={urlFor(item.referencePhoto).url()}
                alt='test'
                />
            </div>
            <div className="py-1 text-white/80">
              <h3 className="text-3xl font-one font-medium">{item.serviceName}</h3>
              <p className="text-lg font-three">{item.referenceCaption}</p>
            </div>
        </div>
    </div>
  );
}

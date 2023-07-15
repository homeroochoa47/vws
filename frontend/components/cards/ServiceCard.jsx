import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { urlFor } from "@/lib/helpers";

export default function ServiceCard(props) {
  const item = props.props;
  const index = props.index;

  return (
    <div className={`keen-slider__slide number-slide${index} bg-dark-grey py-1 sm:py-2 px-3 sm:px-4 rounded-[12px] sm:rounded-[8px]`}>
        <div className="w-[95%] md:w-full mx-auto md:mx-0 py-3 md:py-2">
              <img
                  className={`object-cover w-full h-[200px] sm:h-[250px] rounded-[8px] border-2 border-light-grey/40`}
                  src={urlFor(item.referencePhoto).url()}
                  alt='test'
                />
            <div className="text-lighter-grey flex flex-col h-full">
              <h3 className="text-xl md:text-2xl font-one font-medium">{item.serviceName}</h3>
              <p className="text-md lg:text-lg font-three mb-2">{item.referenceCaption}</p>
              <Link href={`/vehicle-wrap-services/${item.slug.current}`} className="w-full rounded-[20px] md:text-lg bg-charcoal/60 text-lighter-grey pt-2.5 pb-2 text-md xl:text-md font-semibold shadow-sm transition duration-150 ease-in-out hover:shadow-xl text-center hover:bg-green/70 hover:text-white border-green border-2"
                  role="button">Learn More
              </Link>
            </div>
        </div>
    </div>
  );
}

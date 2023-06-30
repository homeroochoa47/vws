import { React, useState, useEffect } from 'react';
import { urlFor } from 'lib/helpers'
import Link from 'next/link';

export default function GallerySliderCard(props) {
  const { data } = props

  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link href={`/tesla-wrap-gallery/${data.slug.current}`}>
      <div className={`flex relative w-full z-1`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}>
        <img className= "object-cover w-full h-[27vh] md:h-[25vh] xl:h-[325px] mx-auto z-1 rounded-[16px]" src={urlFor(data.leadingImage).url()} alt={data.leadingImage.alt} />
        <div className='absolute bottom-0 w-full flex flex-col bg-gradient-to-t via-black/70 from-black rounded-b-[15px] pt-10'>
            <h5 className="text-lg text-light-grey font-hind font-medium z-10 px-1 2xl:px-2">{data.title}</h5>
            {isHovering && (
              <p className='bottom-0 text-md font-ubuntu lg:text-lg text-yellow z-10 px-1' >
                  Click to View
              </p>
            )}
        </div>
      </div>
    </Link>
  )
}
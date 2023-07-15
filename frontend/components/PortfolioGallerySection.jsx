import { urlFor } from '@/lib/helpers'
import Link from 'next/link'
import { useState } from "react";

export default function PortfolioGallerySection({ data }) {

    return (
        <div className="lg:mt-10 py-10 w-[95%] xl:w-[85%] mx-auto">

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {data.projectList.map((item, index) => (
                    <div
                    key={index}
                    className="relative overflow-hidden rounded-lg object-cover shadow-lg hover:scale-[101%] transition duration-450 ease-in-out">
                        <img src={urlFor(item.leadingImage).url()}
                        className="w-full h-full align-middle object-cover aspect-[5/4]" />
                        <Link href={`/vehicle-wrap-portfolio/${item.slug.current}`}>
                            <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
                                <div className="flex w-full h-full items-end justify-start bg-black/[25%] hover:bg-black/0 transition duration-450 ease-in-out">
                                    <h5 className="m-3 md:m-6 text-lg md:text-xl drop-shadow-xl font-bold text-white">
                                    {item.title}
                                    </h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>


  )
}

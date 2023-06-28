import { urlFor } from 'lib/helpers'
import Link from 'next/link';

export default function Footer(props) {
    const { contactData } = props;
    const { servicesData } = props;

  return (
    <footer className="lg:p-4 border-t-2 border-white bg-dark-grey">
        <div className="mx-auto max-w-screen">

            {/* Top portion/half */}
            <div className="flex flex-col lg:flex-row md:justify-around px-3 lg:px-32">

                {/* Logo */}
                <Link href="/home" className="w-48 md:w-60">
                    <img src={urlFor(contactData[0].logo).url()} className="my-5 -ml-1 lg:-ml-0" alt="Logo" />
                </Link>

                {/* How to reach us */}
                <div className='flex flex-col'>
                    <h2 className="text-lg font-bold font-one text-light-grey mt-2 lg:mb-2 lg:mt-6 md:mt-4 uppercase">How to Reach Us:</h2>
                    <h3 className='text-lg lg:text-xl font-ubuntu font-semibold text-green underline mb-2'>Available By Appointment Only</h3>
                    <ul className="text-white text-lg opacity-90 dark:text-gray-400">
                        <li className="mb-4 flex">
                            <h2 className='font-three font-semibold'>Address:&nbsp;</h2>
                            <h3 className='font-three font-regular'>{contactData[0].address}</h3>
                        </li>
                        <li className="mb-4 flex">
                            <h2 className='font-three font-semibold'>Phone:&nbsp;</h2>
                            <h3 className='font-three font-regular underline'>{contactData[0].contactPhone}</h3>
                        </li>
                        {contactData[0].contactEmail ? (
                            <li className="lg:mb-4 flex">
                            <h2 className='font-three font-semibold'>Email:&nbsp;</h2>
                            <h3 className='font-three font-regular underline'href={`mailto:${contactData[0].contactEmail}`}>{contactData[0].contactEmail}</h3>
                        </li>
                        ) : (<br></br>)}
                    </ul>
                    <Link href="/contact" className="flex justify-center mt-2 mb-4 text-lighter-grey font-mina font-semibold bg-black border-[2.5px] border-lighter-grey hover:bg-green/50 transition duration-250 ease-in-out rounded-xl text-lg lg:text-xl py-1">Get a Quote</Link>
                </div>

                {/* Footer nav menu */}
                <div className='flex flex-col'>
                    <h2 className="text-lg font-bold font-one text-light-grey mt-2 lg:mb-2 lg:mt-6 md:mt-4 uppercase">Menu</h2>
                    <ul className="text-white opacity-90 dark:text-gray-400">
                        <li className="mb-4 underline">
                            <Link href="/home">Home</Link>
                        </li>
                        <li className="mb-4 underline">
                            <Link href="/tesla-wrap-locations">Locations</Link>
                        </li>
                        <li className="mb-4 underline">
                            <Link href="/tesla-wrap-gallery">Portfolio</Link>
                        </li>
                        <li className="mb-4 underline">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Footer Services menu */}
                <div>
                    <h2 className="text-lg font-bold font-one text-light-grey mt-2 lg:mb-2 lg:mt-6 md:mt-4 uppercase">Services</h2>
                    <ul className="text-white opacity-90 dark:text-gray-400">
                        {servicesData[0].services.map((item, index) => (
                            <li key={index} className="mb-4 underline">
                                <Link href={`/tesla-wrap-services/${item.slug.current}`}>{item.serviceName}</Link>
                            </li>
                    ))}
                    </ul>
                </div>

            </div>

            {/* Horizontal divider */}
            <hr className="max-w-screen-xl my-6 bg-white border-1 sm:mx-auto lg:my-8" />
            
            
            {/* Bottom portion/half */}
            <div className="sm:flex max-w-screen-xl px-2 pb-3 lg:pb-0 lg:px-10 mx-auto sm:items-center sm:justify-between">
                <p className="text-white">© {contactData[0].copyrightInfo}</p>
                <p className="text-white">All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}

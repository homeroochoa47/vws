import Layout from '@/components/Layout';
import Head from 'next/head'
import { client } from "../../client"
import DynamicLocationHero from '@/components/DynamicLocationHero';
import LocationsList from '@/components/LocationsList';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';

export default function LocationSlug({ contactData, faqData, singleLocationData, locations, servicesData }) {
  
  const filteredServices = servicesData[0].services.map(({ serviceName, slug }) => ({
    serviceName,
    slug
  }));

  return (
    <div id="main" className='h-auto bg-gradient-to-b from-lighter-grey to-light-grey/50'>
      <Head>
          <title>{`Custom Vehicle Wraps in ${singleLocationData[0].locationName}, CA`}</title>
          <meta name="description" content={`Explore our commercial vehicle wrapping services in ${singleLocationData[0].locationName}, CA. Contact us for expert vehicle wrapping near you!`} />
          <meta name="keywords" content="commercial vehicle wraps, fleet vehicle wraps, van wraps, truck wraps, vehicle wrap service, custom vehicle graphics, mobile advertising"></meta>
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content={`Custom Vehicle Wraps in ${singleLocationData[0].locationName}, CA`}/>
          <meta name="og:description" property="og:description" content={`Explore our commercial vehicle wrapping services in ${singleLocationData[0].locationName}, CA. Contact us for expert vehicle wrapping near you!`} />
          <meta property="og:site_name" content="VehicleWrapService.com" />
          <meta property="og:url" content="https://www.vehiclewrapservice.com" />
          <meta property="og:image" content="/vws-og.png" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

        <Layout services={filteredServices} contact={contactData}>
            <section id="location-description-section" className='h-auto'>
            <DynamicLocationHero data={singleLocationData[0]}/>
            </section>

            <section id="locations-list" className='my-20 bg-charcoal/[25%] w-[95%] max-w-[1440px] mx-auto rounded-[20px]'>
              <LocationsList data={locations[0]}/>
            </section>

            <section id="faq-section" className=''>
              <FaqSection data={faqData}/>
            </section>

            <section id="contact-section" className='bg-light-grey'>
              <ContactSection data={contactData}/>
            </section>
        </Layout>
    </div>
  )
}


export async function getStaticProps({ params }) {

  const singleLocationData = await client.fetch(`*[_type == "serviceLocations"][0].locationList[slug.current == "${params.locationSlug}"]`);
  const faqData = await client.fetch('*[_type == "faqSection"][0]');
  const servicesData = await client.fetch('*[_type == "services"]');
  const contactData = await client.fetch('*[_type == "siteSettings"]');
  const locations = await client.fetch('*[_type == "serviceLocations"]')

  return {
    props: {
      singleLocationData,
      contactData,
      servicesData,
      locations,
      faqData
    },
  };
}

export async function getStaticPaths() {
    const locations = await client.fetch('*[_type == "serviceLocations"][0].locationList[hasOwnPage == true]');

    return {
        paths:
          locations.map((location) => {
            return {
                params: {
                  locationSlug: location.slug.current,
                }
            }
        }),
        fallback: false
    }
}
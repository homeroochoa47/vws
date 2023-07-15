import Head from 'next/head'
import { client } from "../client"
import Layout from '@/components/Layout'
import LocationHero from '@/components/LocationHero'
import LocationsList from '@/components/LocationsList';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';

export default function LocationsPage({ locationHeroData, faqData, servicesData, contactData, locations }) {
    
    // Contains only the service name and slug for each service. This is for the navbar & footer
  const filteredServices = servicesData[0].services.map(({ serviceName, slug }) => ({
    serviceName,
    slug
  }));

  return (
    <div id="main" className='h-auto bg-light-grey'>
      <Head>
          <title>{`Locations We Serve | Commercial Vehicle Wrapping Services`}</title>
          <meta name="description" content={`We bring our expertise in designing and installing custom wraps for vans, trucks, and fleets to businesses across multiple locations in Southern California.`} />
          <meta name="keywords" content="commercial vehicle wraps, fleet vehicle wraps, van wraps, truck wraps, vehicle wrap service, custom vehicle graphics, mobile advertising"></meta>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Locations We Serve | Commercial Vehicle Wrapping Services" />
          <meta name="og:description" property="og:description" content="We bring our expertise in designing and installing custom wraps for vans, trucks, and fleets to businesses across multiple locations in Southern California." />
          <meta property="og:site_name" content="VehicleWrapService.com" />
          <meta property="og:url" content="https://www.vehiclewrapservice.com" />
          <meta property="og:image" content="/vws-og.png" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

        <Layout services={filteredServices} contact={contactData}>
            {/* Hero */}
            <section id="hero" className='pt-28 lg:pt-36'>
              <LocationHero data={locationHeroData}/>
            </section>
        
            <section id="locations-list" className=''>
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

export async function getStaticProps() {
  const data = await client.fetch(`
    *[_type == "homePage"][0]{
      heroSection,
      aboutUsSection,
    }
  `);

  const locationHeroData = await client.fetch('*[_type == "locationPage"]')
  const locations = await client.fetch('*[_type == "serviceLocations"]')
  const faqData = await client.fetch('*[_type == "faqSection"][0]');

  const servicesData = await client.fetch('*[_type == "services"]');
  const contactData = await client.fetch('*[_type == "siteSettings"]');



  return {
    props: {
      faqData,
      servicesData,
      contactData,
      locationHeroData,
      locations
    },
  };
}

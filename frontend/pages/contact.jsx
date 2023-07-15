import Head from 'next/head'
import { client } from "../client"
import Layout from '@/components/Layout'
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import ContactHero from '@/components/ContactHero';

export default function ContactPage({ locationHeroData, faqData, servicesData, contactData, locations }) {
    
    // Contains only the service name and slug for each service. This is for the navbar & footer
  const filteredServices = servicesData[0].services.map(({ serviceName, slug }) => ({
    serviceName,
    slug
  }));

  return (
    <div id="main" className='h-auto bg-light-grey'>
      <Head>
          <title>{`Contact Us | Commercial Vehicle Wrapping Services`}</title>
          <meta name="description" content={`Contact our professional team today for expert commercial vehicle wrapping solutions.`} />
          <meta name="keywords" content="commercial vehicle wraps, fleet vehicle wraps, van wraps, truck wraps, vehicle wrap service, custom vehicle graphics, mobile advertising"></meta>
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Contact Us | Commercial Vehicle Wrapping Services" />
          <meta name="og:description" property="og:description" content="Contact our professional team today for expert commercial vehicle wrapping solutions." />
          <meta property="og:site_name" content="VehicleWrapService.com" />
          <meta property="og:url" content="https://www.vehiclewrapservice.com" />
          <meta property="og:image" content="/vws-og.png" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

        <Layout services={filteredServices} contact={contactData}>
            {/* Hero */}
            <section id="hero" className='pt-28 lg:pt-36'>
              <ContactHero data={locationHeroData}/>
            </section>
        
            <section id="contact-section" className='bg-light-grey'>
              <ContactSection data={contactData}/>
            </section>

            <section id="faq-section" className=''>
              <FaqSection data={faqData}/>
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

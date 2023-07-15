import Head from 'next/head'
import { client } from "../../client"
import ServicesHero from '@/components/ServicesHero';
import ServiceGallerySection from '@/components/ServiceGallerySection';
import ServiceStats from '@/components/ServiceStats';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Layout from '@/components/Layout';
import CarSlider from '@/components/CarSlider';

export default function PortfolioPage({ projectPhotos, contactData, faqData, servicesData }) {

  // Contains only the service name and slug for each service. This is for the navbar & footer
  const filteredServices = servicesData[0].services.map(({ serviceName, slug }) => ({
    serviceName,
    slug
  }));

  return (
    <div id="main" className='h-auto bg-light-grey'>
      <Head>
          {/* <title>{`${servicesDataSlug[0].serviceName} | Professional Tesla Wrapping Services`}</title>
          <meta name="description" content={`Transform your Tesla with our ${servicesDataSlug[0].serviceName} Enhance your Tesla's appearance and protect your paint. Contact us today!`} />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content={`${servicesDataSlug[0].serviceName} | Professional Tesla Wrapping Services`} />
          <meta name="og:description" property="og:description" content={`${servicesDataSlug[0].serviceName} | Professional Tesla Wrapping Services`} />
          <meta property="og:site_name" content="TeslaWrap" />
          <meta property="og:url" content="https://www.teslawrap.com" />
          <meta property="og:image" content="/tesla-wrap-og.jpg" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </Head>

      <Layout services={filteredServices} contact={contactData}>

        {/* Hero */}
        <section id="hero" className='no-scrollbar'>
            <CarSlider data={projectPhotos}/>
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
    const projectPhotos = await client.fetch(`*[_type == "projectList"][0].projectList[slug.current == "${params.vehicleSlug}"]`);

    const faqData = await client.fetch('*[_type == "faqSection"][0]');
    const servicesData = await client.fetch('*[_type == "services"]');
    const contactData = await client.fetch('*[_type == "siteSettings"]');

  return {
    props: {
        faqData,
        contactData,
        servicesData,
        projectPhotos,
    },
  };
}

export async function getStaticPaths() {
    const vehicles = await client.fetch('*[_type == "projectList"]');

    return {
        paths:
          vehicles[0].projectList.map((vehicle) => {
            return {
                params: {
                  vehicleSlug: vehicle.slug.current,
                }
            }
        }),
        fallback: false
    }
}
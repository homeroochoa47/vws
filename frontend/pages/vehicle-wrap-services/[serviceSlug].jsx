import Head from 'next/head'
import { client } from "../../client"
import NavBar from '@/components/NavBar';
import ServicesHero from '@/components/ServicesHero';
import ServiceGallerySection from '@/components/ServiceGallerySection';
import ServiceStats from '@/components/ServiceStats';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer'
import Layout from '@/components/Layout';

export default function PortfolioPage({ servicesDataSlug, heroData, contactData, faqData, serviceGalleryPhotos, servicesData }) {

  // Contains only the service name and slug for each service. This is for the navbar & footer
  const filteredServices = servicesData[0].services.map(({ serviceName, slug }) => ({
    serviceName,
    slug
  }));

  return (
    <div id="main" className='h-auto bg-light-grey'>
      <Head>
          <title>{`${servicesDataSlug[0].serviceName} | Commercial Vehicle Wrapping Services`}</title>
          <meta name="description" content={`Advertise your brand on the road with our ${servicesDataSlug[0].serviceName}. Protect your vehicle and elevate your business. Contact us today!`} />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content={`${servicesDataSlug[0].serviceName} | Commercial Vehicle Wrapping Services`} />
          <meta name="og:description" property="og:description" content={`${servicesDataSlug[0].serviceName} | Professional Tesla Wrapping Services`} />
          <meta property="og:site_name" content="VehicleWrapService" />
          <meta property="og:url" content="https://www.vehiclewrapservice.com" />
          <meta property="og:image" content="/tesla-wrap-og.jpg" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <Layout services={filteredServices} contact={contactData}>

        {/* Hero */}
        <section id="hero" className='no-scrollbar'>
            <ServicesHero data={servicesDataSlug[0]} heroBg={heroData[0]}/>
        </section>

        <section id="service-statistic-section" className='w-[95%] xl:w-[90%] mx-auto rounded-xl bg-lighter-grey'>
          <ServiceStats />
        </section>

        <section id="service-gallery-section" className=''>
          <ServiceGallerySection photoData={serviceGalleryPhotos} serviceData={servicesDataSlug}/>
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
  //This query provides the services filtered by the wrap type, determined by the slug name
  const servicesDataSlug = await client.fetch(`*[_type == "services"][0].services[slug.current == "${params.serviceSlug}"]`);
  const filterKeyword = servicesDataSlug[0].linkKeyword
  // const serviceGalleryPhotos = await client.fetch(`*[_type == "projectList"][0].projectList[vehicleType == "${filterKeyword}"]`);
  const serviceGalleryPhotos = await client.fetch(`*[_type == "projectList"][0].projectList[vehicleType[] match "${filterKeyword}"]`);

  const faqData = await client.fetch('*[_type == "faqSection"][0]');
  const servicesData = await client.fetch('*[_type == "services"]');
  const heroData = await client.fetch('*[_type == "servicePage"]');
  const contactData = await client.fetch('*[_type == "siteSettings"]');

  return {
    props: {
        faqData,
        servicesDataSlug,
        contactData,
        servicesData,
        serviceGalleryPhotos,
        heroData
    },
  };
}

export async function getStaticPaths() {
    const services = await client.fetch('*[_type == "services"]');

    return {
        paths:
          services[0].services.map((service) => {
            return {
                params: {
                  serviceSlug: service.slug.current,
                }
            }
        }),
        fallback: false
    }
}
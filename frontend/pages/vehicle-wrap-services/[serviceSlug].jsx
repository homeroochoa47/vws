import Head from 'next/head'
import { client } from "../../client"
import NavBar from '@/components/NavBar';
import ServicesHero from '@/components/ServicesHero';
import ServiceGallerySection from '@/components/ServiceGallerySection';
import ServiceStats from '@/components/ServiceStats';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer'

export default function ServicePage({ servicesDataSlug, contactData, faqData, serviceGalleryPhotos, servicesData }) {

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

        {/* Header */}
        <section  id='navbar' className=''>
        <NavBar data={filteredServices}/>
        </section>

        {/* Hero */}
        <section id="hero" className='no-scrollbar'>
            <ServicesHero data={servicesDataSlug[0]}/>
        </section>

        <section id="service-gallery-section" className='w-[95%] xl:w-[90%] mx-auto rounded-xl bg-lighter-grey'>
          <ServiceStats />
        </section>

        <section id="service-gallery-section" className=''>
          <ServiceGallerySection photoData={serviceGalleryPhotos} serviceData={servicesDataSlug}/>
        </section>

        <section id="faq-section" className=''>
          <FaqSection data={faqData}/>
        </section>

        <section id="contact-section" className='bg-light-grey'>
          <ContactSection data=""/>
        </section>

        <section id="footer" className=''>
          <Footer contactData={contactData} servicesData={servicesData}/>
        </section>

    </div>
  )
}


export async function getStaticProps({ params }) {
    //This query provides the services filtered by the wrap type, determined by the slug name
    const servicesDataSlug = await client.fetch(`*[_type == "services"][0].services[slug.current == "${params.serviceSlug}"]`);

    const faqData = await client.fetch('*[_type == "faqSection"][0]');
    const servicesData = await client.fetch('*[_type == "services"]');
    const contactData = await client.fetch('*[_type == "siteSettings"]');

  return {
    props: {
        faqData,
        servicesDataSlug,
        contactData,
        servicesData
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
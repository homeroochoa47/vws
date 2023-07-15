import Head from 'next/head'
import { client } from "../client"
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Layout from '@/components/Layout';
import PortfolioHero from '@/components/PortfolioHero';
import PortfolioGallerySection from '@/components/PortfolioGallerySection';

export default function VehicleWrapPortfolio({ contactData, heroData, projectListData, faqData, servicesData }) {

  // Contains only the service name and slug for each service. This is for the navbar & footer
  const filteredServices = servicesData[0].services.map(({ serviceName, slug }) => ({
    serviceName,
    slug
  }));

  return (
    <div id="main" className='h-auto bg-light-grey'>
      <Head>
          <title>{`Our Portfolio | Commercial Vehicle Wrapping Services`}</title>
          <meta name="description" content={`Browse our portfolio and explore our previous commercial vechicle wrap work, from trucks to busses and more, we've got your vehicle wrapping needs covered!`} />
          <meta name="keywords" content="commercial vehicle wraps, fleet vehicle wraps, van wraps, truck wraps, vehicle wrap service, custom vehicle graphics, mobile advertising"></meta>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Our Portfolio | Commercial Vehicle Wrapping Services" />
          <meta name="og:description" property="og:description" content="Browse our portfolio and explore our previous commercial vechicle wrap work, from trucks to busses and more, we've got your vehicle wrapping needs covered!" />
          <meta property="og:site_name" content="VehicleWrapService.com" />
          <meta property="og:url" content="https://www.vehiclewrapservice.com" />
          <meta property="og:image" content="/vws-og.png" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <Layout services={filteredServices} contact={contactData}>
        <section id="Hero" className=''>
            <PortfolioHero heroBg={heroData[0]}/>
        </section>

        <section id="Gallery" className=''>
            <PortfolioGallerySection data={projectListData[0]}/>
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


export async function getStaticProps({ }) {
  const projectListData = await client.fetch('*[_type == "projectList"]')
  const faqData = await client.fetch('*[_type == "faqSection"][0]');
  const servicesData = await client.fetch('*[_type == "services"]');
  const contactData = await client.fetch('*[_type == "siteSettings"]');
  const heroData = await client.fetch('*[_type == "portfolioPage"]');

  return {
    props: {
        faqData,
        contactData,
        servicesData,
        projectListData,
        heroData
    },
  };
}
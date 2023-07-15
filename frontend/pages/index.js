import NavBar from '@/components/NavBar';
import HomeHero from '@/components/HomeHero'
import AboutUs from '@/components/AboutUs';
import Head from 'next/head'
import ServiceSlider from '@/components/ServiceSlider';
import PortfolioSection from '@/components/PortfolioSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Layout from '@/components/Layout';

import { client } from "../client"

export default function HomePage({ heroData, aboutSectionData, projectData, faqData, servicesData, contactData }) {

  // Contains only the service name and slug for each service. This is for the navbar & footer
  const filteredServices = servicesData[0].services.map(({ serviceName, slug }) => ({
    serviceName,
    slug
  }));
  
  // Define structured data as a JSON object
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "name": "California Commercial Vehicle Wrap Service",
    "description": "ransform your fleet into powerful mobile billboards with our professional commercial vehicle wrap service. We specialize in designing and installing custom wraps for vans, trucks, and fleets, helping businesses increase brand visibility and reach wider audiences. Contact us today for expert vehicle wrapping solutions in Southern California!",
  };

  return (
    <div id="main" className='h-auto bg-light-grey overflow-clip'>
      <Head>
          <title>Custom Commercial Vehicle Wraps | VehicleWrapService.com</title>
          <meta name="description" content="Transform your vehicles into mobile billboards with our professional vehicle wrap service. We specialize in custom wraps for vans, trucks, fleets, and more!" />
          <meta name="keywords" content="commercial vehicle wraps, fleet vehicle wraps, van wraps, truck wraps, vehicle wrap service, custom vehicle graphics, mobile advertising"></meta>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:type" content="website" />
          <meta name="og:title" property="og:title" content="Custom Commercial Vehicle Wraps | VehicleWrapService.com" />
          <meta name="og:description" property="og:description" content="Transform your vehicles into mobile billboards with our professional vehicle wrap service. We specialize in custom wraps for vans, trucks, fleets, and more!" />
          <meta property="og:site_name" content="VehicleWrapService.com" />
          <meta property="og:url" content="https://www.vehiclewrapservice.com" />
          <meta property="og:image" content="/vws-og.png" />
          <link rel="icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

          {/* Embed the structured data */}
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Head>

      <Layout services={filteredServices} contact={contactData}>
        <section id="hero" className='no-scrollbar'>
          <HomeHero data={heroData}/>
        </section>

        <section id="about-us-section" className=''>
          <AboutUs data={aboutSectionData}/>
        </section>

        <section id="services-section" className='bg-gradient-to-b from-[#000000] via-[#201F1F] to-[#201F1F] py-10'>
          <ServiceSlider data={servicesData[0]}/>
        </section>

        <section id="work-section" className='bg-lighter-grey'>
          <PortfolioSection data={projectData}/>
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

  const projectData = await client.fetch('*[_type == "projectList"][0].projectList');

  const faqData = await client.fetch('*[_type == "faqSection"][0]');


  const heroData = data.heroSection;
  const aboutSectionData = data.aboutUsSection;

  // const reviewData = await client.fetch('*[_type == "reviewSection"]');
  // const offerData = await client.fetch('*[_type == "offerSection"]');
  const servicesData = await client.fetch('*[_type == "services"]');
  const contactData = await client.fetch('*[_type == "siteSettings"]');



  return {
    props: {
      heroData,
      aboutSectionData,
      projectData,
      faqData,
      servicesData,
      contactData
    },
  };
}

// import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar';
import HomeHero from '@/components/HomeHero'
import AboutUs from '@/components/AboutUs';
import Head from 'next/head'
import { client } from "../client"
import ServiceSlider from '@/components/ServiceSlider';
import PortfolioSection from '@/components/PortfolioSection';

export default function HomePage({ heroData, aboutSectionData, galleryData, reviewData, servicesData, partnerData, offerData, contactData }) {
  
  // Define structured data as a JSON object
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "name": "Tesla Wrapping in California",
    "description": "Transform the look of your Tesla with our professional wrapping services. We offer a range of high-quality wraps for Tesla models, including Model S, Model 3, Model X, and Model Y. Enhance your car's appearance and protect its original paint. Contact us for expert Tesla vehicle wrapping.",
  };

  return (
    <div id="main" className='h-auto bg-black-bg'>
        <Head>
            <title>Custom Tesla Wrap Services in California</title>
            <meta name="description" content="Transform your Tesla with our professional wrapping services. Enhance appearance, protect paint. Range of high-quality wraps for Model S, 3, X, Y" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content="Custom Tesla Wraps in Southern California" />
            <meta name="og:description" property="og:description" content="Transform your Tesla with our professional wrapping services. Enhance appearance, protect paint. Range of high-quality wraps for Model S, 3, X, Y" />
            <meta property="og:site_name" content="TeslaWrap" />
            <meta property="og:url" content="https://www.teslawrap.com" />
            <meta property="og:image" content="/tesla-wrap-og.jpg" />
            <link rel="icon" type="image/png" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            {/* Embed the structured data */}
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Head>


        {/* Header */}
        <NavBar/>

      {/* Hero */}
        <section id="hero" className='no-scrollbar'>
          <HomeHero data={heroData}/>
        </section>

        <section id="about-us-section" className=''>
          <AboutUs data={aboutSectionData}/>
        </section>

        <section id="services-section" className='bg-gradient-to-b from-[#000000] to-[#201F1F] py-10'>
          <ServiceSlider data={servicesData[0]}/>
        </section>

        <section id="work-section" className='bg-lighter-grey'>
          <PortfolioSection data={galleryData}/>
        </section>

        {/* <section id="review-section" className=''>
          <ReviewSection data={reviewData}/>
        </section> */}

        {/* <section id="partners-section" className=''>
          <PartnersSection data={partnerData}/>
        </section> */}

        {/* <section id="offer-section" className=''>
          <OfferSection data={offerData}/>
        </section> */}

        {/* <section id="footer" className=''>
          <Footer contactData={contactData} servicesData={servicesData}/>
        </section> */}

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

  // const galleryData = await client.fetch('*[_type == "vehicleList"]');



  const heroData = data.heroSection;
  const aboutSectionData = data.aboutUsSection;

  // const reviewData = await client.fetch('*[_type == "reviewSection"]');
  // const offerData = await client.fetch('*[_type == "offerSection"]');
  const servicesData = await client.fetch('*[_type == "services"]');
  // const contactData = await client.fetch('*[_type == "siteSettings"]');



  return {
    props: {
      heroData,
      aboutSectionData,
      // galleryData,
      // reviewData,
      servicesData,
      // partnerData,
      // offerData,
      // contactData
    },
  };
}

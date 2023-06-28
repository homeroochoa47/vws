import Header from '@/components/Header'
import ReviewSection from '@/components/sections/ReviewSection'
import ContactSection from '@/components/sections/ContactSection'
import ServiceHero from '@/components/ServiceHero'
import ServiceGallerySection from '@/components/sections/ServiceGallerySection'
import Footer from '@/components/Footer'
import Head from 'next/head'
import { client } from "../../client"

export default function ServicePage({ servicesDataSlug, contactData, reviewData, serviceGalleryPhotos, servicesData }) {

  return (
    <div id="main" className='h-auto bg-black-bg'>
       <Head>
        <title>{`${servicesDataSlug[0].serviceName} | Professional Tesla Wrapping Services`}</title>
        <meta name="description" content={`Transform your Tesla with our ${servicesDataSlug[0].serviceName} Enhance your Tesla's appearance and protect your paint. Contact us today!`} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content={`${servicesDataSlug[0].serviceName} | Professional Tesla Wrapping Services`} />
        <meta name="og:description" property="og:description" content={`${servicesDataSlug[0].serviceName} | Professional Tesla Wrapping Services`} />
        <meta property="og:site_name" content="TeslaWrap" />
        <meta property="og:url" content="https://www.teslawrap.com" />
        <meta property="og:image" content="/tesla-wrap-og.jpg" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      {/* Header */}
      <Header/>

        <section id="hero" className=''>
          <ServiceHero data={servicesDataSlug}/>
        </section>

        <section id="service-gallery-section" className=''>
          <ServiceGallerySection photoData={serviceGalleryPhotos} serviceData={servicesDataSlug}/>
        </section>

        <section id="review-section" className=''>
          <ReviewSection data={reviewData}/>
        </section>

        <section id="contact-section" className=''>
          <ContactSection data={contactData}/>
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
  const filterKeyword = servicesDataSlug[0].linkKeyword
  const serviceGalleryPhotos = await client.fetch(`*[_type == "carList"][0].carList[wrapType == "${filterKeyword}"]`);
  const reviewData = await client.fetch('*[_type == "reviewSection"]');
  const offerData = await client.fetch('*[_type == "offerSection"]');
  const contactData = await client.fetch('*[_type == "siteSettings"]');
  const servicesData = await client.fetch('*[_type == "services"]');

  return {
    props: {
      // servicesDataFull,
      servicesDataSlug,
      contactData,
      reviewData,
      serviceGalleryPhotos,
      offerData,
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
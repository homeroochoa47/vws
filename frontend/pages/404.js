import Head from 'next/head'
import { client } from "../client"
import ErrorPage from '@/components/ErrorPage'
import Layout from '@/components/Layout';

export default function Error({ contactData, servicesData }) {

  const filteredServices = servicesData[0].services.map(({ serviceName, slug }) => ({
    serviceName,
    slug
  }));

  return (
    <div id="main" className='h-auto bg-charcoal'>
      <Head>
        <title>Custom Tesla Wrap Services in California</title>
        <meta name="description" content="Transform your Tesla with our professional wrapping services. Enhance appearance, protect paint. Range of high-quality wraps for Model S, 3, X, Y" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Custom Tesla Wraps in Southern California" />
        <meta name="og:description" property="og:description" content="Transform your Tesla with our professional wrapping services. Enhance appearance, protect paint. Range of high-quality wraps for Model S, 3, X, Y" />
        <meta property="og:site_name" content="Tesla Wrap" />
        <meta property="og:url" content="https://www.teslawrap.com" />
        <meta property="og:image" content="/tesla-wrap-og.jpg" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      </Head>

      <Layout services={filteredServices} contact={contactData}>
        <section id="Error" className='no-scrollbar'>
          <ErrorPage/>
        </section>
      </Layout>

    </div>
  )
}

export async function getStaticProps() {
  const contactData = await client.fetch('*[_type == "siteSettings"]');
  const servicesData = await client.fetch('*[_type == "services"]');

  return {
    props: {
      contactData, 
      servicesData
    },
  };
}

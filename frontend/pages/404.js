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
        <title>Page not found. | Commercial Vehicle Wrapping Services</title>
        <meta name="description" content="Looks like we weren't able to find the page you're looking for." />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Page not found. | Commercial Vehicle Wrapping Services" />
        <meta name="og:description" property="og:description" content="Looks like we weren't able to find the page you're looking for." />
        <meta property="og:site_name" content="VehicleWrapService.com" />
        <meta property="og:url" content="https://www.vehiclewrapservice.com" />
        <meta property="og:image" content="/vws-og.png" />
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

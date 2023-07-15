import React from 'react'
// import HeadSEO from '@/components/HeadSEO'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

const Layout = ({ children, services, contact }) => {
  return (
    <div id='layout' className='bg-bg-1 overflow-x-clip overflow-y-clip'>
      {/* <HeadSEO pageTitle={pageTitle} pageDescription={pageDescription} /> */}
      <NavBar data={services}/>
        {children}
      <Footer contactData={contact} servicesData={services}/>
    </div>
  )
}

export default Layout

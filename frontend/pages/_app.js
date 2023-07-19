import '@/styles/globals.css'
import Script from 'next/script'
import { Maven_Pro, Actor, Nunito_Sans  } from 'next/font/google'
import { useEffect } from 'react'
'use client;'

const maven = Maven_Pro({
  subsets: ['latin'],
  variable: '--font-maven',
  weight: ['400','500','600','700','800','900']
})

const actor = Actor({
  subsets: ['latin'],
  variable: '--font-actor',
  weight: ['400']
})

const nunito = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300','400','500','700', '800','900']
})

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('preline')
  }, [])

  return (
    <main className={`${maven.variable} ${actor.variable} ${nunito.variable} font-three`}>
      <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-M2PT4P23L0"/>
      <Script id="google-analytics" strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-M2PT4P23L0');
          `}
      </Script>
      <Component {...pageProps} />
    </main>
  )
}

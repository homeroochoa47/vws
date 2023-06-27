import '@/styles/globals.css'
import Script from 'next/script'
import { Maven_Pro, Actor, Nunito_Sans  } from 'next/font/google'

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
  return (
    <main className={`${maven.variable} ${actor.variable} ${nunito.variable} font-three`}>
      <Component {...pageProps} />
    </main>
  )
}

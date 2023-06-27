import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
    type="text/javascript"
    src="../node_modules/tw-elements/dist/js/tw-elements.umd.min.js"></Script>
      </body>
    </Html>
  )
}

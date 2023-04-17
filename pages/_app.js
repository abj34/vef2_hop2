import Head from 'next/head'
import '../public/styles.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Próf</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
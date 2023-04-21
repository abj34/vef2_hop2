import Head from 'next/head'
import '../public/styles.css'
import { AuthProvider } from '../components/AuthContext';

export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <title>Próf</title>
      </Head>
      <Component {...pageProps} />
      </AuthProvider>
  )
}
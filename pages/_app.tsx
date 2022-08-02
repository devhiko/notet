import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout >
    </>
  )
}

export default MyApp

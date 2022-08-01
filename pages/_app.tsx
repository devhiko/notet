import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
// import '../styles/globals.css'
import 'bulma/css/bulma.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
    return <>
        <Head>
            <link rel="stylesheet" href="https://unpkg.com/anticss" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
}
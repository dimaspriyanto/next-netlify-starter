import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Insta Download</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Terms of Service" />
        <p className="description">
          Terms of Service Insta Download
        </p>
      </main>

      <Footer />
    </div>
  )
}

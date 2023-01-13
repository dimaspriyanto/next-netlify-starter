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
        <Header title="Authorize" />
        <p className="description">
          Authorize Insta Download
        </p>
      </main>

      <Footer />
    </div>
  )
}

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
        <Header title="Deletion" />
        <p className="description">
          Deletion Insta Download
        </p>
      </main>

      <Footer />
    </div>
  )
}

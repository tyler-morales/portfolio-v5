import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'

import Hero from '../components/sections/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tyler Morales | Front End Developer Portfolio</title>
        <meta
          name="description"
          content="Tyler Morale's Front End Developer Portfolio"
        />
      </Head>

      <main className="grid gap-12 grid-cols-1">
        {/* Hero */}
        <Hero />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

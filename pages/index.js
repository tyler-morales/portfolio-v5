import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import About from '../components/sections/About'

import Hero from '../components/sections/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tyler Morales | Front E nd Developer Portfolio</title>
        <meta
          name="description"
          content="Tyler Morale's Front End Developer Portfolio"
        />
      </Head>

      <main className="grid gap-12 grid-cols-1">
        <Hero />
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

import Head from 'next/head'
import Footer from '../components/Footer'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Experience from '../components/sections/Experience'

import Hero from '../components/sections/Hero'
import Skills from '../components/sections/Skills'
import Work from '../components/sections/Work'

export default function Home() {
  return (
    <>
      <Head>
        {/* Title */}
        <title>Tyler Morales | Front End Developer Portfolio</title>
        <meta
          property="og:title"
          content="Tyler Morales | Front End Developer Portfolio"
        />

        {/* Description */}
        <meta
          name="description"
          content="Tyler Morales's Front End Developer Portfolio"
        />

        <meta
          property="og:description"
          content="Tyler Morales's Front End Developer Portfolio"
        />

        {/* Misc */}
        <meta name="twitter:card" content="summary" />
        <meta property="og:url" content="https://tmo.codes/" />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/tyler-morales/portfolio-v5/main/public/images/og.png"
        />
        <meta property="og:type" content="website" />

        {/* Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="grid grid-cols-1">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

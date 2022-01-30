import Head from 'next/head'
import Image from 'next/image'

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
      <div>
        <h1 className="text-3xl font-display bg-green">Trade winds typeface</h1>
        <h1 className="text-3xl bg-blue text-orange">Montserat typeface</h1>
      </div>
      <Image
        src="/../public/icons/nextjs-icon.svg"
        height={50}
        width={50}
        alt="css icon"
      />
    </>
  )
}

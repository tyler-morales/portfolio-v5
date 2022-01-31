import {useState} from 'react'
import Image from 'next/image'
import Section from '../Section'

const sentences = [
  'On the side, I regularly ride bikes, run on trails, and read nightly.',
  'On the side, I regularly save kittens from trees, parachute off mountains, and brush and floss 3x a day.',
  'On the side, I regularly drink 1-3 cups of coffee and tea, meditate for 20 minutes, and eat a full serving of fruits and vegetables.',
  'On the side, I regularly take a cold shower, run ten miles, and get eight hours of sleep.',
  'On the side, I regularly read to dogs, take long walks on the beach, and frolic in a field of daisies. ',
]

export default function About() {
  const [sentence, setSentence] = useState(sentences[0])
  const [iterator, setIterator] = useState(1)

  const loopThroughSentences = () => {
    setSentence(sentences[iterator])
    setIterator((iterator += 1))
    if (iterator == 5) setIterator(0)
  }

  return (
    <Section>
      <div className="px-4 max-w-[1080px] m-auto">
        <h2 className="text-blue text-4xl font-bold mb-10">About</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-20">
          <figure className="w-full">
            <Image
              layout="responsive"
              width={1000}
              height={1329}
              src="/images/me.png"
              alt="Image of Tyler sitting at the CSU green house, 2022"
              className="object-cover w-full h-auto rounded-md"
            />
            <figcaption className="text-center opacity-50 mt-4 text-xs hover:opacity-100">
              Sitting at the CSU green house, 2022
            </figcaption>
          </figure>
          <div>
            <h4 className="lg:mt-10 mb-4 lg:mb-20 text-sm md:text-base">
              An Overview
            </h4>
            <p>
              Hello! My name is Tyler. Currently, I’m based in Chicago and
              interested in how well-made digital experiences can positively
              impact people. Back in 2013, I used to tinker with the browser’s
              developer tools to peek into how websites functioned– it can be
              scary at first to stare directly at incoherent numbers and letters
              when you’re beginning.
            </p>
            <p>
              Fast-forward to today, and I’ve had the privilege of working at a
              global tech corporation and financial tech start-up while
              continuously learning and building side projects. My main focuses
              these days are building full-stack, fast and accessible web
              applications at Cognizant for a variety of clients and
              experimenting with new web tools.
            </p>
            <p onClick={loopThroughSentences} className="cursor-pointer">
              {sentence}
            </p>
            <a
              href="/files/resume.pdf"
              target="_blank"
              className="bg-blue text-white md:text-lg rounded-lg px-4 py-2 md:px-8 md:py-4 block w-max mt-4 md:mt-8 ring-offset-currentColor ring-offset-4 focus:outline-none focus:ring-2 focus:ring-blue">
              Resume
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

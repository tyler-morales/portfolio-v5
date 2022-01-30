import React from 'react'
import Section from '../Section'

export default function Hero() {
  return (
    <>
      <Section>
        <div className="px-4 max-w-[1080px] m-auto">
          <span className="block md:text-center">👋 Hi, my name is Tyler!</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mt-4 md:leading-normal lg:leading-[120px] md:text-center">
            I’m a <span className="text-green">Front-end Developer</span> that
            loves problem solving
          </h1>
          <p className="mt-4 md:mt-8 md:text-3xl text-lg md:text-center md:leading-relaxed md:w-[43ch] m-auto">
            Experienced in building beautiful, interactive, and performant
            digital web apps that are accessible for all.
          </p>
        </div>
      </Section>
    </>
  )
}

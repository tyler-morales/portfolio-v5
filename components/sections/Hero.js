import React from 'react'
import Section from '../Section'

export default function Hero() {
  return (
    <Section>
      <div className="px-4 max-w-[1080px] m-auto">
        <span className="block text-lg md:text-center">
          👋 Hi, my name is Tyler!
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mt-4 md:leading-normal lg:leading-[120px] md:text-center">
          I’m a <span className="text-green">Front-end Developer</span> that
          loves problem solving
        </h1>
        <p className="mt-4 md:mt-8 md:text-3xl text-lg md:text-center md:leading-relaxed md:w-[43ch] m-auto text-blue">
          Experienced in building beautiful, interactive, and performant digital
          web apps that are accessible for all.
        </p>
        <a
          data-splitbee-event="Click CTA"
          href="#work"
          className="block px-4 py-2 mt-4 text-white rounded-lg bg-blue md:text-lg md:px-8 md:py-4 md:m-auto w-max md:mt-8 ring-offset-currentColor ring-offset-4 focus:outline-none focus:ring-2 focus:ring-blue">
          View Work
        </a>
      </div>
    </Section>
  )
}

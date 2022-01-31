import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="grid grid-rows-2 max-w-[1080px] lg:mx-auto border-t-2 border-blue py-10 mx-4 md:px-2">
      <div className="flex justify-between md:items-center flex-col md:flex-row gap-4">
        <Link href="/">
          <a className="font-display text-3xl ring-offset-currentColor ring-offset-4 focus:outline-none focus:ring-2 focus:ring-blue">
            Tyler Morales
          </a>
        </Link>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/tyler-morales-web-dev/"
            className="block ring-offset-currentColor ring-offset-4 focus:outline-none focus:ring-2 focus:ring-blue rounded-md"
            rel="noreferrer"
            target="_blank">
            LinkedIn
          </a>
          <a
            href="https://github.com/tyler-morales"
            className="block ring-offset-currentColor ring-offset-4 focus:outline-none focus:ring-2 focus:ring-blue rounded-md"
            rel="noreferrer"
            target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className="mt-4">
        <span className="block text-sm">Copyright 2022</span>
        <span className="block text-sm">
          Designed & Developed Tyler Morales
        </span>
      </div>
    </footer>
  )
}

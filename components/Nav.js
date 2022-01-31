import React, {useState, useEffect} from 'react'
import {Squeeze as Hamburger} from 'hamburger-react'
import useDeviceSize from '../hooks/useDeviceSize'

export default function Nav() {
  const [width] = useDeviceSize()
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(0)
  const [isOpen, setOpen] = useState(false)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
    setOpen(!isOpen)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    changeWidth()

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  return (
    <nav className="lg:max-w-[1080px] m-auto flex items-center justify-betweeen w-full">
      <ul className="pt-8 flex flex-col sm:flex-row sm:items-center w-full justify-between">
        <div className="flex justify-between items-center px-4 mb-6">
          <li className="font-display text-3xl">Tyler Morales</li>
          {screenWidth < 640 && (
            <button onClick={toggleNav}>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
          )}
        </div>
        {(toggleMenu || screenWidth > 640) && (
          <div className="flex gap-6 py-4 text-center flex-col sm:flex-row bg-blue text-white sm:text-black sm:bg-transparent">
            <li className="px-4">
              <a
                className="ring-offset-currentColor ring-offset-2 focus:outline-none focus:ring-2 focus:ring-blue sm:focus:px-0 sm:py-2 focus:px-4 py-2"
                href="#work">
                Work
              </a>{' '}
            </li>
            <li className="px-4">
              <a
                className="ring-offset-currentColor ring-offset-2 focus:outline-none focus:ring-2 focus:ring-blue sm:focus:px-0 sm:py-2 focus:px-4 py-2"
                href="#experience">
                Experience
              </a>{' '}
            </li>
            <li className="px-4">
              <a
                className="ring-offset-currentColor ring-offset-2 focus:outline-none focus:ring-2 focus:ring-blue sm:focus:px-0 sm:py-2 focus:px-4 py-2"
                href="#about">
                About
              </a>{' '}
            </li>
            <li className="px-4">
              <a
                className="ring-offset-currentColor ring-offset-2 focus:outline-none focus:ring-2 focus:ring-blue sm:focus:px-0 sm:py-2 focus:px-4 py-2"
                href="#contact">
                Contact
              </a>{' '}
            </li>
          </div>
        )}
      </ul>
    </nav>
  )
}

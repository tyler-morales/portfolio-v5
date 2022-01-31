import {useState} from 'react'
import Section from '../Section.js'
import Image from 'next/image'

import {AiFillGithub, AiOutlineLink, AiOutlineCloseCircle} from 'react-icons/ai'

const data = [
  {
    id: 1,
    name: 'GameNight',
    image1x1: '/images/gamenight-1x1.png',
    image1x2: '/images/gamenight-1x2.png',
    url: 'https://main.d2hg7o25chplbo.amplifyapp.com/#/',
    github: 'https://github.com/tyler-morales/game-night',
    description: `🎲 Game Night is a web app that records, tracks and gives uses the ability to analyze group game nights without the hassle of pencil and paper or remembering who won what when. \n Users can view an overall leaderboard per game, a winning average that normalizes wins through a win to lose ratio, and the history of games played.`,
    tech: [
      'React',
      'Tailwind CSS',
      'Amplify',
      'Cognito',
      'DynamoDB',
      'GraphQL',
    ],
  },
  {
    id: 2,
    name: 'Parkway',
    image1x1: '/images/parkway-1x1.png',
    image1x2: '/images/hermanshow-1x2.png',
    url: '',
    github: 'https://github.com/tyler-morales/visit-national-parks',
    description:
      '🏞  Parkway is a web app that leverages the National Park Service’s API to display and organize every national park and site. \n Users can create an account to save parks they’ve visited or want to visit. Additionally, they can filter parks for the ones that best fits their needs and view a detailed park info page with images, things to do, prices, and more.',
    tech: [
      'React',
      'Tailwind CSS',
      'Amplify',
      'Cognito',
      'DynamoDB',
      'GraphQL',
      'Cypress',
      'APIs',
    ],
  },
  {
    id: 3,
    name: 'Manifest',
    image1x1: '/images/manifest-1x1.png',
    image1x2: '/images/manifest-1x2.png',
    url: 'https://www.usemanifest.com/',
    github: 'https://github.com/tyler-morales/manifest_ledger',
    description:
      'The Manifest website is a marketing site where potential clients can engage with the company and learn more about the process of digitizing and consolidating retirement accounts. \n Prospective clients can read about how Manifest is modernizing the retirement transfer experience and contact them for more info.',
    tech: ['Jekyll', 'SCSS', 'Javascript', 'Google Sheets'],
  },
]

export default function Work() {
  const [open, setOpen] = useState(null)

  const openProject = (id) => {
    setOpen(id)
  }
  const closeProject = (id) => {
    console.log('clicked')
    if (open == id) setOpen(null)
  }

  return (
    <Section bgColor="bg-green" id="experience">
      <div className="px-4 max-w-[1080px] m-auto">
        <h2 className="text-white text-4xl font-bold mb-10">Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center ">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`relative ${
                  open == item.id
                    ? 'col-span-3 w-full bg-darkGray rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 row-start-1 cursor-default gap-4 xl:gap-0'
                    : 'col-span-1 w-max cursor-pointer'
                }`}>
                <div
                  className={`absolute bottom-1 w-full px-4 pb-4 h-1/3 rounded-b-xl z-10 ${
                    open == item.id ? '' : 'bg-gradient-to-t from-blue'
                  }`}>
                  {open != item.id && (
                    <h3 className="absolute bottom-4 text-xl font-bold text-white">
                      {item.name}
                    </h3>
                  )}
                </div>
                <Image
                  src={open == item.id ? item.image1x1 : item.image1x2}
                  height={open == item.id ? 400 : 600}
                  width={open == item.id ? 400 : 300}
                  alt={item.name}
                  className="object-cover rounded-xl"
                  onClick={() => openProject(item.id)}
                />
                {/* Opened Project */}
                {open == item.id && (
                  <div className="mt-4 md:mt-0 xl:ml-8 pl-4 bg-white w-full rounded-lg p-4 shadow-lg">
                    <div className="flex justify-between items-center">
                      <h3 className="text-3xl font-bold">{item.name}</h3>
                      {open == item.id && (
                        <button
                          onClick={() => closeProject(item.id)}
                          className="w-max">
                          <AiOutlineCloseCircle size="1.5em" />
                        </button>
                      )}
                    </div>
                    <h4 className="uppercase text-xs opacity-40 mt-2">
                      Description
                    </h4>
                    <p className="mt-4">{item.description}</p>
                    <div className="flex gap-6">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-lightBlue w-max"
                        href={item.url}>
                        <AiOutlineLink size="1.25em" /> <span>Live Link</span>
                      </a>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-lightBlue w-max"
                        href={item.github}>
                        <AiFillGithub size="1.25em" /> <span>Github</span>
                      </a>
                    </div>
                    <h4 className="uppercase text-xs opacity-40 mt-6">
                      Tech Stack
                    </h4>
                    <ul className="flex flex-wrap gap-2 mt-4">
                      {item.tech.map((tech, index) => {
                        return (
                          <li
                            className="rounded-full bg-lightBlue text-white py-1 px-4 text-sm md:text-base"
                            key={index}>
                            {tech}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

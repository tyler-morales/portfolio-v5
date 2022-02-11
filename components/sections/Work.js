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
    image1x2: '/images/parkway-1x2.png',
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
    if (open == id) setOpen(null)
  }

  return (
    <Section bgColor="bg-green" id="work">
      <div className="px-4 max-w-[1080px] m-auto">
        <h2 className="mb-10 text-4xl font-bold text-white">Work</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className={`relative ${
                  open == item.id
                    ? 'md:col-span-3 w-full bg-darkGray rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 row-start-1 cursor-default gap-4 xl:gap-0'
                    : 'w-max cursor-pointer'
                }`}>
                <div
                  className={`absolute bottom-1 w-full px-4 pb-4 h-1/3 rounded-b-xl z-10 ${
                    open == item.id ? '' : 'bg-gradient-to-t from-blue'
                  }`}>
                  {open != item.id && (
                    <h3 className="absolute text-xl font-bold text-white bottom-4">
                      {item.name}
                    </h3>
                  )}
                </div>
                <Image
                  src={open == item.id ? item.image1x1 : item.image1x2}
                  height={open == item.id ? 400 : 600}
                  width={open == item.id ? 400 : 300}
                  alt={item.name}
                  placeholder="blur"
                  blurDataURL="/images/blur.png"
                  className="object-contain rounded-xl"
                  onClick={() => openProject(item.id)}
                />
                {/* Opened Project */}
                {open == item.id && (
                  <div className="w-full p-4 pl-4 mt-4 bg-white rounded-lg shadow-lg md:mt-0 xl:ml-8">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-bold">{item.name}</h3>
                      {open == item.id && (
                        <button
                          onClick={() => closeProject(item.id)}
                          className="w-max">
                          <AiOutlineCloseCircle size="1.5em" />
                        </button>
                      )}
                    </div>
                    <h4 className="mt-2 text-xs uppercase opacity-40">
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
                    <h4 className="mt-6 text-xs uppercase opacity-40">
                      Tech Stack
                    </h4>
                    <ul className="flex flex-wrap gap-2 mt-4">
                      {item.tech.map((tech, index) => {
                        return (
                          <li
                            className="px-4 py-1 text-sm text-white rounded-full bg-lightBlue md:text-base"
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

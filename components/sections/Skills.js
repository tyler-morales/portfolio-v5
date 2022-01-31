import React from 'react'
import Section from '../Section'
import Image from 'next/image'
const data = [
  {
    name: 'React.js',
    path: '/icons/react.svg',
  },
  {
    name: 'Next.js',
    path: '/icons/nextjs.svg',
  },
  {
    name: 'Tailwind CSS',
    path: '/icons/tailwindcss.svg',
  },
  {
    name: 'Javascript',
    path: '/icons/javascript.svg',
  },
  {
    name: 'GraphQL',
    path: '/icons/graphql.svg',
  },
  {
    name: 'HTML',
    path: '/icons/html.svg',
  },
  {
    name: 'CSS',
    path: '/icons/css.svg',
  },
  {
    name: 'Amplify',
    path: '/icons/amplify.svg',
  },
  {
    name: 'DynamoDB',
    path: '/icons/dynamodb.svg',
  },
  {
    name: 'Cognito.js',
    path: '/icons/cognito.svg',
  },
  {
    name: 'Cypress',
    path: '/icons/cypress.svg',
  },
  {
    name: 'SASS',
    path: '/icons/sass.svg',
  },
  {
    name: 'Github',
    path: '/icons/github.svg',
  },
  {
    name: 'Figma',
    path: '/icons/figma.svg',
  },
]

export default function Skills() {
  return (
    <Section>
      <div className="px-4 max-w-[1080px] m-auto">
        <h2 className="text-blue text-4xl font-bold mb-10">Skills</h2>
        <ul className="flex flex-wrap gap-8 justify-center">
          {data.map((icon, index) => {
            return (
              <li key={index} className="flex items-center gap-4">
                <Image src={icon.path} width={50} height={50} alt={icon.name} />
                <span className="font-bold text-lg">{icon.name}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

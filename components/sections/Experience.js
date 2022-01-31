import {useState} from 'react'
import Section from '../Section.js'

const data = [
  {
    id: 1,
    name: 'Cognizant',
    role: 'Front End Developer',
    date: 'August–Current',
    description: [
      'Architected, strategized, and deployed full stack web apps with React & Next.js while integrating AWS services and third-party tools',
      'Implemented user-facing features/ mockups into UI and back-end functionality to create performant and responsive web applications',
      'Collaborated with developers and project managers to push updates on a consistent & feature-by-feature basis while incorporating agile methodology, code reviews, and CI/CD',
      'Developed unit & integration tests with React Testing Library & Cypress',
    ],
  },
  {
    id: 2,
    name: 'Manifest',
    role: 'Front End Developer',
    date: 'March 2020–July 2021',
    description: [
      'Developed & updated an existing marketing website using modern CSS layouts/ techniques and Jekyll that resulted in a maintainable, scalable & clean codebase',
      'Optimized the build process to achieve a SEO & performance score of 100/100 on Google Lighthouse',
      'Communicated closely with the designer to bring mockups into reality',
      'Collaborated with the CEO to experiment with modern JavaScript & CSS features to construct an interactive tool to increase customers',
    ],
  },
  {
    id: 3,
    name: 'Freelance',
    role: 'Front End Developer, UI/UX Designer, and Project Manager',
    date: 'Ongoing',
    description: [
      'Demonstrated expertise in translating the client’s needs into a marketing website and Netlify CMS for blog posts that resulted in faster page loads & increased user engagement',
      'Prioritized modern image compression, accessibility features and security to achieve a Google Lighthouse score of 99/100 in performance & accessibility',
      'Implemented evergreen technologies such as Google Maps API, Netlify forms & a modern CMS to update the client’s virtual image',
      'Decomposed technical requirements into client understandable actions',
    ],
  },
]

export default function Experience() {
  const [tab, setTab] = useState(1)

  return (
    <Section bgColor="bg-blue" id="experience">
      <div className="px-4 max-w-[1080px] m-auto">
        <h2 className="text-white text-4xl font-bold mb-10">Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
          {/* Buttons */}
          <div className="flex gap-8 md:flex-col justify-start overflow-scroll md:overflow-visible">
            {data.map((job, index) => {
              return (
                <button
                  onClick={() => setTab(job.id)}
                  key={index}
                  className={`text-lg text-white border-4 border-green rounded-lg py-2 px-4 ring-offset-blue ring-offset-4 focus:outline-none focus:ring-2 focus:ring-green ${
                    tab == job.id && 'bg-green'
                  }`}>
                  {job.name}
                </button>
              )
            })}
          </div>
          {/* Summary */}
          {data.map((job, index) => {
            return (
              <div
                key={index}
                className={`md:col-span-3 px-4 ${
                  tab == job.id ? 'block' : 'hidden'
                }`}>
                <h3 className="text-white font-bold text-2xl mb-2">
                  <span className="text-orange">{job.role}</span> @ {job.name}
                </h3>
                <span className="text-white mb-6 block text-lg">
                  {job.date}
                </span>
                <ul>
                  {job.description.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="text-white mb-2 list-style-custom">
                        {item}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

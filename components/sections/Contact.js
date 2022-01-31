import {useState} from 'react'
import Section from '../Section'

const data = [
  '👏 Looking for someone to work on your team?',
  '😎 Working on an interesting project?',
  '⚛️ Want to talk all things React or the future of the web?',
  '👋 Just want to say Hi :)',
]

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      name,
      email,
      message,
    }

    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    })

    console.log(data)
  }

  return (
    <Section>
      <div className="px-4 max-w-[1080px] m-auto">
        <h2 className="text-blue text-4xl font-bold mb-10">Contact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-blue text-3xl font-bold mb-8">Get in Touch</h3>
            <ul>
              {data.map((item, index) => {
                return (
                  <li className="mb-2" key={index}>
                    {item}
                  </li>
                )
              })}
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-8">
              <input
                id="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="border-2 border-blue px-4 py-2 rounded-md text-blue ring-offset-currentColor ring-offset-4 focus:outline-none focus:ring-2"
              />
              <input
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                required
                className="border-2 border-blue px-4 py-2 rounded-md text-blue ring-offset-currentColor ring-offset-4 focus:outline-none focus:ring-2"
              />
            </div>
            <textarea
              id="message"
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message..."
              rows="10"
              className="border-2 w-full mt-8  border-blue px-4 py-2 rounded-md text-blue ring-offset-currentColor ring-offset-4 focus:outline-none focus:ring-2"
            />
            <button
              type="submit"
              className="bg-blue text-white md:text-lg rounded-lg px-4 py-2 md:px-8 md:py-4 block w-max mt-4 md:mt-8 ring-offset-currentColor ring-offset-4 focus:outline-none focus:ring-2 focus:ring-blue">
              Email me
            </button>
          </form>
        </div>
      </div>
    </Section>
  )
}

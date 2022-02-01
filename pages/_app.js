import splitbee from '@splitbee/web'
import '../styles/globals.css'
import Nav from '../components/Nav.js'

splitbee.init()

function MyApp({Component, pageProps}) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

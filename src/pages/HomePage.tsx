import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import News from '../components/News'
import {Features} from '../components/Features'
import Reason from '../components/Reason'
import Footer from '../components/Footer'
function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Reason />
        <News />
        <Footer />
      </main>
    </>
  )
}

export default HomePage

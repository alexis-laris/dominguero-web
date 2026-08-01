import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'

import Brands from './components/Brands.jsx'
import Timeline from './components/Timeline.jsx'
import Footer from './components/Footer.jsx'
import CategoryIcons from './components/CategoryIcons.jsx'
import AboutMe from './components/AboutMe.jsx'

import Journey from './components/Journey.jsx'
import Audience from './components/Audience.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Header />

      <main className="container-px max-w-[1400px] mx-auto">
        <Hero />
        <CategoryIcons />
        <AboutMe />



        <Brands />
        <Timeline />

        <div className="space-y-16">
          <Journey />
          <Audience />
        </div>
      </main>

      <div className="container-px max-w-[1400px] mx-auto">
        <Footer />
      </div>
    </div>
  )
}
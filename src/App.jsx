import Navbar from "./components/Navbar"
import ScrollProgress from "./components/ScrollProgress"
import BackToUp from "./components/BackToUp"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Gallery from "./components/Gallery"
import Location from "./components/Location"
import Footer from "./components/Footer"
import ContactCTA from "./components/ContactCTA"

function App() {
  return (
    <div className="bg-[#0f0f0f] text-white">
      <Navbar />
      <ScrollProgress />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Gallery />
      <BackToUp />
      <Location />
      <ContactCTA />
      <Footer />
    </div>
  )
}

export default App

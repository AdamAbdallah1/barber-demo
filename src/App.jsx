import { motion } from "framer-motion"
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

// Premium, intentional transition curve (custom ease-out cubic bezier)
const premiumTransition = {
  duration: 0.9,
  ease: [0.25, 1, 0.5, 1], // Smooth deceleration curve
}

// Global scroll variants
const slideFromLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
}

const slideFromRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
}

// Viewport configuration for clean trigger pacing
const viewportConfig = { 
  once: true, 
  amount: 0.15 // Triggers as soon as 15% of the section enters view
}

function App() {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-[#e4e4e7] font-sans antialiased selection:bg-[#C5A059] selection:text-black scroll-smooth overflow-x-hidden">
      
      {/* GLOBAL BACKGROUND SNIPPET */}
      <div className="fixed inset-0 h-full w-full bg-slate-950 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      
      <Navbar />
      <ScrollProgress />
      
      {/* FOREGROUND CONTENT WITH ALTERNATING VIEWPORT SLIDES */}
      <div className="relative z-10 w-full">
        
        {/* 1. Hero: Slides smoothly from Left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={slideFromLeft}
          transition={premiumTransition}
        >
          <Hero />
        </motion.div>

        {/* 2. Services: Slides smoothly from Right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={slideFromRight}
          transition={premiumTransition}
        >
          <Services />
        </motion.div>

        {/* 3. Gallery: Slides smoothly from Left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={slideFromLeft}
          transition={premiumTransition}
        >
          <Gallery />
        </motion.div>

        {/* 4. About: Slides smoothly from Right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={slideFromRight}
          transition={premiumTransition}
        >
          <About />
        </motion.div>

        {/* 5. Testimonials: Slides smoothly from Left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={slideFromLeft}
          transition={premiumTransition}
        >
          <Testimonials />
        </motion.div>

        {/* 6. Location: Slides smoothly from Right */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={slideFromRight}
          transition={premiumTransition}
        >
          <Location />
        </motion.div>

        {/* 7. Contact CTA: Slides smoothly from Left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={slideFromLeft}
          transition={premiumTransition}
        >
          <ContactCTA />
        </motion.div>

        <BackToUp />
        <Footer />
      </div>

    </div>
  )
}

export default App
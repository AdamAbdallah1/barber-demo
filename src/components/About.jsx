import { motion } from "framer-motion"

const About = () => {
  return (
    <section id="about" className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="h-[400px] rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#050505]"
        />

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-4xl font-bold mb-6">
            Tradition Meets Modern Style
          </h2>

          <p className="text-gray-400 mb-6">
            Rooted in Lebanese barber culture, we combine classic techniques
            with modern precision. Every cut is personal, every detail matters.
          </p>

          <p className="text-gray-400">
            This is more than a haircut — it’s confidence, discipline, and identity.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About

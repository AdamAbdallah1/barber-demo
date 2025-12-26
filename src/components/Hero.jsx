import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#0f0f0f] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[#c8a24d] uppercase tracking-widest text-sm mb-4">
            Premium Barbershop · Lebanon
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
            Sharp Cuts.<br />
            Timeless Style.
          </h1>

          <p className="text-gray-400 max-w-md mb-8">
            A modern Lebanese barbershop delivering precision haircuts,
            clean fades, and confident style for men who care about detail.
          </p>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="bg-[#c8a24d] text-black px-6 py-3 rounded-full text-sm font-medium"
            >
              Book Appointment
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#services"
              className="border border-gray-600 text-white px-6 py-3 rounded-full text-sm"
            >
              View Services
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:block h-125 rounded-3xl bg-linear-to-br from-[#1a1a1a] to-[#0a0a0a]"
        />
      </div>
    </section>
  )
}

export default Hero

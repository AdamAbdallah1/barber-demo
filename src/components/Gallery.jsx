import { motion } from "framer-motion"

const images = Array.from({ length: 6 })

const Gallery = () => {
  return (
    <section className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white text-4xl font-bold mb-12"
        >
          Our Work
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="aspect-square rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#050505]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

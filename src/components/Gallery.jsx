import { motion } from "framer-motion"
import cut1 from "../assets/gallery/barber1.jpg"
import cut2 from "../assets/gallery/barber2.jpg"
import cut3 from "../assets/gallery/barber3.jpg"
import cut4 from "../assets/gallery/barber4.jpg"
import cut5 from "../assets/gallery/barber5.jpg"
import cut6 from "../assets/gallery/barber6.jpg"

const images = [cut1, cut2, cut3, cut4, cut5, cut6]

const Gallery = () => {
  return (
    <section className="bg-[#0f0f0f] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white text-4xl font-bold mb-12"
        >
          Our Work
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl"
            >
              <img
                src={img}
                alt="Barber work"
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

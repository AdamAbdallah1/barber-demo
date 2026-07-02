import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import cut1 from "../assets/gallery/barber1.jpg"
import cut2 from "../assets/gallery/barber2.jpg"
import cut3 from "../assets/gallery/barber3.jpg"
import cut4 from "../assets/gallery/barber4.jpg"

const images = [cut1, cut2, cut3, cut4]

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <section id="gallery" className="bg-transparent py-20 border-y border-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#C5A059] uppercase tracking-[0.3em] text-[9px] font-semibold mb-3">Lookbook</p>
            <h2 className="text-white text-2xl sm:text-3xl font-light tracking-tight">The Aesthetic</h2>
          </div>
          <a href="https://instagram.com" className="text-[10px] text-gray-500 uppercase tracking-[0.2em] hover:text-white transition-colors duration-300 self-start sm:self-auto">
            Follow our Instagram →
          </a>
        </div>

        {/* Compressed Asymmetrical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true }}
              className={`overflow-hidden cursor-pointer relative group rounded-sm border border-white/[0.02] ${
                i === 0 ? "sm:col-span-7 h-[260px] md:h-[300px]" : 
                i === 1 ? "sm:col-span-5 h-[260px] md:h-[300px]" : 
                i === 2 ? "sm:col-span-5 h-[320px] md:h-[360px]" : 
                "sm:col-span-7 h-[320px] md:h-[360px]"
              }`}
              onClick={() => setSelectedImg(img)}
            >
              <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={img}
                alt="Lebanese Grooming Execution"
                className="w-full h-full object-cover filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-103 transition-all duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0a0a0c]/95 backdrop-blur-sm flex justify-center items-center z-50 p-6"
            onClick={() => setSelectedImg(null)}
          >
            <motion.img
              src={selectedImg}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-h-[80vh] max-w-full object-contain rounded-sm shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
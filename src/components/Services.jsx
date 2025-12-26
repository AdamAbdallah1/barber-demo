import { motion } from "framer-motion"

const services = [
  { title: "Classic Haircut", price: "$10", desc: "Precision cut tailored to your style" },
  { title: "Fade & Styling", price: "$12", desc: "Clean fades with modern finish" },
  { title: "Beard Trim", price: "$8", desc: "Sharp lines and balanced shaping" },
  { title: "Full Grooming", price: "$18", desc: "Haircut, beard, and styling" }
]

const Services = () => {
  return (
    <section id="services" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-4xl font-bold mb-12"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="border border-gray-800 rounded-2xl p-6 bg-[#0f0f0f]"
            >
              <h3 className="text-white text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{s.desc}</p>
              <span className="text-[#c8a24d] font-medium">{s.price}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

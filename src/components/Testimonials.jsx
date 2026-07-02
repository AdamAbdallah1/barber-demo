import { motion } from "framer-motion"

const testimonials = [
  { name: "Rami H.", role: "Executive", text: "Absolute masterclass in precision. The only chair in Beirut I trust before a major board meeting." },
  { name: "Karim S.", role: "Creative Director", text: "They understand face structure and modern trends perfectly. Unparalleled luxury experience." },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-transparent py-32 border-t border-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] text-center mb-16">The Word</p>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-gray-300 font-serif italic text-xl lg:text-2xl leading-relaxed mb-8">
                "{t.text}"
              </p>
              <div>
                <h4 className="text-white text-xs uppercase tracking-[0.2em]">{t.name}</h4>
                <p className="text-[#C5A059] text-[10px] uppercase tracking-widest mt-2">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
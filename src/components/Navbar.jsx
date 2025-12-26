import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-white text-xl font-semibold tracking-wide">
          Beirut <span className="text-[#c8a24d]">Barber</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* CTA */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="hidden md:block border border-[#c8a24d] text-[#c8a24d] px-5 py-2 text-sm rounded-full hover:bg-[#c8a24d] hover:text-black transition"
        >
          Book Now
        </motion.a>
      </div>
    </nav>
  )
}

export default Navbar

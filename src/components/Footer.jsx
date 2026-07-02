const Footer = () => {
  return (
    <footer className="bg-transparent py-12 border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-gray-600 text-xs font-light tracking-wide">
          © 2026 Cedars Tech. Crafted with pride in Beirut, Lebanon.
        </span>

        <div className="flex gap-8 text-gray-500 text-xs tracking-wider uppercase">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          <a href="#about" className="hover:text-white transition-colors">Story</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
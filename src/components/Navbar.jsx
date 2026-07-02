import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const links = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#gallery" },
  { name: "Heritage", href: "#about" },
  { name: "Location", href: "#location" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? " backdrop-blur-xl border-b border-white/[0.02] py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        <a href="#" className="flex flex-col z-50 relative">
          <span className="text-white text-xl font-bold tracking-[0.2em] uppercase leading-none">Beirut</span>
          <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase mt-1">Barber Club</span>
        </a>

        <div className="hidden lg:flex items-center gap-12">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors duration-500"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/96181090757?text=Reserve%20my%20chair."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#C5A059]/30 text-[#C5A059] px-6 py-2.5 text-[10px] tracking-[0.3em] uppercase hover:bg-[#C5A059] hover:text-black transition-all duration-500"
          >
            Reserve
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white z-50 relative">
          {menuOpen ? <HiOutlineX className="w-7 h-7" /> : <HiOutlineMenu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#0a0a0c] flex flex-col items-center justify-center space-y-8 z-40"
          >
            {links.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl uppercase tracking-[0.3em] text-white hover:text-[#C5A059] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              href="https://wa.me/96181090757"
              className="mt-8 text-[#C5A059] uppercase tracking-[0.3em] text-sm border-b border-[#C5A059] pb-1"
            >
              Book Direct
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
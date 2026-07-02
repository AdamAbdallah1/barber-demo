import { motion } from "framer-motion"

const Location = () => {
  return (
    <section id="location" className="bg-transparent py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">
        
        <div className="lg:col-span-5">
          <p className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] mb-4">Coordinates</p>
          <h2 className="text-white text-4xl font-light tracking-tight mb-10">Find The Studio</h2>
          
          <div className="space-y-8 text-sm font-light text-gray-400">
            <div>
              <h3 className="text-white uppercase tracking-[0.1em] text-xs mb-2">Address</h3>
              <p>Downtown Beirut District<br/>Private Parking Available</p>
            </div>
            
            <div>
              <h3 className="text-white uppercase tracking-[0.1em] text-xs mb-2">Hours of Operation</h3>
              <div className="flex justify-between max-w-xs border-b border-white/[0.05] pb-2 mb-2">
                <span>Mon - Sat</span>
                <span>10:00 - 21:00</span>
              </div>
              <div className="flex justify-between max-w-xs text-[#C5A059]">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 h-[400px] w-full bg-[#111] p-2 border border-white/[0.05]">
          <iframe
            title="Studio Location"
            src="https://www.google.com/maps?q=Beirut&output=embed"
            className="w-full h-full filter grayscale contrast-[1.1] opacity-70 hover:opacity-100 transition-opacity duration-500"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  )
}

export default Location
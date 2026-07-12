import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import barberData from "../data/barberData";

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section
      id="gallery"
      className="bg-transparent py-20 border-y border-white/[0.02]"
    >

      <div className="max-w-6xl mx-auto px-6 lg:px-12">


        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">


          <div>

            <p className="text-[#C5A059] uppercase tracking-[0.3em] text-[9px] font-semibold mb-3">
              Lookbook
            </p>


            <h2 className="text-white text-2xl sm:text-3xl font-light tracking-tight">
              The Collection
            </h2>


          </div>



          <a
            href={barberData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] text-gray-500 uppercase tracking-[0.2em] hover:text-white transition-colors duration-300 self-start sm:self-auto"
          >
            View Instagram →
          </a>


        </div>




        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">


          {barberData.images.gallery.map((img, index) => (


            <motion.div

              key={img}

              initial={{
                opacity:0,
                y:15
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.6,
                delay:index * 0.08
              }}

              viewport={{
                once:true
              }}

              onClick={() => setSelectedImg(img)}

              className={`
                overflow-hidden cursor-pointer relative group rounded-sm border border-white/[0.02]
                ${
                  index === 0
                  ? "sm:col-span-7 h-[260px] md:h-[300px]"
                  : index === 1
                  ? "sm:col-span-5 h-[260px] md:h-[300px]"
                  : index === 2
                  ? "sm:col-span-5 h-[320px] md:h-[360px]"
                  : "sm:col-span-7 h-[320px] md:h-[360px]"
                }
              `}

            >


              <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors duration-500 z-10" />


              <img

                src={img}

                alt={`${barberData.name} haircut style`}

                className="
                  w-full h-full object-cover
                  filter grayscale-[15%]
                  group-hover:grayscale-0
                  group-hover:scale-105
                  transition-all duration-700 ease-out
                "

              />


            </motion.div>


          ))}


        </div>


      </div>




      <AnimatePresence>


        {selectedImg && (

          <motion.div

            initial={{
              opacity:0
            }}

            animate={{
              opacity:1
            }}

            exit={{
              opacity:0
            }}

            onClick={() => setSelectedImg(null)}

            className="
              fixed inset-0
              bg-[#0a0a0c]/95
              backdrop-blur-sm
              flex justify-center items-center
              z-50
              p-6
            "

          >


            <motion.img

              src={selectedImg}

              initial={{
                scale:0.98,
                opacity:0
              }}

              animate={{
                scale:1,
                opacity:1
              }}

              exit={{
                scale:0.98,
                opacity:0
              }}

              transition={{
                duration:0.3
              }}

              className="
                max-h-[80vh]
                max-w-full
                object-contain
                rounded-sm
                shadow-2xl
              "

            />


          </motion.div>

        )}


      </AnimatePresence>


    </section>
  );
};


export default Gallery;
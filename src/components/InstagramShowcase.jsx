import { motion } from "framer-motion";
import barberData from "../data/barberData";


const InstagramShowcase = () => {

  return (

    <section
      id="instagram"
      className="py-32 bg-transparent border-t border-white/[0.02]"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-12">


        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">


          <div>

            <p className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] mb-4">
              Instagram
            </p>


            <h2 className="text-white text-4xl font-light tracking-tight">
              Latest <span className="font-serif italic text-gray-400">Looks</span>
            </h2>

          </div>




          <a
            href={barberData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-gray-400
              hover:text-[#C5A059]
              transition-colors
            "
          >
            Follow Us →
          </a>


        </div>





        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">


          {barberData.images.instagram.map((image,index)=>(


            <motion.a

              key={index}

              href={barberData.instagram}

              target="_blank"

              rel="noopener noreferrer"

              initial={{
                opacity:0,
                y:20
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

              className="
                group
                relative
                aspect-square
                overflow-hidden
                rounded-sm
                border
                border-white/[0.05]
              "

            >


              <img

                src={image}

                alt="Instagram barber style"

                className="
                  w-full
                  h-full
                  object-cover
                  grayscale-[20%]
                  group-hover:grayscale-0
                  group-hover:scale-105
                  transition-all
                  duration-700
                "

              />


              <div
                className="
                  absolute
                  inset-0
                  bg-black/30
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                "
              />


            </motion.a>


          ))}


        </div>


      </div>


    </section>

  );

};


export default InstagramShowcase;
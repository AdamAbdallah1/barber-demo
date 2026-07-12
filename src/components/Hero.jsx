import { motion } from "framer-motion";
import barberData from "../data/barberData";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center bg-transparent overflow-hidden pt-24 pb-12">

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        <div className="lg:col-span-7 z-20">

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 1, 0.5, 1],
            }}
          >

            <p className="text-[#C5A059] uppercase tracking-[0.3em] text-[9px] font-semibold mb-4">
              {barberData.tagline}
            </p>


            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-[1.15] tracking-tight max-w-xl">

              Premium Grooming
              <span className="font-serif italic text-gray-400">
                {" "}Crafted For Gentlemen.
              </span>

            </h1>

          </motion.div>


          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="mt-5 text-gray-400 max-w-sm text-xs sm:text-sm leading-relaxed font-light"
          >
            {barberData.description}
          </motion.p>



          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="mt-8 flex flex-col gap-6"
          >

            <a
              href={barberData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-white text-[10px] uppercase tracking-[0.25em] font-medium hover:text-[#C5A059] transition-colors duration-300"
            >

              <span className="w-8 h-[1px] bg-[#C5A059] group-hover:w-12 transition-all duration-500 ease-out" />

              Book Your Appointment

            </a>


            <div className="flex gap-8 text-gray-500 text-[10px] uppercase tracking-[0.2em]">

              <div>
                <span className="block text-white text-sm mb-1">
                  4.9
                </span>
                Rating
              </div>


              <div>
                <span className="block text-white text-sm mb-1">
                  500+
                </span>
                Clients
              </div>


              <div>
                <span className="block text-white text-sm mb-1">
                  10AM
                </span>
                Open
              </div>

            </div>

          </motion.div>


        </div>



        <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] lg:h-[480px] w-full overflow-hidden rounded-sm border border-white/[0.03]">

          <motion.img
            initial={{
              scale: 1.05,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            src={barberData.images.hero}
            alt={barberData.name}
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.8] contrast-[1.05]"
          />

        </div>


      </div>

    </section>
  );
};

export default Hero;
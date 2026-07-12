import { motion } from "framer-motion";
import { ScissorsIcon, SparklesIcon, FireIcon } from "@heroicons/react/24/outline";
import barberData from "../data/barberData";

const icons = [
  <ScissorsIcon className="w-4 h-4 stroke-[1.25]" />,
  <SparklesIcon className="w-4 h-4 stroke-[1.25]" />,
  <FireIcon className="w-4 h-4 stroke-[1.25]" />,
];


const containerVariants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};


const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};


const Services = () => {

  return (

    <section
      id="services"
      className="bg-transparent py-32 relative overflow-hidden"
    >


      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-5xl h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />



      <div className="max-w-3xl mx-auto px-6 lg:px-8">


        <div className="flex flex-col items-center text-center mb-24">


          <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[9px] font-bold mb-4 bg-[#C5A059]/5 px-3 py-1 rounded-full border border-[#C5A059]/10">
            Grooming Services
          </span>


          <h2 className="text-white text-3xl sm:text-4xl font-light tracking-tight leading-none">

            Curated{" "}

            <span className="font-serif italic text-gray-400">
              Services
            </span>

          </h2>


          <div className="w-12 h-[1px] bg-[#C5A059]/30 mt-6" />


        </div>




        <motion.div

          variants={containerVariants}

          initial="hidden"

          whileInView="show"

          viewport={{
            once:true,
            margin:"-80px"
          }}

          className="space-y-0"

        >


          {barberData.services.map((service,index)=>(


            <motion.div

              key={service.title}

              variants={itemVariants}

              className="group cursor-pointer relative py-8"

            >


              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/[0.04] group-hover:bg-[#C5A059]/20 transition-colors duration-500" />


              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C5A059] group-hover:w-full transition-all duration-700 ease-out" />




              <div className="flex items-start justify-between gap-6 relative z-10">


                <div className="flex gap-5 items-start w-full">


                  <div className="mt-0.5 text-gray-500 group-hover:text-[#C5A059] group-hover:scale-110 transition-all duration-500 p-1.5 bg-white/[0.01] border border-white/[0.03] group-hover:border-[#C5A059]/20 rounded-sm">

                    {icons[index % icons.length]}

                  </div>




                  <div className="w-full">


                    <div className="flex items-baseline justify-between w-full gap-4">


                      <h3 className="text-white text-base font-light tracking-wide group-hover:text-[#C5A059] transition-colors duration-300">

                        {service.title}

                      </h3>



                      <div className="flex-grow border-b border-dotted border-white/[0.1] mx-2" />



                    </div>



                    <p className="text-gray-400 text-xs font-light mt-2 max-w-xl leading-relaxed tracking-wide">

                      {service.description}

                    </p>


                  </div>


                </div>




                <div className="text-[#C5A059] text-base font-medium tracking-wider pl-2 font-mono">

                  {service.price}

                </div>



              </div>


            </motion.div>


          ))}


        </motion.div>





        <div className="mt-20 text-center">


          <a

            href={barberData.whatsapp}

            target="_blank"

            rel="noopener noreferrer"

            className="text-[9px] text-gray-400 uppercase tracking-[0.3em] border-b border-white/[0.08] pb-2 hover:text-[#C5A059] hover:border-[#C5A059] transition-all duration-300 inline-block"

          >

            Book Your Session

          </a>


        </div>



      </div>


    </section>

  );
};


export default Services;
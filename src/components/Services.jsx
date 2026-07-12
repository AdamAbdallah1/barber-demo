import { motion } from "framer-motion";
import { ScissorsIcon, SparklesIcon, FireIcon } from "@heroicons/react/24/outline";
import barberData from "../data/barberData";

const icons = [
  <ScissorsIcon className="w-4 h-4 stroke-[1.25]" />,
  <SparklesIcon className="w-4 h-4 stroke-[1.25]" />,
  <FireIcon className="w-4 h-4 stroke-[1.25]" />,
];


const Services = () => {

  return (

    <section
      id="services"
      className="bg-transparent py-32 relative overflow-hidden"
    >


      <div className="max-w-3xl mx-auto px-6 lg:px-8">


        <div className="flex flex-col items-center text-center mb-20">


          <span className="text-[#C5A059] uppercase tracking-[0.4em] text-[9px] font-bold mb-4">
            Services
          </span>


          <h2 className="text-white text-3xl sm:text-4xl font-light tracking-tight">
            Curated <span className="font-serif italic text-gray-400">Grooming</span>
          </h2>


          <div className="w-12 h-[1px] bg-[#C5A059]/30 mt-6" />


        </div>





        <div className="space-y-0">


          {barberData.services.map((service,index)=>(


            <motion.div

              key={service.title}

              initial={{
                opacity:0,
                y:20
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.7,
                delay:index * 0.1
              }}

              viewport={{
                once:true
              }}

              className="
                group
                relative
                py-8
                border-b
                border-white/[0.05]
              "

            >



              <div className="flex justify-between gap-6">


                <div className="flex gap-5">


                  <div className="
                    text-gray-500
                    group-hover:text-[#C5A059]
                    transition-colors
                  ">
                    {icons[index]}
                  </div>



                  <div>


                    <h3 className="
                      text-white
                      text-base
                      font-light
                      tracking-wide
                    ">
                      {service.title}
                    </h3>



                    <p className="
                      text-gray-400
                      text-xs
                      mt-2
                      leading-relaxed
                      max-w-md
                    ">
                      {service.description}
                    </p>



                    <p className="
                      text-[#C5A059]
                      text-[10px]
                      uppercase
                      tracking-[0.2em]
                      mt-3
                    ">
                      {service.duration}
                    </p>


                  </div>


                </div>





                <div className="flex flex-col items-end gap-4">


                  <span className="
                    text-[#C5A059]
                    font-medium
                  ">
                    {service.price}
                  </span>




                  <a

                    href={`${barberData.whatsapp}&text=Hi, I would like to book ${service.title}`}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                      text-[9px]
                      uppercase
                      tracking-[0.25em]
                      text-gray-400
                      hover:text-[#C5A059]
                      transition-colors
                    "

                  >
                    Book →
                  </a>



                </div>


              </div>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );

};


export default Services;
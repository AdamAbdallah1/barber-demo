import { motion } from "framer-motion";
import barberData from "../data/barberData";


const Team = () => {

  return (

    <section
      id="team"
      className="py-32 bg-transparent"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-12">


        <div className="text-center mb-20">


          <p className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] mb-4">
            Our Team
          </p>


          <h2 className="text-white text-4xl font-light tracking-tight">
            The Hands Behind <span className="font-serif italic text-gray-400">The Craft</span>
          </h2>


        </div>




        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">


          {barberData.team.map((member,index)=>(


            <motion.div

              key={member.name}

              initial={{
                opacity:0,
                y:30
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

              className="group"

            >


              <div className="h-[420px] overflow-hidden rounded-sm border border-white/[0.05]">


                <img

                  src={member.image}

                  alt={member.name}

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


              </div>




              <div className="mt-6">


                <h3 className="text-white text-lg font-light">
                  {member.name}
                </h3>


                <p className="text-[#C5A059] uppercase tracking-[0.25em] text-[9px] mt-2">
                  {member.role}
                </p>


              </div>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );

};


export default Team;
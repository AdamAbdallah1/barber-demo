import { motion } from "framer-motion";
import barberData from "../data/barberData";

const About = () => {
  return (
    <section
      id="about"
      className="w-full py-20 lg:py-32 bg-transparent"
    >

      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">


        <motion.div

          initial={{
            opacity:0,
            x:-30
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8,
            ease:[0.25,1,0.5,1]
          }}

          viewport={{
            once:true
          }}

          className="order-2 lg:order-1 lg:col-span-5 relative h-[300px] sm:h-[400px] lg:h-[480px]"

        >

          <div className="absolute inset-0 border border-[#C5A059]/10 translate-x-3 translate-y-3 rounded-sm" />


          <img

            src={barberData.about.image}

            alt={`${barberData.name} story`}

            className="
              relative
              z-10
              w-full
              h-full
              object-cover
              rounded-sm
              brightness-[0.75]
              contrast-[1.05]
            "

          />


        </motion.div>





        <motion.div

          initial={{
            opacity:0,
            x:30
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8,
            ease:[0.25,1,0.5,1]
          }}

          viewport={{
            once:true
          }}

          className="order-1 lg:order-2 lg:col-span-7 text-white"

        >


          <p className="text-[#C5A059] uppercase tracking-[0.3em] text-[9px] font-semibold mb-4">

            {barberData.about.label}

          </p>




          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.15] tracking-tight max-w-xl mb-6">


            {barberData.about.title}


            <br />


            <span className="font-serif italic text-gray-400">

              {barberData.about.highlight}

            </span>


          </h2>





          <p className="text-gray-400 max-w-xl text-xs sm:text-sm leading-relaxed font-light">

            {barberData.about.description}

          </p>



        </motion.div>


      </div>


    </section>
  );
};


export default About;
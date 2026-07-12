import { motion } from "framer-motion";
import barberData from "../data/barberData";

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="bg-transparent py-20 border-b border-white/[0.02]"
    >

      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">


        <motion.h2
          initial={{
            opacity:0,
            y:10
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.8,
            ease:[0.25,1,0.5,1]
          }}

          viewport={{
            once:true
          }}

          className="text-white text-2xl sm:text-3xl font-light tracking-tight mb-4"
        >

          Ready For Your Next Look?

        </motion.h2>



        <p className="text-gray-500 font-light text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-8">

          Book your appointment at {barberData.name}

        </p>




        <motion.a

          whileHover={{
            scale:1.02
          }}

          whileTap={{
            scale:0.98
          }}

          href={barberData.whatsapp}

          target="_blank"

          rel="noopener noreferrer"

          className="
            relative
            overflow-hidden
            group
            border
            border-[#C5A059]/60
            px-8
            py-3.5
            rounded-sm
            transition-colors
            duration-300
          "

        >

          <span
            className="
              absolute
              inset-0
              bg-[#C5A059]
              translate-y-[101%]
              group-hover:translate-y-0
              transition-transform
              duration-500
              ease-out
            "
          />


          <span
            className="
              relative
              z-10
              text-[#C5A059]
              group-hover:text-black
              text-[10px]
              uppercase
              tracking-[0.25em]
              font-medium
              transition-colors
              duration-500
            "
          >

            Book On WhatsApp

          </span>


        </motion.a>



      </div>


    </section>
  );
};


export default ContactCTA;
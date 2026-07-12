import { motion } from "framer-motion";
import barberData from "../data/barberData";


const Testimonials = () => {

  return (

    <section
      id="testimonials"
      className="bg-transparent py-32 border-t border-white/[0.02]"
    >


      <div className="max-w-7xl mx-auto px-6 lg:px-12">


        <div className="text-center mb-20">

          <p className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] mb-4">
            Client Reviews
          </p>


          <h2 className="text-white text-4xl font-light tracking-tight">
            Trusted By Our <span className="font-serif italic text-gray-400">Clients</span>
          </h2>

        </div>




        <div className="grid md:grid-cols-3 gap-8">


          {barberData.testimonials.map((review,index)=>(


            <motion.div

              key={review.name}

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

              className="
                border
                border-white/[0.05]
                p-8
                rounded-sm
                bg-white/[0.01]
              "

            >


              <div className="text-[#C5A059] text-sm tracking-widest mb-6">

                {"★".repeat(review.rating)}

              </div>



              <p className="text-gray-300 font-serif italic text-lg leading-relaxed mb-8">

                "{review.text}"

              </p>




              <div>

                <h4 className="text-white text-xs uppercase tracking-[0.2em]">

                  {review.name}

                </h4>


                <p className="text-[#C5A059] text-[10px] uppercase tracking-widest mt-2">

                  {review.service}

                </p>


              </div>



            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );

};


export default Testimonials;
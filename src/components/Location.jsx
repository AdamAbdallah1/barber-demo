import barberData from "../data/barberData";

const Location = () => {
  return (
    <section
      id="location"
      className="bg-transparent py-32"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16 items-center">


        <div className="lg:col-span-5">


          <p className="text-[#C5A059] uppercase tracking-[0.3em] text-[10px] mb-4">
            Location
          </p>



          <h2 className="text-white text-4xl font-light tracking-tight mb-10">
            Find The Studio
          </h2>




          <div className="space-y-8 text-sm font-light text-gray-400">


            <div>

              <h3 className="text-white uppercase tracking-[0.1em] text-xs mb-2">
                Address
              </h3>


              <p>
                {barberData.location.address}
                <br />
                {barberData.location.parking}
              </p>


            </div>




            <div>

              <h3 className="text-white uppercase tracking-[0.1em] text-xs mb-4">
                Opening Hours
              </h3>



              <div className="space-y-3 max-w-xs">


                {barberData.hours.map((item)=>(
                  
                  <div
                    key={item.day}
                    className="flex justify-between border-b border-white/[0.05] pb-2"
                  >

                    <span>
                      {item.day}
                    </span>


                    <span className="text-white">
                      {item.time}
                    </span>


                  </div>

                ))}


              </div>


            </div>





            <a
              href={barberData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-[#C5A059]
                border-b
                border-[#C5A059]/40
                pb-2
                hover:border-[#C5A059]
                transition-all
              "
            >
              Get Directions & Book
            </a>



          </div>



        </div>





        <div className="lg:col-span-7 h-[400px] w-full bg-[#111] p-2 border border-white/[0.05]">


          <iframe

            title={`${barberData.name} location`}

            src={barberData.location.mapUrl}

            className="
              w-full
              h-full
              filter
              grayscale
              contrast-[1.1]
              opacity-70
              hover:opacity-100
              transition-opacity
              duration-500
            "

            loading="lazy"

          />


        </div>


      </div>


    </section>
  );
};


export default Location;
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import barberData from "../data/barberData";

const links = [
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Gallery",
    href: "#gallery",
  },
  {
    name: "Story",
    href: "#about",
  },
  {
    name: "Team",
    href: "#team",
  },
  {
    name: "Location",
    href: "#location",
  },
];


const Navbar = () => {

  const [menuOpen,setMenuOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);


  useEffect(()=>{

    const handleScroll = () =>{
      setScrolled(window.scrollY > 40);
    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return ()=>window.removeEventListener(
      "scroll",
      handleScroll
    );

  },[]);



  return (

    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-500
        ${
          scrolled
          ?
          "backdrop-blur-xl bg-[#0a0a0c]/70 border-b border-white/[0.05] py-4"
          :
          "bg-transparent py-6"
        }
      `}
    >

      <div className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-12
        flex
        items-center
        justify-between
      ">


        <a href="#" className="flex flex-col">

          <span className="
            text-white
            text-xl
            font-semibold
            tracking-[0.2em]
            uppercase
          ">
            {barberData.shortName}
          </span>


          <span className="
            text-[#C5A059]
            text-[9px]
            tracking-[0.35em]
            uppercase
          ">
            Barber Studio
          </span>

        </a>



        <div className="
          hidden
          lg:flex
          items-center
          gap-10
        ">


          {
            links.map(link=>(

              <a
                key={link.name}
                href={link.href}
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-gray-400
                  hover:text-white
                  transition-colors
                "
              >
                {link.name}
              </a>

            ))
          }



          <a
            href={barberData.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="
              border
              border-[#C5A059]/40
              text-[#C5A059]
              px-6
              py-3
              text-[10px]
              uppercase
              tracking-[0.3em]
              hover:bg-[#C5A059]
              hover:text-black
              transition-all
            "
          >
            Reserve
          </a>


        </div>




        <button
          onClick={()=>setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            text-white
          "
        >

          {
            menuOpen
            ?
            <HiOutlineX className="w-7 h-7"/>
            :
            <HiOutlineMenu className="w-7 h-7"/>
          }

        </button>


      </div>





      <AnimatePresence>

      {
        menuOpen && (

          <motion.div

            initial={{
              opacity:0,
              y:"-100%"
            }}

            animate={{
              opacity:1,
              y:0
            }}

            exit={{
              opacity:0,
              y:"-100%"
            }}

            transition={{
              duration:0.5
            }}

            className="
              fixed
              inset-0
              bg-[#0a0a0c]
              flex
              flex-col
              items-center
              justify-center
              gap-10
              lg:hidden
            "

          >

            {
              links.map(link=>(

                <a

                  key={link.name}

                  href={link.href}

                  onClick={()=>setMenuOpen(false)}

                  className="
                    text-white
                    text-xl
                    uppercase
                    tracking-[0.3em]
                  "

                >
                  {link.name}
                </a>

              ))
            }


            <a
              href={barberData.whatsapp}
              className="
                mt-6
                bg-[#C5A059]
                text-black
                px-8
                py-4
                text-xs
                uppercase
                tracking-[0.25em]
              "
            >
              Book Appointment
            </a>


          </motion.div>

        )
      }

      </AnimatePresence>


    </nav>

  );

};


export default Navbar;
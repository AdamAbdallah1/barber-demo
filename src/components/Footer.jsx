import barberData from "../data/barberData";

const Footer = () => {
  return (
    <footer
      className="bg-transparent py-12 border-t border-white/[0.03]"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">


        <div className="text-center md:text-left">

          <p className="text-white text-xs tracking-[0.2em] uppercase mb-2">
            {barberData.name}
          </p>


          <span className="text-gray-600 text-[10px] font-light tracking-wide">
            © {new Date().getFullYear()} All rights reserved.
          </span>

        </div>




        <div className="flex gap-8 text-gray-500 text-xs tracking-wider uppercase">


          <a
            href="#services"
            className="hover:text-white transition-colors"
          >
            Services
          </a>


          <a
            href="#gallery"
            className="hover:text-white transition-colors"
          >
            Gallery
          </a>


          <a
            href="#about"
            className="hover:text-white transition-colors"
          >
            About
          </a>


          <a
            href={barberData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5A059] transition-colors"
          >
            Instagram
          </a>


        </div>


      </div>


    </footer>
  );
};


export default Footer;
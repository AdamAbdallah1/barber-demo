import Navbar from "./components/Navbar";
import ScrollProgress from "./components/ScrollProgress";
import BackToUp from "./components/BackToUp";

import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Team from "./components/Team";
import Location from "./components/Location";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";


function App() {

  return (

    <div
      className="
        relative
        min-h-screen
        w-full
        bg-slate-950
        text-[#e4e4e7]
        font-sans
        antialiased
        selection:bg-[#C5A059]
        selection:text-black
        scroll-smooth
        overflow-x-hidden
      "
    >



      <div
        className="
          fixed
          inset-0
          h-full
          w-full
          bg-slate-950
          z-0
          pointer-events-none
        "
      >

        <div
          className="
            absolute
            bottom-0
            left-[-20%]
            right-0
            top-[-10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]
          "
        />


        <div
          className="
            absolute
            bottom-0
            right-[-20%]
            top-[-10%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]
          "
        />


      </div>




      <Navbar />

      <ScrollProgress />



      <main
        className="
          relative
          z-10
          w-full
        "
      >

        <Hero />

        <Services />

        <Gallery />

        <About />

        <Team />

        <Testimonials />

        <Location />

        <ContactCTA />

      </main>




      <BackToUp />

      <Footer />


    </div>

  );

}


export default App;
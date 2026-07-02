import { useState, useEffect } from "react";
import { HiOutlineArrowUp } from "react-icons/hi"; 

const BackToUp = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 right-8 z-50 p-4 bg-[#0a0a0c] border border-white/[0.05] text-gray-400 hover:text-[#C5A059] hover:border-[#C5A059]/50 transition-all duration-500 shadow-2xl ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
    >
      <HiOutlineArrowUp className="w-4 h-4" />
    </button>
  );
};

export default BackToUp;
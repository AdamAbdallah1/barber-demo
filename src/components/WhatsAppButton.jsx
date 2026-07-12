import { FaWhatsapp } from "react-icons/fa";
import barberData from "../data/barberData";

const WhatsAppButton = () => {
  return (
    <a
      href={barberData.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        bg-[#25D366]
        text-black
        px-5
        py-3
        rounded-full
        text-xs
        font-medium
        uppercase
        tracking-wider
        shadow-xl
        hover:scale-105
        transition-transform
      "
    >
      <FaWhatsapp className="w-5 h-5" />
    </a>
  );
};

export default WhatsAppButton;
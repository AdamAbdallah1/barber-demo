import heroImg from "../assets/gallery/barber1.jpg";
import aboutImg from "../assets/gallery/barber6.jpg";

import cut1 from "../assets/gallery/barber1.jpg";
import cut2 from "../assets/gallery/barber2.jpg";
import cut3 from "../assets/gallery/barber3.jpg";
import cut4 from "../assets/gallery/barber4.jpg";


const barberData = {
  name: "Beirut Barber Club",
  shortName: "Beirut",

  tagline: "The Standard of Modern Grooming",

  description:
    "A premium grooming experience combining traditional barber craftsmanship with modern men's style.",


  whatsapp:
    "https://wa.me/96181090757?text=Hi!%20I%27d%20like%20to%20book%20an%20appointment.",


  instagram:
    "https://instagram.com",


  location: {
    city: "Beirut",
    address: "Downtown Beirut District",
    parking: "Private Parking Available",
  },


  hours: [
    {
      day: "Monday - Saturday",
      time: "10:00 - 21:00",
    },
    {
      day: "Sunday",
      time: "Closed",
    },
  ],


  images: {
    hero: heroImg,
    about: aboutImg,
    gallery: [
      cut1,
      cut2,
      cut3,
      cut4,
    ],
  },


  services: [
    {
      title: "Premium Haircut",
      price: "$25",
      description:
        "Precision haircut with modern styling and professional finishing.",
    },

    {
      title: "Beard Styling",
      price: "$15",
      description:
        "Detailed beard shaping with hot towel treatment.",
    },

    {
      title: "VIP Grooming",
      price: "$45",
      description:
        "Complete grooming experience including haircut, beard styling, and treatment.",
    },
  ],


  testimonials: [
    {
      name: "Rami H.",
      role: "Client",
      text:
        "Exceptional service and attention to detail. The best grooming experience in Beirut.",
    },

    {
      name: "Karim S.",
      role: "Client",
      text:
        "Professional atmosphere, skilled barbers, and perfect results every time.",
    },

    {
      name: "Omar A.",
      role: "Client",
      text:
        "A premium experience from the moment you enter.",
    },
  ],
};


export default barberData;
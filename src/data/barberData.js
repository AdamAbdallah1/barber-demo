import heroImg from "../assets/gallery/barber1.jpg";
import aboutImg from "../assets/gallery/barber6.jpg";

import team1 from "../assets/team/barber-team-1.jpg";
import team2 from "../assets/team/barber-team-2.jpg";
import team3 from "../assets/team/barber-team-3.jpg";

import cut1 from "../assets/gallery/barber1.jpg";
import cut2 from "../assets/gallery/barber2.jpg";
import cut3 from "../assets/gallery/barber3.jpg";
import cut4 from "../assets/gallery/barber4.jpg";


const barberData = {
    team: [
  {
    name: "Karim Haddad",
    role: "Master Barber",
    image: team1
  },
  {
    name: "Omar Saleh",
    role: "Senior Barber",
    image: team2
  },
  {
    name: "Elias Khoury",
    role: "Style Specialist",
    image: team3
  }
],
  name: "Royal Barber Studio",
  shortName: "Royal",

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
    mapUrl: "https://www.google.com/maps?q=Beirut&output=embed",
    },

    about: {
        label: "Our Story",

        title: "Rooted In Tradition.",

        highlight: "Built For Today.",

        description:
            "A barber is more than a stylist. It is a place where craftsmanship, confidence, and personal style come together.",

        image: aboutImg,
    },


  hours: [
    {
      day: "Monday - Saturday",
      time: "10:00 - 21:00",
    },
    {
      day: "Monday",
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
      title: "Royal Fade Experience",
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
    name: "Rami Haddad",
    service: "Premium Fade",
    rating: 5,
    text:
      "Exceptional attention to detail. The atmosphere feels premium and every visit delivers perfect results.",
  },

  {
    name: "Karim Saleh",
    service: "Beard Styling",
    rating: 5,
    text:
      "Professional barbers, great communication, and a level of service you rarely find.",
  },

  {
    name: "Omar Khoury",
    service: "VIP Grooming",
    rating: 5,
    text:
      "From booking to the final result, the entire experience feels luxury.",
  },
],
};


export default barberData;
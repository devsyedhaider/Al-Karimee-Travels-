import { Plane, Globe2, Landmark, MapPinned } from "lucide-react";

import iraqImg from "../assets/home/iraqImg.jpg";
import visaImg from "../assets/home/visaImg.jpg";
import ziyaratImg from "../assets/home/ziyaratImg.jpg";
import UmrahImg from "../assets/home/umrah.avif";

export const FooterLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Hajj Packages", path: "/hajj-packages" },
  { name: "Umrah Packages", path: "/umrah-packages" },
  { name: "Ziyarat", path: "/ziyarat" },
  { name: "Contact Us", path: "/contact" },
];

// Nav Links

export const navLinks = [
  { name: "Company Profile", path: "/CompanyProfile" },
  { name: "Hajj", path: "/hajj" },
  { name: "Umrah", path: "/umrah" },
  { name: "Ziarat", path: "/ziarat" },
  { name: "Services", path: "/service" },
  { name: "Mora", path: "/mora" },
  { name: "Contact", path: "/contact" },
];

// Services Data

export const ServicesData = [
  {
    title: "Customized Umrah Packages",
    description:
      "Luxury Umrah packages with premium accommodation, transport and complete guidance.",
    image: UmrahImg,
    icon: Plane,
    link: "/umrah",
  },
  {
    title: "Customized Iraq Packages",
    description:
      "Visit the holy shrines of Iraq with professionally organized travel services.",
    image: iraqImg,
    icon: Landmark,
    link: "/iraq",
  },
  {
    title: "International Travel & Visa",
    description:
      "International tours, visa processing and worldwide travel planning.",
    image: visaImg,
    icon: Globe2,
    link: "/visa",
  },
  {
    title: "Group Ziyarat Packages",
    description:
      "Group Ziyarat tours with experienced guides and premium facilities.",
    image: ziyaratImg,
    icon: MapPinned,
    link: "/ziyarat",
  },
];

// Testimonials Data

export const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Karachi, Pakistan",
    image: "https://i.pravatar.cc/150?img=47",
    text: "My Umrah journey with this travel service was absolutely peaceful and well organized. From visa processing to hotel arrangements in Makkah and Madinah, everything was handled professionally without any stress.",
  },
  {
    name: "Muhammad Ali",
    role: "Lahore, Pakistan",
    image: "https://i.pravatar.cc/150?img=12",
    text: "I booked my Hajj package through them and I must say the experience was beyond expectations. The guidance, transportation, and accommodation were all managed perfectly.",
  },
  {
    name: "Sara Ahmed",
    role: "Islamabad, Pakistan",
    image: "https://i.pravatar.cc/150?img=32",
    text: "Highly recommended travel agency for Hajj and Umrah. Their team stayed in contact throughout the journey and made everything very easy and comfortable.",
  },
  {
    name: "Hassan Raza",
    role: "Faisalabad, Pakistan",
    image: "https://i.pravatar.cc/150?img=22",
    text: "Very professional service. They handled all documentation and travel arrangements smoothly. I didn’t face any issues during my entire trip.",
  },
  {
    name: "Fatima Noor",
    role: "Rawalpindi, Pakistan",
    image: "https://i.pravatar.cc/150?img=25",
    text: "The experience was spiritually fulfilling and completely stress-free. The hotels were near Haram and the transport was always on time.",
  },
  {
    name: "Usman Tariq",
    role: "Multan, Pakistan",
    image: "https://i.pravatar.cc/150?img=15",
    text: "One of the best travel agencies I have dealt with. Their staff is very cooperative and responsive. Everything was well planned from start to finish.",
  },
  {
    name: "Zainab Ali",
    role: "Hyderabad, Pakistan",
    image: "https://i.pravatar.cc/150?img=5",
    text: "Excellent service for Umrah packages. The entire journey was smooth and well guided. I felt completely safe and supported throughout.",
  },
  {
    name: "Ahmed Bilal",
    role: "Peshawar, Pakistan",
    image: "https://i.pravatar.cc/150?img=9",
    text: "Great experience overall. The travel arrangements, visa processing, and hotel booking were all handled very professionally.",
  },
  {
    name: "Maryam Sheikh",
    role: "Quetta, Pakistan",
    image: "https://i.pravatar.cc/150?img=19",
    text: "Very reliable and trustworthy service. They made my first Umrah journey smooth and memorable. Highly recommended for families.",
  },
];

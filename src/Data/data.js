import { Plane, Globe2, Landmark, MapPinned } from "lucide-react";

import iraqImg from "../assets/home/iraqImg.webp";
import visaImg from "../assets/home/visaImg.webp";
import ziyaratImg from "../assets/home/ziyaratImg.webp";
import UmrahImg from "../assets/home/umrah.webp";

import hajj from "../assets/hajj/hajj-maktab-c.webp";
import hajjMaktab from "../assets/hajj/Hajj-Maktab-C.pdf";

import Umrah1 from "../assets/umrah/Umrah1.webp";
import Umrah2 from "../assets/umrah/Umrah2.webp";
import Umrah3 from "../assets/umrah/Umrah3.webp";

import Zairat1 from "../assets/zairait/Zairait1.webp";
import Zairat2 from "../assets/zairait/Zariat2.webp";

export const FooterLinks = [
  { name: "Company Profile", path: "/CompanyProfile" },
  { name: "Hajj", path: "/hajj" },
  { name: "Umrah", path: "/umrah" },
  { name: "Ziarat", path: "/ziarat" },
  { name: "Services", path: "/service" },
  { name: "Mora", path: "/mora" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

// Nav Links

export const navLinks = [
  { name: "Company Profile", path: "/CompanyProfile" },
  { name: "Hajj", path: "/hajj" },
  { name: "Umrah", path: "/umrah" },
  { name: "Ziarat", path: "/ziarat" },
  { name: "Services", path: "/service" },
  { name: "Mora", path: "/mora" },
  { name: "Gallery", path: "/gallery" },
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
    text: "My Umrah journey with Al Karimee Travels was absolutely peaceful and well organized. From visa processing to hotel arrangements in Makkah and Madinah, everything was handled professionally without any stress.",
  },
  {
    name: "Muhammad Ali",
    role: "Lahore, Pakistan",
    text: "I booked my Hajj package through Al Karimee Travels, and I must say the experience was beyond expectations. The guidance, transportation, and accommodation were all managed perfectly.",
  },
  {
    name: "Sara Ahmed",
    role: "Islamabad, Pakistan",
    text: "I highly recommend Al Karimee Travels for Hajj and Umrah. Their team stayed in contact throughout the journey and made everything very easy and comfortable.",
  },
  {
    name: "Hassan Raza",
    role: "Faisalabad, Pakistan",
    text: "Al Karimee Travels provided a very professional service. They handled all documentation and travel arrangements smoothly, and I didn’t face any issues during my entire trip.",
  },
  {
    name: "Fatima Noor",
    role: "Rawalpindi, Pakistan",
    text: "My experience with Al Karimee Travels was spiritually fulfilling and completely stress-free. The hotels were near Haram and the transport was always on time.",
  },
  {
    name: "Usman Tariq",
    role: "Multan, Pakistan",
    text: "Al Karimee Travels is one of the best travel agencies I have dealt with. Their staff is very cooperative and responsive, and everything was well planned from start to finish.",
  },
  {
    name: "Zainab Ali",
    role: "Hyderabad, Pakistan",
    text: "Al Karimee Travels provided excellent service for my Umrah package. The entire journey was smooth, well guided, and I felt completely safe and supported throughout.",
  },
  {
    name: "Ahmed Bilal",
    role: "Peshawar, Pakistan",
    text: "I had a great experience with Al Karimee Travels. The travel arrangements, visa processing, and hotel bookings were all handled very professionally.",
  },
  {
    name: "Maryam Sheikh",
    role: "Quetta, Pakistan",
    text: "Al Karimee Travels provided a very reliable and trustworthy service. They made my first Umrah journey smooth and memorable, and I highly recommend them for families.",
  },
];

// Stats Data

export const StatsData = [
  {
    number: "15+",
    title: "Years Experience",
  },
  {
    number: "5000+",
    title: "Happy Pilgrims",
  },
  {
    number: "100+",
    title: "Successful Trips",
  },
  {
    number: "24/7",
    title: "Customer Support",
  },
];

// Hajj Data

export const Hajjpackages = [
  {
    title: "MAKTAB CATEGORY A",
    image: hajj,
    pdf: hajjMaktab,
  },
  {
    title: "MAKTAB CATEGORY C",
    image: hajj,
    pdf: hajjMaktab,
  },
];

// Umrah Group

export const UmrahGroups = [
  {
    title: "Ramadan Umrah",
    image: Umrah1,
  },
  {
    title: "Shahadat Bibi Fatima (SA)",
    image: Umrah2,
  },
  {
    title: "Arbaeen 2025",
    image: Umrah3,
  },
];

// Zairat Group

export const ZairatGroups = [
  {
    image: Zairat1,
  },
  {
    image: Zairat2,
  },
];

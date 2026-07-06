import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { navLinks } from "../Data/data";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 left-0 z-50 fixed bg-white w-full">
      <Banner />
      <div className="flex justify-between items-center mx-auto px-4 md:px-8 max-w-7xl h-20">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 lg:h-12 object-contain" />
        </Link>

        <nav className="hidden lg:flex gap-7">
          {navLinks.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition hover:text-golden text-base lg:text-lg ${
                  isActive ? "text-golden" : "text-charcol"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/40 md:hidden transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white text-gray-800 md:hidden transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 border-gray-200 border-b">
          <img src={logo} alt="Logo" className="h-10 object-contain" />
        </div>

        <div className="flex flex-col px-5 pt-10">
          {navLinks.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="py-5 border-gray-200 border-b font-medium text-gray-700 hover:text-golden transition"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Banner() {
  return (
    <div className="hidden md:block">
      <div className="flex justify-between bg-main px-8 lg:px-40 py-3 font-light text-white text-base">
        <a
          href="tel:0302-2471111"
          className="flex items-center gap-4 hover:opacity-80 transition"
        >
          <Phone size={20} />
          0302-2471111
        </a>
        <a
          href="mailto:alkarimee@hotmail.com"
          className="flex items-center gap-4 hover:opacity-80 transition"
        >
          <Mail size={20} />
          alkarimee@hotmail.com
        </a>
        <a
          href="https://www.facebook.com/people/Al-Karimee-Travels-Tours-Pvt-Ltd/61550221046678/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 hover:opacity-80 transition"
        >
          <FaFacebook size={18} />
          Hajj & Umrah Services
        </a>
        <a
          href="https://www.facebook.com/people/Al-Karimee-Travels-Tours-Pvt-Ltd/61550221046678/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 hover:opacity-80 transition"
        >
          <FaFacebook size={18} />
          Ziarat Services
        </a>
      </div>
    </div>
  );
}

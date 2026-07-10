import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import img1 from "../assets/header/img4.jpg";
import img2 from "../assets/header/img3.jpg";
import img3 from "../assets/header/img2.jpg";

export default function Header() {
  const slides = [
    {
      image: img3,
      badge: "Trusted Hajj Services",
      title: "Start Your Spiritual Journey",
      subtitle: "Hajj Packages 2026",
      desc: "Experience a peaceful, comfortable and fully guided Hajj journey with premium arrangements, experienced guides, visa assistance, hotel booking near Haram, and complete 24/7 support for your spiritual journey.",
    },
    {
      image: img2,
      badge: "Affordable Umrah",
      title: "Umrah Made Easy & Comfortable",
      subtitle: "Best Umrah Deals",
      desc: "Book affordable Umrah packages with trusted travel arrangements, luxury and economy hotel options, transport services, group and family packages, and complete assistance from departure to return.",
    },
    {
      image: img1,
      badge: "Ziarat Tours",
      title: "Explore Sacred Islamic Places",
      subtitle: "Spiritual Tours",
      desc: "Visit holy and historical Islamic places with expert guides, comfortable transport, group tours, and a spiritually enriching travel experience across Saudi Arabia, Iraq, and other sacred destinations.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        >
          <img
            src={slide.image}
            className="w-full h-full object-center object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 flex justify-center md:justify-start items-center">
            <div className="ml-1 lg:ml-25 px-6 md:px-12 pt-20 md:pt-32 lg:pt-40 max-w-7xl text-white">
              <div className="inline-block bg-main mb-5 px-5 py-2 rounded-full text-sm tracking-wide">
                {slide.badge}
              </div>

              <h1 className="mb-5 font-bold text-3xl md:text-7xl leading-tight">
                {slide.title}
              </h1>

              <h3 className="mb-5 text-golden text-lg md:text-2xl">
                {slide.subtitle}
              </h3>

              <p className="mb-8 max-w-xl font-light text-gray-200 text-sm md:text-lg leading-relaxed">
                {slide.desc}
              </p>

              <div className="flex sm:flex-row flex-col gap-4">
                <Link
                  to="/contact"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="bg-main hover:bg-main px-10 py-3 rounded-xl font-medium transition cursor-pointer"
                >
                  Book Now
                </Link>

                <Link
                  to="/service"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="hover:bg-white/10 px-10 py-3 border border-white/40 rounded-xl font-medium transition cursor-pointer"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="hidden sm:block">
        <button
          onClick={prevSlide}
          className="top-1/2 left-4 absolute bg-black/40 hover:bg-black/60 p-3 rounded-full text-white -translate-y-1/2"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className="top-1/2 right-4 absolute bg-black/40 hover:bg-black/60 p-3 rounded-full text-white -translate-y-1/2"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      <div className="bottom-6 left-1/2 absolute flex gap-2 -translate-x-1/2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === index ? "bg-golden" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Travel Blogger",
    image: "https://i.pravatar.cc/150?img=32",
    text: "This travel service made my Umrah journey peaceful and perfectly organized.",
  },
  {
    name: "Muhammad Ali",
    role: "Entrepreneur",
    image: "https://i.pravatar.cc/150?img=12",
    text: "Excellent service! Very professional and smooth experience.",
  },
  {
    name: "Sara Ahmed",
    role: "Content Creator",
    image: "https://i.pravatar.cc/150?img=47",
    text: "Highly recommended for Hajj and Umrah planning.",
  },
  {
    name: "Hassan Raza",
    role: "Businessman",
    image: "https://i.pravatar.cc/150?img=22",
    text: "Everything was handled perfectly and on time.",
  },
  {
    name: "Fatima Noor",
    role: "Teacher",
    image: "https://i.pravatar.cc/150?img=25",
    text: "Smooth experience from start to finish.",
  },
  {
    name: "Usman Tariq",
    role: "Engineer",
    image: "https://i.pravatar.cc/150?img=15",
    text: "Very clean UI and great service system.",
  },
  {
    name: "Zainab Ali",
    role: "Doctor",
    image: "https://i.pravatar.cc/150?img=5",
    text: "Highly trustworthy travel management.",
  },
  {
    name: "Ahmed Bilal",
    role: "Photographer",
    image: "https://i.pravatar.cc/150?img=9",
    text: "Amazing experience overall.",
  },
  {
    name: "Maryam Sheikh",
    role: "Designer",
    image: "https://i.pravatar.cc/150?img=19",
    text: "Excellent customer support and planning.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  // Safe responsive handler (prevents black screen)
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth || 1024;
      setItemsToShow(width < 768 ? 1 : 3);
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const visible = Array.from({ length: itemsToShow }).map((_, i) => {
    return testimonials[(index + i) % testimonials.length];
  });

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="mx-auto px-4 container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-bold text-gray-900 text-4xl md:text-5xl">
            What Our <span className="text-main">Clients Say</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Real experiences from our happy customers.
          </p>
        </div>

        <button
          onClick={prevSlide}
          className="top-1/2 left-3 md:left-10 z-10 absolute bg-white shadow p-3 rounded-full -translate-y-1/2"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="top-1/2 right-3 md:right-10 z-10 absolute bg-white shadow p-3 rounded-full -translate-y-1/2"
        >
          <ChevronRight />
        </button>

        <div
          className={`grid gap-8 ${
            itemsToShow === 1 ? "grid-cols-1" : "md:grid-cols-3"
          }`}
        >
          <AnimatePresence mode="wait">
            {visible.map((item, i) => (
              <motion.div
                key={item.name + i}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="bg-white shadow-lg p-6 border border-gray-100 rounded-2xl"
              >
                <p className="mt-6 text-gray-600">{item.text}</p>

                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={item.image}
                    className="border-2 border-amber-400 rounded-full w-12 h-12"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

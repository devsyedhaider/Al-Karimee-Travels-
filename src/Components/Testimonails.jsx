import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { testimonials } from "../Data/data";
import { fadeUp, staggerContainer } from "../animations";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

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
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="font-bold text-gray-900 text-4xl md:text-5xl">
            What Our <span className="text-main">Clients Say</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted by pilgrims across Pakistan for Hajj, Umrah and Ziyarat
            services.
          </p>
        </motion.div>

        <div className="hidden sm:block">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="top-1/2 left-3 md:left-10 z-10 absolute bg-white shadow p-3 rounded-full -translate-y-1/2"
          >
            <ChevronLeft />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="top-1/2 right-3 md:right-10 z-10 absolute bg-white shadow p-3 rounded-full -translate-y-1/2"
          >
            <ChevronRight />
          </motion.button>
        </div>

        <motion.div
          className={`grid gap-8 ${
            itemsToShow === 1 ? "grid-cols-1" : "md:grid-cols-3"
          }`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {visible.map((item, i) => (
              <motion.div
                key={item.name + i}
                variants={fadeUp}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white shadow-lg hover:shadow-2xl p-6 border border-gray-100 rounded-2xl transition-shadow"
              >
                <p className="mt-6 text-gray-600">{item.text}</p>

                <div className="flex items-center gap-4 mt-6">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="flex justify-center items-center bg-main rounded-full w-12 h-12 font-medium text-white text-lg uppercase select-none"
                  >
                    {item.name.charAt(0)}
                  </motion.div>

                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>

                    <p className="text-gray-500 text-sm">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

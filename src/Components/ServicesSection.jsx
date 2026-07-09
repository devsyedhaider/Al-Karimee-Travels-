import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { ServicesData } from "../Data/data";
import { fadeUp, staggerContainer } from "../animations";

export default function ServicesSection() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto px-4 container">
        <motion.div
          className="mx-auto mb-14 max-w-4xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="font-bold text-golden text-xs sm:text-sm uppercase tracking-[3px]">
            Our Services
          </p>

          <h2 className="mt-4 font-bold text-black text-3xl sm:text-4xl md:text-5xl leading-tight">
            A Range of Travel Services
            <br className="hidden md:block" />
            <span className="text-main">For Your Memorable Journey</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-charcol text-sm sm:text-base leading-7">
            Discover premium travel experiences designed with comfort,
            reliability and complete peace of mind for every journey.
          </p>
        </motion.div>

        <motion.div
          className="gap-6 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ServicesData.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="group relative shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-500"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-75 sm:h-95 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

                <div className="top-4 sm:top-6 left-4 sm:left-6 absolute flex justify-center items-center bg-white/20 backdrop-blur-lg rounded-2xl w-11 sm:w-14 h-11 sm:h-14">
                  <Icon className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
                </div>

                <div className="bottom-4 sm:bottom-6 absolute inset-x-4 sm:inset-x-6">
                  <div className="bg-white/10 backdrop-blur-xl p-4 sm:p-6 border border-white/20 rounded-2xl">
                    <h3 className="font-bold text-white text-lg sm:text-xl md:text-2xl leading-tight">
                      {service.title}
                    </h3>

                    <p className="mt-2 sm:mt-3 text-gray-200 text-xs sm:text-sm leading-6">
                      {service.description}
                    </p>

                    <Link
                      to="/service"
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                      className="inline-flex items-center gap-2 hover:gap-3 mt-4 sm:mt-5 font-semibold text-white text-sm sm:text-base transition-all duration-300"
                    >
                      Explore Service
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

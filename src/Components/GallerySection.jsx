import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import gallery1 from "../assets/gallery/1.jpg";
import gallery2 from "../assets/gallery/2.jpg";
import gallery3 from "../assets/gallery/3.jpg";

import { fadeUp, fadeLeft, fadeRight, staggerContainer } from "../animations";

export default function GallerySection() {
  const images = [
    {
      image: gallery1,
      title: "Hajj Journey",
    },
    {
      image: gallery2,
      title: "Umrah Experience",
    },
    {
      image: gallery3,
      title: "Hajj Pilgrims",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-main"></div>

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "45px 45px",
        }}
      ></div>

      <div className="-top-32 -left-32 absolute bg-primary/30 blur-[120px] rounded-full w-96 h-96"></div>

      <div className="-right-32 -bottom-32 absolute bg-golden/20 blur-[120px] rounded-full w-96 h-96"></div>

      <div className="top-1/2 left-1/2 absolute bg-primary/10 blur-[100px] rounded-full w-125 h-125 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative mx-auto px-4 container">
        {/* Heading */}
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="font-semibold text-golden text-sm uppercase tracking-[0.25em]">
            Our Memories
          </span>

          <h2 className="mt-4 font-bold text-white text-3xl md:text-5xl">
            Moments From Our
            <span className="text-primary"> Sacred Journeys</span>
          </h2>

          <p className="mt-5 text-gray-300 leading-7">
            Explore the beautiful memories of our pilgrims during Hajj, Umrah,
            and Ziyarat journeys.
          </p>
        </motion.div>

        <motion.div
          className="gap-6 grid md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {images.map((item, index) => (
            <motion.div
              key={index}
              variants={
                index === 1 ? fadeUp : index === 0 ? fadeLeft : fadeRight
              }
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <Link
                to="/gallery"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                className="group block relative shadow-2xl border border-white/10 rounded-[30px] h-65 sm:h-95 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent"></div>

                <div className="bottom-0 left-0 absolute p-7">
                  <h3 className="font-bold text-white text-2xl uppercase">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-3 font-semibold text-white">
                    View Gallery
                    <ArrowRight className="w-5 h-5 transition group-hover:translate-x-2 duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link
            to="/gallery"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-3 bg-golden bg-primary shadow-lg hover:shadow-2xl px-8 py-4 rounded-full font-semibold text-white transition hover:-translate-y-1 duration-300"
          >
            View Picture Gallery
            <ArrowRight className="w-5 h-5 transition group-hover:translate-x-2 duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

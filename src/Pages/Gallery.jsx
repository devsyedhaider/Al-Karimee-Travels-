import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import PagesHeader from "../Components/PagesHeader";
import GalleryBg from "../assets/HeaderAllPages/gallery.jpg";
import Testimonails from "../Components/Testimonails";

import { fadeUp, staggerContainer } from "../animations";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img13 from "../assets/gallery/13.jpg";
import img14 from "../assets/gallery/14.jpg";
import img15 from "../assets/gallery/15.jpg";
import img16 from "../assets/gallery/16.jpg";
import img17 from "../assets/gallery/17.jpg";
import img18 from "../assets/gallery/18.jpg";
import img19 from "../assets/gallery/19.jpeg";

export default function Gallery() {
  return (
    <div className="bg-white">
      <div className="mb-20">
        <PagesHeader bgImage={GalleryBg} title="Hajj & Umrah Gallery" />
      </div>

      <GalleryGrid />

      <Testimonails />
    </div>
  );
}

function GalleryGrid() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="pb-20 overflow-hidden">
      <div className="mx-auto px-4 container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="font-semibold text-golden text-sm uppercase tracking-[0.25em]">
            Our Memories
          </span>

          <h2 className="mt-4 font-bold text-black text-3xl md:text-6xl">
            Beautiful Moments From
            <span className="text-main"> Sacred Journeys</span>
          </h2>

          <p className="mt-5 font-light text-charcol leading-7">
            Explore the unforgettable memories of our pilgrims during Hajj,
            Umrah, and Ziyarat journeys.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="gap-6 space-y-6 columns-1 sm:columns-2 lg:columns-3"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={() => setSelectedImage(image)}
              className="group relative shadow-lg rounded-[30px] overflow-hidden break-inside-avoid cursor-pointer"
            >
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.7,
                }}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500"></div>

              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="bg-white/90 px-6 py-3 rounded-full font-semibold text-main">
                  View Image
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedImage(null)}
            className="z-50 fixed inset-0 flex justify-center items-center bg-black/80 p-5"
          >
            <motion.img
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              src={selectedImage}
              alt="Preview"
              className="shadow-2xl rounded-3xl max-w-5xl max-h-[90vh] object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import SectionHeading from "./SectionHeading";
import { fadeUp, staggerContainer } from "../animations";

export default function Award({
  badge = "Our Achievements",
  title = "Awards &",
  highlight = "Certifications",
  description = "Our achievements and industry-recognized certifications reflect our commitment to excellence, professionalism, and trusted travel services.",

  certificates = [],

  sectionClass = "py-16 md:py-24",

  containerClass = "mx-auto px-4 max-w-7xl",

  gridClass = "gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",

  imageClass = "w-full h-64 object-cover",

  showPreviewButton = true,
}) {
  return (
    <section className={sectionClass}>
      <div className={containerClass}>
        <SectionHeading
          badge={badge}
          title={title}
          highlight={highlight}
          description={description}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className={gridClass}
        >
          {certificates.map((image, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
              }}
              className="group relative bg-gray-100 shadow-sm hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-500"
            >
              <img
                src={image}
                alt={`Award ${index + 1}`}
                className={`${imageClass} transition duration-500 group-hover:scale-105`}
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />

              {showPreviewButton && (
                <motion.a
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                  }}
                  href={image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="right-4 bottom-4 absolute flex justify-center items-center bg-orange-500 hover:bg-orange-600 shadow-lg rounded-full w-12 h-12 text-white transition-all duration-300"
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

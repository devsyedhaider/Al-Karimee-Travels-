import { motion } from "framer-motion";
import { fadeUp } from "../animations";

export default function PagesHeader({ bgImage, title }) {
  return (
    <div
      className="relative flex justify-center items-center bg-cover bg-center w-full h-75 md:h-130 overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/80"
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="z-10 relative px-4 pt-20 md:pt-30 text-white text-center"
      >
        {title && (
          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="font-bold text-3xl sm:text-4xl md:text-6xl tracking-wide"
          >
            {title}
          </motion.h1>
        )}
      </motion.div>
    </div>
  );
}

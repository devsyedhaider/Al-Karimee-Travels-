import { motion } from "framer-motion";
import { fadeUp } from "../animations";

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  badgeClass = "",
  titleClass = "",
  descriptionClass = "",
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      {badge && (
        <span
          className={`font-semibold text-golden text-xs sm:text-sm uppercase tracking-[0.25em] ${badgeClass}`}
        >
          {badge}
        </span>
      )}

      <h2
        className={`mt-4 font-bold text-black text-3xl md:text-5xl lg:text-6xl leading-tight ${titleClass}`}
      >
        {title}

        {highlight && <span className="text-main"> {highlight}</span>}
      </h2>

      {description && (
        <p
          className={`mx-auto mt-5 max-w-2xl font-light text-charcol text-base md:text-lg leading-7 ${descriptionClass}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

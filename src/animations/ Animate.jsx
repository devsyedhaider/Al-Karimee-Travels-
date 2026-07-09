import { motion } from "framer-motion";

export default function Animate({
  children,
  variants,
  className = "",
  delay = 0,
  duration = 0.7,
  once = true,
  amount = 0.2,
  as = "div",
  ...props
}) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{
        delay,
        duration,
      }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

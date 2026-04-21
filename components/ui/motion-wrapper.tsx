"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeInUp" | "fadeIn" | "slideInLeft" | "slideInRight";
  delay?: number;
  duration?: number;
}

const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  },
};

export const MotionWrapper = ({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  duration = 0.5,
}: MotionWrapperProps) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={animations[animation]}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

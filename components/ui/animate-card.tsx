"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Card } from "./card";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export const AnimatedCard = ({
  children,
  className = "",
  delay = 0,
  hover = true,
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, transition: { duration: 0.2 } } : undefined}
    >
      <Card className={className}>{children}</Card>
    </motion.div>
  );
};

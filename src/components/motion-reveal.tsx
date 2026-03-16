"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

type MotionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionReveal({ children, className, delay = 0 }: MotionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function MotionLift({ children, className, delay = 0 }: MotionRevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      whileHover={{ y: -6 }}
    >
      {children}
    </motion.div>
  );
}

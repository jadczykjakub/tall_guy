import { motion, Variants } from "framer-motion";
import React, { ReactNode, CSSProperties } from "react";

interface AnimatedDivProps {
  variants?: Variants;
  className?: string;
  children?: ReactNode;
  infinity?: boolean;
  style?: CSSProperties;
}

export default function AnimatedDiv({
  variants,
  className,
  children,
  infinity = false,
  style,
}: AnimatedDivProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !infinity }}
      variants={variants}
      className={className}
      style={style}
      transition={{ staggerChildren: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

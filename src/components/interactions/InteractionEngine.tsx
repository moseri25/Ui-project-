import React from "react";
import { motion } from "framer-motion";
import { InteractionStyle } from "./styles";

interface InteractionEngineProps {
  style: InteractionStyle;
  children: React.ReactNode;
}

export const InteractionEngine: React.FC<InteractionEngineProps> = ({ style, children }) => {
  return (
    <motion.div
      {...style.motionProps}
      className={style.className}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {children}
    </motion.div>
  );
};

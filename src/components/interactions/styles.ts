import { MotionProps } from "framer-motion";

export type InteractionStyle = {
  id: string;
  name: string;
  description: string;
  // Framer motion variants/props
  motionProps: MotionProps;
  // Tailwind classes for the element
  className: string;
};

export const interactionStyles: Record<string, InteractionStyle> = {
  magnetic: {
    id: "magnetic",
    name: "Magnetic Pull",
    description: "Follows the mouse with a slight delay.",
    motionProps: {
      whileHover: { scale: 1.05 },
      transition: { type: "spring", stiffness: 400, damping: 25 },
    },
    className: "bg-blue-500 text-white p-6 rounded-2xl shadow-lg",
  },
  tilt3d: {
    id: "tilt3d",
    name: "3D Perspective Tilt",
    description: "Tilts based on mouse position.",
    motionProps: {
      whileHover: { rotateX: 10, rotateY: 10 },
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
    className: "bg-zinc-800 text-white p-6 rounded-2xl shadow-2xl perspective-1000",
  },
  microFeedback: {
    id: "microFeedback",
    name: "Micro-Feedback Pop",
    description: "Small scale-up on click.",
    motionProps: {
      whileTap: { scale: 0.95 },
      transition: { type: "spring", stiffness: 500, damping: 20 },
    },
    className: "bg-emerald-500 text-white p-6 rounded-2xl shadow-md",
  },
  glowHover: {
    id: "glowHover",
    name: "Glow Hover",
    description: "Adds a subtle glow effect.",
    motionProps: {
      whileHover: { boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" },
    },
    className: "bg-purple-600 text-white p-6 rounded-2xl shadow-lg",
  },
};

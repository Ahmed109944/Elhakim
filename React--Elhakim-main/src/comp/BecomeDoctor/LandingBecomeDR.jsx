"use client";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

export function LandingBecomeDR() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="py-1 mt-2 text-4xl font-medium tracking-tight text-center text-transparent bg-gradient-to-br from-blue-gray-300 to-white bg-clip-text md:text-7xl"
      >
        Are you ready to <br /> Become a Doctor?
      </motion.h1>
    </LampContainer>
  );
}

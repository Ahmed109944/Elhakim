/* eslint-disable react/prop-types */
"use client";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn.js";

export const LampContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950  w-full rounded-md z-0",
        className
      )}
    >
      <div className="relative z-0 flex items-center justify-center flex-1 w-full scale-y-125 isolate ">
        <div className="absolute w-full h-48 scale-x-150 translate-y-12 top-1/2 bg-slate-950 blur-2xl"></div>
        <div className="absolute z-50 w-full h-48 bg-transparent top-1/2 opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem", opacity: 0.1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem", opacity: 0.5 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "
        ></motion.div>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
      </div>

      <div className="relative z-50 flex flex-col items-center px-5 -translate-y-[23rem]">
        {children}
      </div>
    </div>
  );
};

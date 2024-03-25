/* eslint-disable react/prop-types */
import { cn } from "../../utils/cn.js";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({ items, className }) => {
  // eslint-disable-next-line no-undef
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1  md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          // to={item?.link}
          key={item?.link}
          className="relative block w-full h-full p-2 group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-4/5 bg-cyan-200 dark:bg-teal-200/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImage>{item.image}</CardImage>
            <div className="p-4">
              <CardQ>{item.q}</CardQ>
              <CardTitle>{item.service}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-4/5 overflow-hidden bg-white shadow-lg border border-slate-200 dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div>{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        " p-3 pb-0 text-cyan-500 font-bold tracking-wide mt-1",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "p-3 text-teal-500 tracking-wide  text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardImage = ({ className, children }) => {
  return (
    <img
      src={children}
      className={cn("w-full h-full object-cover ", className)}
    ></img>
  );
};
export const CardQ = ({ className, children }) => {
  return (
    <p
      className={cn(" p-3 pb-0 text-cyan-900/30  text-lg font-semibold", className)}
    >
      {children}
    </p>
  );
};

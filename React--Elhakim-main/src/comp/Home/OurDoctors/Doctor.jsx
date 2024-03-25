/* eslint-disable react/prop-types */
import { PhoneArrowDownLeftIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

// eslint-disable-next-line no-unused-vars
export default function Doctor({ doctor, variants }) {
  return (
    <motion.div
      variants={variants}
      whileHover={{ filter: "grayscale(30)", cursor: "pointer" }}
      className="md:w-[30%] sm:w-full"
    >
      <img className="w-50 h-100" src={doctor.img} />
      <div className="p-4 text-center bg-white">
        <h5 className="text-lg font-bold"> {doctor.name} </h5>
        <small className="flex items-center justify-center text-sm font-bold text-gray-400 ">
          <PhoneArrowDownLeftIcon
            height={"16"}
            width={"16"}
            className="text-cyan-300 me-1"
            icon="{faPhoneAlt}"
          ></PhoneArrowDownLeftIcon>
          {doctor.phone}
        </small>
      </div>
    </motion.div>
  );
}

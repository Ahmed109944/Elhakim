/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
export default function ServiceDetail({ service, variants }) {
  return (
    <motion.div variants={variants} className="mt-5 text-center md:w-4/12">
      <img
        style={{ height: "50px", margin: "auto" }}
        src={service.img}
        alt=""
      />
      <h5 className="mt-3 mb-3 text-xl font-medium"> {service.name} </h5>
      <p className="w-11/12  text-cyan-300"> {service.qoute}</p>
    </motion.div>
  );
}

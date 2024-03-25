import fluoride from "../../../assets/fluoride.png";
import cavity from "../../../assets/cavity.png";
import whitening from "../../../assets/whitening.png";
import ServiceDetail from "./ServiceDetail";
import { motion } from "framer-motion";

const serviceData = [
  {
    name: " Fluoride Treatment ",
    img: fluoride,
    qoute:
      "Fortify your smile with the shield of fluoride. A guardian against decay, this treatment bathes your teeth in a mineral embrace.",
  },
  {
    name: " Cavity Filling ",
    img: cavity,
    qoute:
      "Restore harmony to your oral universe with a cavity filling. It’s not just a repair; it’s a renewal.",
  },
  {
    name: " Teeth Whitening ",
    img: whitening,
    qoute:
      "Illuminate your smile with the radiance of teeth whitening. It’s a brushstroke of light across the canvas of your mouth",
  },
];
const myVariant = {
  initial: {
    opacity: 1,
    scaleX: 0.9,
    scaleY: 0.5,
  },
  whileInView: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};
const childVariant = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: {
      duration: 0.7,

      type: "spring",
      stiffness: 200,
      mass: 0.5,
      damping: 100,
    },
  },
};
const Services = () => {
  return (
    <section className="pt-5 mt-5 mb-20 mt-sm-20 mt-md-0 pt-md-0">
      <div className="text-center">
        <h5 className="text-lg text-cyan-300"> OUR SERVICES </h5>
        <h2 className="text-3xl font-bold"> Services We Provide </h2>
      </div>
      <div className="flex justify-center">
        <motion.div
          variants={myVariant}
          initial="initial"
          whileInView="whileInView"
          className="flex flex-wrap w-3/4 mt-20 "
        >
          {serviceData.map((service) => (
            <ServiceDetail
              variants={childVariant}
              key={service.name}
              service={service}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

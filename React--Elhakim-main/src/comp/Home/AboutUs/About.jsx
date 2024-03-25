import "./about.css";
import featuredImg from "../../../assets/Mask Group 3-min.png";
import { motion } from "framer-motion";

const myVariant = {
  initial: {
    opacity: 1,
    scaleX: 0.9,
    scaleY: 1,
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
const AboutUS = () => {
  return (
    <motion.section
      variants={myVariant}
      initial="initial"
      whileInView="whileInView"
      className="px-5 mx-5 mt-2 featured-service"
    >
      <div className="flex flex-row items-center">
        <div className="md:w-5/12">
          <motion.img
            variants={childVariant}
            whileHover={{ scale: 1.1 }}
            className="img-fluid featured-img"
            src={featuredImg}
            alt=""
          />
        </div>
        <motion.div variants={childVariant} className="md:w-7/12">
          <h1 className="text-4xl font-bold" style={{ color: "#3A4256" }}>
            {" "}
            Exceptional Dental Care, on Your Terms{" "}
          </h1>
          <p className="mt-3 mb-2 leading-8 text-cyan-900">
            In the realm of dental excellence, where precision meets passion, we
            believe in a philosophy that transcends the ordinary. We offer a
            sanctuary for your smile, where cutting-edge technology and timeless
            expertise blend to forge a path to impeccable oral health. Here,
            each interaction is more than a treatment; it&apos;s a celebration
            of your unique dental journey. Your comfort is our command, and your
            dental aspirations are the canvas upon which we paint a masterpiece
            of care.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUS;

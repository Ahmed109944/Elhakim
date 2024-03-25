import Doctor from "./Doctor.jsx";
import { myVariant, childVariant } from "../varients.js";
import { motion } from "framer-motion";
export default function OurDoctors() {
  const doctors = [
    {
      _id: 1,
      name: "Dr. Caudi",
      img: "/src/assets/doctor.png",
      phone: "01030229525",
    },
    {
      _id: 1,
      name: "Dr. Caudi",
      img: "/src/assets/doctor.png",
      phone: "01030229525",
    },
    {
      _id: 1,
      name: "Dr. Caudi",
      img: "/src/assets/doctor.png",
      phone: "01030229525",
    },
    {
      _id: 1,
      name: "Dr. Caudi",
      img: "/src/assets/doctor.png",
      phone: "01030229525",
    },
  ];
  return (
    <section className="pt-5 mt-5 mb-5">
      <div className="flex items-center justify-center mb-16">
        <div className="text-center">
          <p className="text-3xl font-bold text-teal-300"> Our Doctors </p>
        </div>
      </div>

      <div className="container mx-auto">
        <motion.div
          variants={myVariant}
          initial="initial"
          whileInView="whileInView"
          className="flex flex-wrap justify-around"
        >
          {doctors.map((doctor, index) => (
            <Doctor
              variants={childVariant}
              key={doctor._id + index}
              doctor={doctor}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

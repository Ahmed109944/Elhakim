import { Link } from "react-router-dom";
import { StarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faRightLong } from "@fortawesome/free-solid-svg-icons";
export default function DoctorProfile() {
  const [doctorData, setDoctorData] = useState({});

  useEffect(() => {
    fetchDr();
  }, []);
  async function fetchDr() {
    const doctorId = "2";
    const res = await axios.get(`http://localhost:1563/doctors/${doctorId}`);
    const data = res.data;
    console.log(data);
    setDoctorData(data);
    console.log(doctorData);
  }
  console.log(doctorData);
  return (
    <div>
      <div className="container p-5 flex justify-between border-2 w-full m-auto mt-5  ">
        <div className="flex">
          <div>
            <img
              src={doctorData.image}
              className="w-52 h-52 rounded border-2 border-gray-300"
              alt=""
            />
          </div>
          <div className="pl-5">
            <h3>{doctorData.name}</h3>
            <p className=" text-gray-600 pt-2">
              {doctorData.degree} {doctorData.specialization}
            </p>
            <h5 className=" p-2">
              <img
                src="../assets/img/specialities/specialities-05.png"
                className="w-6 h-6 mr-2 inline"
                alt="Speciality"
              />
              Dentist
            </h5>

            <div className="mt-5">
              <ul className="flex ">
                {[1, 2, 3, 4].map((item) => (
                  <li key={item}>
                    <Link>
                      <img
                        src={`../assets/img/features/feature-0${item}.jpg`}
                        className="w-14 h-14 rounded mr-1 mt-8"
                        alt="Feature"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <Link
              className="bg-blue-500 border-2 text-white px-20 py-1 block text-center rounded pt-2 pb-2"
              to={"booking.html"}
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
      <div className="container border-2 border-gray-200 mx-auto mt-5 p-5">
        <h1 className="p-3 w-1/5 text-center text-xl tracking-wider border-b-2 font-semibold border-blue-400 text-blue-400">
          Overview
        </h1>
        <div className="mt-5">
          <h1 className="text-xl  tracking-wider py-5">About Me</h1>
          <p className="text-black-500 pl-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h1 className="text-xl  tracking-wider py-2">Education</h1>
          <div className="pl-10 py-1">
            <ul>
              {[1, 2].map((item) => {
                return (
                  <li key={item} className="my-2 flex">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="mr-3 mt-1 text-blue-100 border-2 border-blue-600 rounded-full text-[10px]"
                    />
                    <div>
                      <h1>American Dental Medical University</h1>
                      <h2 className="text-gray-600">BDS</h2>
                      <h2 className="text-gray-600">2015 - 2020</h2>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <h1 className="text-xl  tracking-wider py-2">Work & Experience</h1>
          <div className="pl-10 py-1">
            <ul>
              {[1, 2].map((item) => {
                return (
                  <li key={item} className="my-2 flex">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="mr-3 mt-1 text-blue-100 border-2 border-blue-600 rounded-full text-[10px]"
                    />
                    <div>
                      <h1>Glowing Smiles Family Dental Clinic</h1>
                      <h2 className="text-gray-600">2015 - 2020</h2>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <h1 className="text-xl  tracking-wider py-2">Awards</h1>
          <div className="pl-10 py-1">
            <ul>
              {[1, 2].map((item) => {
                return (
                  <li key={item} className="my-2 flex">
                    <FontAwesomeIcon
                      icon={faCircle}
                      className="mr-3 mt-1 text-blue-100 border-2 border-blue-600 rounded-full text-[10px]"
                    />
                    <div>
                      <h2 className="text-blue-400">July 2019</h2>
                      <h1>Humanitarian Award</h1>
                      <h2 className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin a ipsum tellus. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus.
                      </h2>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <h1 className="text-xl  tracking-wider py-2">Services</h1>
          <div className="pl-10 py-1">
            <ul className="flex grid grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => {
                return (
                  <li key={item} className="my-2">
                    <h1>
                      <FontAwesomeIcon
                        icon={faRightLong}
                        className="px-4 text-blue-400"
                      />
                      Humanitarian Award
                    </h1>
                  </li>
                );
              })}
            </ul>
          </div>

          <h1 className="text-xl  tracking-wider py-2">Specializations</h1>
          <div className="pl-10 py-1">
            <ul className="flex grid grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => {
                return (
                  <li key={item} className="my-2">
                    <h1>
                      <FontAwesomeIcon
                        icon={faRightLong}
                        className="px-4 text-blue-400"
                      />
                      Dental Care
                    </h1>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

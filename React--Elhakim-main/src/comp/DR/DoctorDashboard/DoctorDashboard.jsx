/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useState } from "react";
import CircularProgress from "../../CircularProgress/CircularProgress";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBedPulse,
  faCalendarDays,
  faUserInjured,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link, Outlet, useLocation } from "react-router-dom";
import { date } from "yup";
import {
  useGetAllAppointementsDoctorQuery,
  useUpdateAppointementStatusMutation,
} from "../../../ReduxTK/api/appointement-api.js";
function DoctorDashboard() {
  const [appointmentsData, setAppointmentsData] = useState([]);
  const [upcoming, setUpcomin] = useState(false);
  const [updateAPPStatus, { isLoading: isLoadingUpdate }] =
    useUpdateAppointementStatusMutation();
  const doctorId = sessionStorage.getItem("id_user");
  const {
    data: apptDATA,
    isLoading,
    refetch,
  } = useGetAllAppointementsDoctorQuery(doctorId);
  console.log(isLoadingUpdate);

  useEffect(() => {}, []);

  const location = useLocation();
  const { pathname } = location;
  let pathSegment = pathname.split("/").includes("upcoming");

  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  let formattedDate =
    year +
    "-" +
    (month < 10 ? "0" : "") +
    month +
    "-" +
    (day < 10 ? "0" : "") +
    day;

  return (
    <>
      <div className="grid flex-wrap gap-10 p-5 mb-5 border-2 border-gray-200 rounded-md shadow-md lg:grid-cols-3">
        <div className="flex items-center justify-start pl-5">
          <div className="relative">
            <CircularProgress percentage="85" circleWidth="100" />
            <FontAwesomeIcon
              icon={faUserInjured}
              className="absolute bottom-[30px] right-[30px] size-10 text-purple-700"
            />
          </div>

          <div className="pl-5">
            <h2 className="text-lg font-semibold">Total Patients</h2>
            <h1 className="pt-2 pb-2 font-extrabold">1500</h1>
            <h3 className="text-gray-600">Till Today</h3>
          </div>
        </div>

        <div className="flex items-center justify-start pl-5 lg:border-l-2 lg:border-l-gray-500">
          <div className="relative ">
            <CircularProgress percentage="75" circleWidth="100" />
            <FontAwesomeIcon
              icon={faBedPulse}
              className="absolute bottom-[30px] right-[30px] size-10 text-red-700"
            />
          </div>

          <div className="pl-5">
            <h2 className="text-lg font-semibold">Today Patients</h2>
            <h1 className="pt-2 pb-2 font-extrabold">160</h1>
            <h3 className="text-gray-600">{formattedDate}</h3>
          </div>
        </div>

        <div className="relative flex items-center justify-start pl-5 lg:border-l-2 lg:border-l-gray-500">
          <div className="relative">
            <CircularProgress percentage="50" circleWidth="100" />
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="absolute bottom-[30px] right-[30px] size-10 text-blue-900"
            />
          </div>

          <div className="pl-5 lg:pr-5">
            <h2 className="text-lg font-semibold">Appointments</h2>
            <h1 className="pt-2 pb-2 font-extrabold">85</h1>
            <h3 className="text-gray-600">{formattedDate}</h3>
          </div>
        </div>
      </div>
      <h2 className="mb-4 text-xl font-semibold">Appointments</h2>
      <div className="p-3">
        <Link
          className={`${
            !pathSegment ? "bg-blue-400 text-white" : "bg-gray-300 text-black"
          } p-2 px-5 rounded-full hover:bg-gray-200 focus:bg-blue-400 focus:text-white transition-all duration-500`}
          to={"/doctor/dashboard"}
        >
          Today
        </Link>
        <Link
          className={`${
            pathSegment ? "bg-blue-400 text-white" : "bg-gray-300 text-black"
          }  p-2 px-5 rounded-full hover:bg-gray-200 focus:bg-blue-400 focus:text-white transition-all duration-500`}
          to={"upcoming"}
        >
          Upcoming
        </Link>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default DoctorDashboard;

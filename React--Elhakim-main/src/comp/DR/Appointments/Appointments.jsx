import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useEffect, useState } from "react";
import {
  faClock,
  faEnvelope,
  faPhoneFlip,
  faEye,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Button, CardFooter, Typography } from "@material-tailwind/react";
import {
  useGetAllAppointementsDoctorQuery,
  useUpdateAppointementStatusMutation,
  // useUpdateAppointementStatusMutation,
} from "../../../ReduxTK/api/appointement-api.js";
import Spinner from "../../Spinner.jsx";
/* eslint-disable react/prop-types */
export default function Appointments() {
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [updateAPPStatus, { isLoading: isLoadingUpdate }] =
    useUpdateAppointementStatusMutation();
  const doctorId = sessionStorage.getItem("id_user");
  const {
    data: apptDATA,
    isLoading,
    refetch,
  } = useGetAllAppointementsDoctorQuery(doctorId);
  console.log(isLoadingUpdate);
  useEffect(() => {
    if (!isLoadingUpdate) {
      refetch();
    }
  }, [isLoadingUpdate, refetch]);
  if (isLoading) return <Spinner />;
  console.log(apptDATA);
  const numPages = limit > 0 ? Math.ceil(apptDATA.data.data.length / limit) : 1;
  const indexOfLastItem = page * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentItems = apptDATA.data.data.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handleUpdateStatus = (appointmentId, status) => {
    updateAPPStatus({ id: appointmentId, data: { status } })
      .unwrap()
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-5">
        {currentItems.map((item, index) =>
          item.status === "zzzz" ? null : (
            <div
              className="flex items-center justify-between p-5 border-2 border-gray-200 shadow"
              key={index}
            >
              <div className="flex justify-start">
                <img
                  src={
                    `http://localhost:3000/upload/${item.user.photo}` || null
                  }
                  className="w-[150px] h-[150px] rounded border-2 border-gray-300 "
                />
                <div>
                  <h1 className="pb-3 pl-2 font-extrabold tracking-widest">
                    {item.user.name}
                  </h1>
                  <h2 className="p-1 text-gray-600">
                    <FontAwesomeIcon icon={faClock} />
                    <span className="pl-2 font-thin">
                      {item.date}, {item.time}
                    </span>
                  </h2>

                  <h2 className="p-1 pl-2 text-gray-600">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span className="pl-2 font-thin">{item.user.email}</span>
                  </h2>
                  <h2 className="p-1 pl-2 text-gray-600">
                    <FontAwesomeIcon icon={faPhoneFlip} />
                    <span className="pl-2 font-thin">
                      +20 {item.user.mobile}
                    </span>
                  </h2>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <button className="p-1 pl-2 pr-2 text-blue-500 bg-blue-100 rounded">
                  <FontAwesomeIcon icon={faEye} />
                  <span className="ml-2">view</span>
                </button>
                {item.status === "pending" ? (
                  <>
                    {" "}
                    <button
                      className="p-1 pl-2 pr-2 text-green-500 bg-green-100 rounded"
                      onClick={() => handleUpdateStatus(item._id, "accepted")}
                    >
                      <FontAwesomeIcon icon={faCheck} />
                      <span className="ml-2">accept</span>
                    </button>
                    <button
                      className="p-1 pl-2 pr-2 text-red-500 bg-red-100 rounded"
                      onClick={() => handleUpdateStatus(item._id, "rejected")}
                    >
                      <FontAwesomeIcon icon={faXmark} />
                      <span className="ml-2">cancel</span>
                    </button>
                  </>
                ) : item.status === "accepted" ? (
                  <button
                    className="p-1 pl-2 pr-2 text-green-500 bg-green-100 rounded"
                    onClick={() => handleUpdateStatus(item._id, "pending")}
                  >
                    <FontAwesomeIcon icon={faCheck} />
                    <span className="ml-2">accepted</span>
                  </button>
                ) : (
                  <button
                    className="p-1 pl-2 pr-2 text-red-500 bg-red-100 rounded"
                    disabled
                  >
                    <FontAwesomeIcon icon={faXmark} />
                    <span className="ml-2">rejected</span>
                  </button>
                )}
              </div>
            </div>
          )
        )}
        <CardFooter className="flex items-center justify-between p-4 transition-all duration-1000 border-t border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page {page} of {numPages}
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              size="sm"
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                } else {
                  setPage(1);
                }
              }}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              size="sm"
              onClick={() => {
                if (page < numPages) {
                  setPage(page + 1);
                } else {
                  setPage(numPages);
                }
              }}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </div>
    </>
  );
}

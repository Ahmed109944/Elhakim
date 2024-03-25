import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faEye, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, CardFooter, Typography } from "@material-tailwind/react";
import {
  useGetAllAppointementsDoctorQuery,
  useUpdateAppointementStatusMutation,
} from "../../../../ReduxTK/api/appointement-api.js";
import Spinner from "../../../Spinner.jsx";

export default function Upcoming() {
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
  function toLocalISOString(date) {
    const offset = date.getTimezoneOffset();
    const adjustedDate = new Date(date.getTime() - offset * 60 * 1000);
    return adjustedDate.toISOString().split("T")[0];
  }
  const today = new Date().toISOString().split("T")[0];
  const upcomingAppt = apptDATA.data.data.filter((app) => {
    const date = new Date(app.date);
    const localDateISOString = toLocalISOString(date);
    // if (localDateISOString == today) {
    //   return app;
    // }
    if (isAfter(new Date(localDateISOString), new Date())) {
      return app;
    }
  });

  const numPages = limit > 0 ? Math.ceil(upcomingAppt.length / limit) : 1;
  function isAfter(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
      throw new Error("Both arguments must be Date objects");
    }

    return (
      date1.getFullYear() > date2.getFullYear() ||
      (date1.getFullYear() === date2.getFullYear() &&
        (date1.getMonth() > date2.getMonth() ||
          (date1.getMonth() === date2.getMonth() &&
            date1.getDate() > date2.getDate())))
    );
  }

  const handleUpdateStatus = (appointmentId, status) => {
    updateAPPStatus(appointmentId, { status });
  };

  const indexOfLastItem = page * limit;
  const indexOfFirstItem = indexOfLastItem - limit;

  const currentItems = upcomingAppt.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div>
      <div className="overflow-auto w-full shadow h-[325px] max-h-[325px] overflow-y-auto border-2 border-gray-200 rounded">
        <table className="w-full border-collapse">
          <thead className="sticky top-0">
            <tr className="font-semibold text-center bg-white text-s ">
              <th className="p-2 tracking-wide text-left border-b-2 border-gray-200">
                Patient Name
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left border-b-2 border-gray-200">
                Appt Date
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left border-b-2 border-gray-200">
                Mobile
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left border-b-2 border-gray-200">
                Service
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left border-b-2 border-gray-200">
                Status
              </th>
              <th className="p-2 text-sm font-semibold tracking-wide text-left border-b-2 border-gray-200">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="content-center text-gray-700">
            {currentItems.map((item, index) =>
              item.status === "zzz" ? null : (
                <tr key={index} className="hover:bg-gray-200">
                  <td className="p-2 pr-10 text-sm tracking-wide text-left border-b border-gray-200 whitespace-nowrap">
                    <Link className="flex items-center">
                      <img
                        className="w-[60px] h-[60px] rounded-full object-cover inline-block ring-1"
                        src={
                          `http://localhost:3000/upload/${item.user.photo}` ||
                          null
                        }
                        alt="User Image"
                      />
                      <div className="p-2">
                        <div className="text-lg text-blue-600">
                          {item.user.name}
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="p-2 py-3 text-sm tracking-wide text-left border-b border-gray-200 whitespace-nowrap">
                    <div>{item.date}</div>
                    <div className="p-1 text-blue-600">{item.time}</div>
                  </td>
                  <td className="p-2 py-3 text-sm tracking-wide text-left border-b border-gray-200 whitespace-nowrap">
                    {item.user.mobile}
                  </td>
                  <td className="p-2 py-3 text-sm tracking-wide text-left border-b border-gray-200 whitespace-nowrap">
                    {item.service}
                  </td>

                  <td className="p-2 py-3 text-sm tracking-wide text-left border-b border-gray-200 whitespace-nowrap">
                    {item.status === "pending" ? (
                      <span className="px-2 py-1 text-white bg-yellow-900 rounded badge">
                        {item.status}
                      </span>
                    ) : item.status === "accepted" ? (
                      <span className="px-2 py-1 text-white bg-green-900 rounded badge">
                        {item.status}
                      </span>
                    ) : (
                      <span className="px-2 py-1 text-white bg-red-900 rounded badge">
                        {item.status}
                      </span>
                    )}
                  </td>
                  <td className="p-2 py-3 text-sm tracking-wide text-left border-b border-gray-200 whitespace-nowrap ">
                    <div className="flex">
                      <Link
                        className="px-2 py-1 mr-2 text-blue-900 bg-blue-100 rounded btn"
                        to={`/doctor/add-prescription?booking=${item._id}&doctor=${doctorId}&user=${item.user._id}`}
                      >
                        <FontAwesomeIcon icon={faEye} /> View
                      </Link>
                    </div>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <CardFooter className="flex items-center justify-between p-4 border-t border-blue-gray-50">
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
  );
}

import { faCheck, faEye, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, CardFooter, Typography } from "@material-tailwind/react";
import Modal from "react-modal";
import {
  useGetAllAppointementsDoctorQuery,
  useUpdateAppointementStatusMutation,
} from "../../../../ReduxTK/api/appointement-api.js";
import Spinner from "../../../Spinner.jsx";
import { Link } from "react-router-dom";
export default function Today() {
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [currentItem, setCurrentItem] = useState({});
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
  Modal.setAppElement("#root");
  function toLocalISOString(date) {
    const offset = date.getTimezoneOffset();
    const adjustedDate = new Date(date.getTime() - offset * 60 * 1000);
    return adjustedDate.toISOString().split("T")[0];
  }
  const today = new Date().toISOString().split("T")[0];
  const todaygAppt = apptDATA.data.data.filter((app) => {
    const date = new Date(app.date);
    const localDateISOString = toLocalISOString(date);
    if (localDateISOString == today) {
      return app;
    }
  });
  const numPages = limit > 0 ? Math.ceil(todaygAppt.length / limit) : 1;

  const indexOfLastItem = page * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentItems = todaygAppt.slice(indexOfFirstItem, indexOfLastItem);

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
                        to={`/doctor/add-prescription/${item._id}/${item.user._id}/${doctorId}`}
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

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          shouldCloseOnOverlayClick={false}
          style={{
            overlay: {
              backgroundColor: "gray",
            },
            content: {
              width: "400px",
              top: "15%",
              left: "35%",
              bottom: "30%",
              borderRadius: "15px",
            },
          }}
        >
          <div className="flex items-center justify-between p-2 pt-3 pb-5 border-b-2 border-gray-500">
            <h1 className="text-2xl font-semibold">Appointment Details</h1>
            <button
              onClick={() => setModalIsOpen(false)}
              className="w-8 h-8 text-2xl font-extrabold text-white bg-gray-500 rounded-full"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="pt-5 pb-5">
            <div className="flex justify-between">
              <h1 className="text-lg"># APT {currentItem.id}</h1>
              <button
                disabled
                className="p-1 pl-4 pr-4 text-green-500 bg-green-100 rounded-xl"
              >
                {currentItem.status}
              </button>
            </div>
            <h1 className="text-lg text-gray-700">
              {currentItem.date} {currentItem.time}
            </h1>
            <h1 className="text-lg">Status :</h1>
            <h1 className="text-lg text-gray-700">{currentItem.status}</h1>
            <h1 className="text-lg">Patient Name :</h1>
            <h1 className="text-lg text-gray-700">{currentItem.patientName}</h1>
            <h1 className="text-lg">Injury :</h1>
            <h1 className="text-lg text-gray-700">{currentItem.injury}</h1>
          </div>
        </Modal>
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

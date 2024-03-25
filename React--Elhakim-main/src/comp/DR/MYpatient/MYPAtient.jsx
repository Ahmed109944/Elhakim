import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Button, CardFooter, Typography } from "@material-tailwind/react";
export default function MYPAtient() {
  const [patients, setPatients] = useState([]);

  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);
  const numPages = limit > 0 ? Math.ceil(patients.length / limit) : 1;
  const indexOfLastItem = page * limit;
  const indexOfFirstItem = indexOfLastItem - limit;
  const currentItems = patients.slice(indexOfFirstItem, indexOfLastItem);
  const doctotId = sessionStorage.getItem("id_user");
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/bookings/?doctor=${doctotId}`
        );
        console.log(data);

        const updatedPatients = data.data.data.map((patient) => {
          return patient;
        });

        const uniqueUsers = updatedPatients.reduce((acc, current) => {
          const x = acc.find((item) => item.user._id === current.user._id);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        }, []);

        setPatients(uniqueUsers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchPatients();
  }, []);
  return (
    <div>
      <div className="grid w-full grid-cols-1 gap-3 p-5 pt-1 sm:grid-cols-2 lg:grid-cols-4">
        {currentItems.map((item, index) => (
          <div
            className="p-5 border-2 border-gray-200 rounded-md shadow-md"
            key={index}
          >
            <div className="border-b-2 border-b-gray-200 pb-7">
              <div className="w-[120px] mx-auto pt-10 border-b-1 border-gray-600 pb-3">
                <img
                  src={`http://localhost:3000/upload/${item.user.photo}`}
                  className="w-[120px] h-[120px]  rounded-full  ring-[15px] ring-gray-200"
                />
              </div>
              <h1 className="pt-5 pb-2 font-semibold tracking-widest text-center">
                {item.user.name}
              </h1>
              <h2 className="font-semibold text-center text-gray-600">
                Patient ID : <span className="font-normal">{item.user.id}</span>
              </h2>
            </div>
            <h3 className="flex justify-between p-5">
              <span>Phone</span>
              <span className="text-gray-600"> {item.user.mobile}</span>
            </h3>
            <h3 className="flex justify-between p-5 pt-0">
              <span>Age</span>
              <span className="text-gray-600">
                {item.age} Years, {item.user.gender}
              </span>
            </h3>
          </div>
        ))}
      </div>
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
  );
}

import { StarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SerarchDR() {
  let { allDoctors } = useSelector((state) => state);
  const arrayDoctors = [];
  for (const [key, value] of Object.entries(allDoctors)) {
    if (key == "_persist") continue;
    arrayDoctors.push(value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="block w-1/2 mx-auto mt-2 form-control"
      />
      <div className="grid grid-cols-1 py-10 gap-y-5 ps-3 md:grid-cols-2 lg:grid-cols-3">
        {arrayDoctors.map((item) => (
          <div
            key={item._id}
            className="relative w-4/5 h-full mt-3 overflow-hidden bg-white border shadow-lg rounded-2xl border-slate-200 "
          >
            <div>
              <img
                src={`http://localhost:3000/upload/${item.photo}`}
                className="object-contain w-full h-40 "
              ></img>
              <div className="p-4">
                <p className="p-3 pb-0 text-lg font-semibold text-cyan-900">
                  Dr. {item?.name}
                </p>
                <p className="p-3 pb-0 text-lg font-semibold text-cyan-900">
                  Price: {item?.price}
                </p>

                <h5 className="p-3 pb-3 mt-1 font-bold tracking-wide text-cyan-500 ">
                  <img
                    src="/src/assets/img/specialities/specialities-05.png"
                    className="inline w-6 h-6 mr-2"
                    alt="Speciality"
                  />
                  Dentist
                </h5>

                <div className="flex justify-between p-3 text-sm tracking-wide">
                  {" "}
                  <Link className="px-1 py-3 text-blue-500 rounded-md mr-text-center hover:bg-gray-200 ">
                    View Profile
                  </Link>
                  <Link
                    to={`/get-appintemnt/${item?._id}`}
                    className="px-1 py-3 text-center text-blue-500 border-2 border-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

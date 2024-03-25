/* eslint-disable react/prop-types */

import "./AppointmentHeader.css";
import Calendar from "react-calendar";

// import "react-calenda";

const AppointmentHeader = ({ handleDateChange, selectedDate }) => {
  const tileClassName = ({ date, view }) => {
    if (
      view === "month" &&
      date.toDateString() === selectedDate.toDateString()
    ) {
      return "react-calendar__tile--selected";
    }
  };
  const tileDisabled = ({ date, view }) => {
    return view === "month" && date < new Date();
  };
  return (
    <>
      <div className="flex h-[600px] items-center justify-center">
        <div className="w-full max-w-sm">
          <h1 className="text-[#3A4256] mb-12 text-4xl">Appointment</h1>
          <div className=" bg-white shadow-lg px-10 py-6 flex justify-center max-w-[26rem] max-h-[26rem] min-h-[26rem]">
            <Calendar
              onChange={(e) => {
                handleDateChange(e);
              }}
              value={new Date()}
              className="calendar"
              tileClassName={tileClassName}
              tileDisabled={tileDisabled}
            />
          </div>
        </div>
        <img
          className="hidden w-full max-w-md md:block ms-3"
          src="/src/assets/Screenshot 2024-03-22 033519.png"
          alt=""
        />
      </div>
    </>
  );
};

export default AppointmentHeader;

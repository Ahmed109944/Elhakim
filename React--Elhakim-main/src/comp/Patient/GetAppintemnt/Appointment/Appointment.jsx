import { useState } from "react";
import "./Appointment.css";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppointment/BookAppointment";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      {/* <Spinner /> */}
      <div className="Appointment mb-7 h-[600px]">
        <AppointmentHeader
          handleDateChange={handleDateChange}
          selectedDate={selectedDate}
        />
      </div>

      <BookAppointment date={selectedDate} />
    </div>
  );
};

export default Appointment;

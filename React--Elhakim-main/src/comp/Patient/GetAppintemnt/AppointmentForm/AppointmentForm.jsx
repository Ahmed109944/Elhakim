/* eslint-disable react/prop-types */
import "./AppointmentForm.css";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useMakeNewAppointementMutation } from "../../../../ReduxTK/api/appointement-api.js";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({
  modalIsOpen,
  closeModal,
  appointmentSub,
  chooseDR,
  date,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { userInfo } = useSelector((state) => state);
  let { allDoctors } = useSelector((state) => state);
  const arrayDoctors = [];
  for (const [key, value] of Object.entries(allDoctors)) {
    if (key == "_persist") continue;
    arrayDoctors.push(value);
  }
  const [addBook, { isLoading, isSuccess }] = useMakeNewAppointementMutation();
  const onSubmit = async (data) => {
    data.service = appointmentSub;
    data.date = date.toDateString();
    if (chooseDR?._id) {
      data.doctor = chooseDR?._id;
    }
    data.user = userInfo?._id;
    const res = await addBook(data).unwrap();
    console.log(res);
    reset({ age: "", doctor: "", service: "", date: "" });
    closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel=" Modal"
      >
        <h2 className="mt-3 text-2xl text-center"> {appointmentSub} </h2>
        <p className="mb-0 text-center text-cyan-200">
          {" "}
          On {date.toDateString()}
        </p>

        <form className="w-[30rem] py-5 px-9" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="bg-gray-300 form-control form-control-lg"
            type="text"
            value={appointmentSub}
            disabled
          />
          <div className="py-2 ">
            {chooseDR?._id ? (
              <input
                className="bg-gray-300 form-control form-control-lg"
                type="text"
                // {...register("doctor", { required: true })}
                value={"Dr / " + chooseDR?.name}
                disabled
              />
            ) : (
              <select
                className="form-control"
                name="doctor"
                {...register("doctor", { required: true })}
              >
                <option disabled={true} value="Not Selected">
                  Select Doctor
                </option>
                {arrayDoctors?.map((doctor) => (
                  <option key={doctor?._id} value={doctor?._id}>
                    Dr /{doctor?.name}
                  </option>
                ))}
              </select>
            )}

            {errors.doctor && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="py-2 mb-3">
            <select
              className="form-control"
              name="time"
              {...register("time", { required: true })}
            >
              <option disabled={true} value="Not Selected">
                Select Time
              </option>
              <option value="8:00 AM - 9:00 PM">8:00 AM - 9:00 PM</option>
              <option value="10:00 AM - 1:00 PM">10:00 AM - 1:00 PM</option>
              <option value="4:00 PM - 7:00 PM">4:00 PM - 7:00 PM</option>
              <option value="7:00 PM - 9:00 PM">7:00 PM - 9:00 PM</option>
              <option value="5:00 AM - 9:00 PM">5:00 AM - 9:00 PM</option>
              <option value="11:00 AM - 5:00 PM">11:00 AM - 5:00 PM</option>
            </select>
            {errors.schedule && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/3">
              <input
                {...register("age", { required: true })}
                type="number"
                name="age"
                className="mt-1 form-control"
                placeholder="Age"
              />
              {errors.age && (
                <span className="text-xs italic text-red-500">
                  This field is required
                </span>
              )}
            </div>
          </div>

          {errors.exampleRequired && <span>This field is required</span>}
          <div className="flex justify-end ">
            <input
              className="flex justify-end mt-2 bg-cyan-500 submit-appointement-btn"
              type="submit"
            />
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;

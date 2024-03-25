import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
export default function AddPrescription() {
  const { doctor, user, booking } = useParams();
  console.log(doctor, user, booking);
  const [drugIterator, setDrugIterator] = useState([1]);
  const validationSchema = Yup.object({
    symptoms: Yup.string()

      .min(100, "name is too short")
      .required("Symptoms is  required"),
    prescriptions: Yup.string()
      .min(100, "name is too short")
      .required("Prescription is  required"),

    medicines: Yup.array().of(
      Yup.object().shape({
        drug: Yup.string().required("Drug name is required"),
        dosage: Yup.string().required("Dosage is required"),
        instructions: Yup.string().required("Instructions are required"),
      })
    ),
  });
  const addPrescription = (values) => {
    console.log(values);
    values.user = user;
    values.doctor = doctor;
    values.booking = booking;

    axios
      .post("http://localhost:3000/api/v1/prescription", values)
      .then((response) => {
        console.log(response.data);
      });
  };
  let formData = useFormik({
    initialValues: {
      symptoms: "",
      prescription: "",
      medicines: [{}],
    },
    validationSchema,
    onSubmit: addPrescription,
  });
  const handleMedicineChange = (e, index) => {
    // Destructure name and value from the event target
    const { name, value } = e.target;

    // Create a copy of the current medicines array from the state
    const newMedicines = [...formData.values.medicines];

    // Check if the medicine object at the current index exists
    if (!newMedicines[index]) {
      // If not, initialize it as an empty object
      newMedicines[index] = {};
    }

    // Set the property on the medicine object
    newMedicines[index][name] = value;

    // Update the formik state with the new medicines array
    formData.setFieldValue("medicines", newMedicines);
  };

  const addMedicine = () => {
    const newMedicine = { drug: "", dosage: "", instructions: "" };
    formData.setFieldValue("medicines", [
      ...formData.values.medicines,
      newMedicine,
    ]);
  };

  return (
    <div className="p-5">
      <h1 className="my-5 text-4xl text-center text-blue-400">
        Add Prescription
      </h1>
      <form onSubmit={formData.handleSubmit}>
        <div className="grid grid-cols-1 p-5 m-5 border-2 border-gray-400">
          <label className="my-2">Symptoms</label>
          <textarea
            name="symptoms"
            value={formData.values.symptoms}
            cols="30"
            rows="5"
            onChange={formData.handleChange}
            onBlur={formData.handleBlur}
            className="block w-full p-2 pt-3 pb-3 border-2 border-gray-500 rounded outline-none"
          ></textarea>
        </div>

        <div className="grid grid-cols-1 p-5 m-5 border-2 border-gray-400">
          <div className="w-full">
            <h1 className="block mb-2">Experience</h1>
            <div>
              {drugIterator.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-3 gap-5 mb-5">
                      <div className="w-full">
                        <label className="text-sm">Drug Name</label>
                        <input
                          type="text"
                          name={"drug"}
                          value={item.drug}
                          onChange={(e) => handleMedicineChange(e, index)}
                          onBlur={formData.handleBlur}
                          className="block w-full p-2 pt-3 pb-3 mt-3 border-2 border-gray-500 rounded outline-none"
                        ></input>
                      </div>
                      <div className="w-full">
                        <label className="text-sm">Dosage</label>
                        <input
                          type="text"
                          name={"dosage"}
                          value={item.dosage}
                          onChange={(e) => handleMedicineChange(e, index)}
                          onBlur={formData.handleBlur}
                          className="block w-full p-2 pt-3 pb-3 mt-3 border-2 border-gray-500 rounded outline-none"
                        ></input>
                      </div>
                      <div className="w-full">
                        <label className="text-sm">Instructions</label>
                        <input
                          type="text"
                          name={"instructions"}
                          value={item.instructions}
                          onChange={(e) => handleMedicineChange(e, index)}
                          onBlur={formData.handleBlur}
                          className="block w-full p-2 pt-3 pb-3 mt-3 border-2 border-gray-500 rounded outline-none"
                        ></input>
                      </div>
                    </div>
                    {drugIterator.length > 1 ? (
                      <button
                        onClick={() => {
                          addMedicine();
                          setDrugIterator(
                            drugIterator
                              .slice(0, index)
                              .concat(drugIterator.slice(index + 1))
                          );
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="text-red-400"
                        />
                      </button>
                    ) : null}
                  </div>
                );
              })}
              <div
                onClick={() => {
                  drugIterator.push(1);
                }}
                className="flex items-center"
              >
                <button className="bg-blue-400 text-white rounded-full w-[30px] h-[30px] text-xl font-bold">
                  +
                </button>
                <span className="ml-3 text-blue-400 ">add more</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 p-5 m-5 border-2 border-gray-400">
          <label className="my-2">Prescription</label>
          <textarea
            name="prescription"
            value={formData.values.prescription}
            cols="30"
            rows="5"
            onChange={formData.handleChange}
            onBlur={formData.handleBlur}
            className="block w-full p-2 pt-3 pb-3 border-2 border-gray-500 rounded outline-none"
          ></textarea>
        </div>
        <button
          className="p-2 mt-2 font-bold text-white bg-green-300 rounded"
          type="submit"
          onClick={() => {
            formData.values.user = user;
            formData.values.doctor = doctor;
            formData.values.booking = booking;
            axios
              .post(
                "http://localhost:3000/api/v1/prescription",
                formData.values
              )
              .then((response) => {
                console.log(response.data);
              });
          }}
        >
          Save{" "}
        </button>
      </form>
    </div>
  );
}

import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useUpdateUserMutation } from "../../ReduxTK/api/user-api.js";
import axios from "axios";

export default function FormBecomeDR() {
  const [cv, setCv] = useState(null);
  const [licensedID, setlicensedID] = useState(null);
  const [updateUser, { isLoading, isSuccess }] = useUpdateUserMutation();
  const id_user = sessionStorage.getItem("id_user");
  const uploadFile = () => {
    const formData = new FormData();

    formData.append("cv", cv);
    formData.append("licensedID", licensedID);
    formData.append("role", "doctor");
    formData.append("price", "100");
    updateUser({ id: id_user, data: formData })
      .unwrap()
      .then((response) => {
        console.log(response);
      });
  };
  const {
    handleChange,
    handleSubmit,
    isValid,
    handleBlur,
    touched,

    errors,
  } = useFormik({
    initialValues: {
      cv: "",
      card: "",
      grantee: false,
    },
    onSubmit: () => {
      uploadFile();
    },
    validationSchema: Yup.object().shape({
      cv: Yup.string().required("CV is required"),
      card: Yup.string().required("ID Card is required"),
      grantee: Yup.boolean().oneOf([true], "Accept is required"),
    }),
  });
  return (
    <>
      <form className="w-full max-w-sm " onSubmit={handleSubmit}>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="block pr-4 mb-1 font-bold md:text-right md:mb-0"
              htmlFor="cv"
            >
              CV
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              onChange={(e) => {
                handleChange(e);
                setCv(e.target.files[0]);
              }}
              onBlur={handleBlur}
              className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
              id="cv"
              type="file"
              name="cv"
            />
            {touched.cv && errors.cv && (
              <p className="text-red-500">{errors.cv}</p>
            )}
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="block pr-4 mb-1 font-bold md:text-right md:mb-0"
              htmlFor="card"
            >
              ID Card
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              onChange={(e) => {
                handleChange(e);
                setlicensedID(e.target.files[0]);
              }}
              onBlur={handleBlur}
              className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border-2 border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-purple-500"
              id="card"
              type="file"
              name="card"
            />
            {touched.card && errors.card && (
              <p className="text-red-500">{errors.card}</p>
            )}
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3" />
          <label className="block font-bold text-gray-500 md:w-2/3">
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              name="grantee"
              className="mr-2 leading-tight"
              type="checkbox"
            />
            <span className="text-sm">Grantee all information correct!</span>
            {touched.grantee && errors.grantee && (
              <p className="text-red-500">{errors.grantee}</p>
            )}
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3" />
          <div className="md:w-2/3">
            <button
              className="px-4 py-2 font-bold text-white rounded shadow bg-cyan-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none"
              type="submit"
              disabled={!isValid}
            >
              Send Request
            </button>
          </div>
        </div>
        <p className="p-5 text-center text-red-500">
          Remmber if put Fake Data your account will be deleted
        </p>
      </form>
    </>
  );
}

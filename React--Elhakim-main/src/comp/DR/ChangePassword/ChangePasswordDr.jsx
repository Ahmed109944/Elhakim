import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
export default function ChangePasswordDr() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  async function changePassword(values) {
    let { data, status } = await axios.patch(
      `http://localhost:3000/api/v1/users/updateMyPassword`,
      values,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (data.status === "success") {
      navigate("/auth/login");
    }
  }
  const validationSchema = Yup.object({
    passwordCurrent: Yup.string()
      .matches(/[a-z0-9]{3}$/, "invalid password")
      .required("required"),

    password: Yup.string()
      .matches(/[a-z0-9]{3}$/, "invalid password")
      .required("required"),
    passwordConfirm: Yup.string().oneOf([Yup.ref("password"), null]),
  });
  let formData = useFormik({
    initialValues: {
      passwordCurrent: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit: changePassword,
  });
  return (
    <div className="p-5 ml-2 mr-2 border-2 border-gray-200 rounded shadow-md">
      <form onSubmit={formData.handleSubmit}>
        <div className="grid grid-cols-2 gap-8 pt-5 pb-5">
          <div className="w-full">
            <label className="block mb-2">
              old Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="passwordCurrent"
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
              value={formData.values.passwordCurrent}
              className="block w-full p-2 pt-3 pb-3 border-2 border-gray-500 rounded outline-none "
            />
            {formData.errors.passwordCurrent && (
              <p className="text-red-500">{formData.errors.passwordCurrent}</p>
            )}
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 gap-8 pt-5 pb-5">
          <div className="w-full">
            <label className="block mb-2">
              new password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
              value={formData.values.password}
              className="block w-full p-2 pt-3 pb-3 border-2 border-gray-500 rounded outline-none "
            />{" "}
            {formData.errors.password && (
              <p className="text-red-500">{formData.errors.password}</p>
            )}
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-2 gap-8 pt-5 pb-5">
          <div className="w-full">
            <label className="block mb-2">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
              value={formData.values.passwordConfirm}
              name="passwordConfirm"
              className="block w-full p-2 pt-3 pb-3 border-2 border-gray-500 rounded outline-none "
            />
            {formData.errors.passwordConfirm && (
              <p className="text-red-500">{formData.errors.passwordConfirm}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 pt-5 pb-5">
          <div>
            <button
              className="p-2 pt-3 pb-3 text-white bg-green-500 rounded outline-none"
              type="submit"
            >
              Save changes
            </button>
          </div>
          <div></div>
        </div>
      </form>
    </div>
  );
}

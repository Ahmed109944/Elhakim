import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";

import * as Yup from "yup";
import { useUpdateUserMutation } from "../../../ReduxTK/api/user-api.js";
import { useDispatch, useSelector } from "react-redux";
import { setuserInfo } from "../../../ReduxTK/Slices/userInfoSlice.js";
export default function ProfileSettings() {
  const [image, setImage] = useState();
  const { userInfo } = useSelector((state) => state);
  const doctorId = sessionStorage.getItem("id_user");
  const [updateUser, { isLoading, isSuccess }] = useUpdateUserMutation();
  const dispatch = useDispatch();
  const updateProfileImage = (imageP) => {
    console.log(imageP);
    const formData = new FormData();
    formData.append("photo", imageP);
    updateUser({ id: doctorId, data: formData })
      .unwrap()
      .then((response) => {
        dispatch(setuserInfo(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const updateData = (values) => {
    updateUser({ id: doctorId, data: values })
      .unwrap()
      .then((response) => {
        console.log(response);
        dispatch(setuserInfo(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .max(20, "name is to long")
      .min(3, "name is too short")
      .required("user name required"),
    gender: Yup.string()
      .oneOf(["female", "male"], "gender must be a male or female")
      .required("gender is required"),
    mobile: Yup.string()
      .matches(/^0(11|12|15|10)\d{8}$/, "Invalid Egyptian phone number")
      .required("Phone number is required"),

    email: Yup.string()
      .email("invalid email")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|eg)$/,
        "email must match this xxxx@xxx.eg|com"
      ),
    aboutMe: Yup.string().required().max(200, "about is to long"),
    university: Yup.string().required().max(100, "university is to long"),
    degree: Yup.string().required().max(100, "degree is to long"),
    yearOfCompletion: Yup.date().required("year is required"),
    dateOfBeginning: Yup.date().required("date is required"),
    hospitalName: Yup.string().required("hospital name is required"),
    from: Yup.date().required("from is required"),
    to: Yup.date().required("to is required"),
    specialization: Yup.string().required("specialization is required"),
    service: Yup.string().required("service is required"),
  });

  let formData = useFormik({
    initialValues: {
      name: userInfo.name,
      email: userInfo.email,
      gender: userInfo.gender,
      mobile: userInfo.mobile,
      aboutMe: userInfo.aboutMe,
      degree: userInfo.degree,
      university: userInfo.university,
      dateOfBeginning: userInfo.dateOfBeginning,
      yearOfCompletion: userInfo.yearOfCompletion,
      hospitalName: userInfo.hospitalName,
      to: userInfo.to,
      from: userInfo.from,
      specialization: userInfo.specialization,
      service: userInfo.service,
    },
    validationSchema,
    onSubmit: updateData,
  });

  return (
    <div className="p-5 ml-2 mr-2 border-2 border-gray-200 rounded shadow-md">
      <h1 className="mb-3 text-xl">Basic Information</h1>
      <div className="flex items-center justify-start">
        <img
          src={`http://localhost:3000/upload/${userInfo.photo}`}
          alt=""
          className="w-[100px] h-[100px] rounded border-2 border-gray-200"
        />
        <label className="inline-flex items-center px-4 py-2 ml-2 text-white bg-blue-400 rounded-full cursor-pointer">
          <FontAwesomeIcon icon={faUpload} className="mr-2" />
          Upload Photo
          <input
            type="file"
            name="image"
            className="hidden"
            onChange={(e) => {
              setImage(e.target.files[0]);

              updateProfileImage(e.target.files[0]);
            }}
          />
        </label>
      </div>
      <form onSubmit={formData.handleSubmit}>
        <div className="grid grid-cols-1 p-5 border-[1px] m-5">
          <div className="grid grid-cols-2 gap-8 pt-5 pb-5">
            <div className="w-full">
              <label className="block mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.values.email}
                disabled
                className="block w-full p-2 pt-3 pb-3 bg-gray-200 border-2 border-gray-500 rounded outline-none"
              />
              {formData.errors.email && formData.touched.email ? (
                <div className="p-2 text-xs text-red-500">
                  {formData.errors.email}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              <label className="block mb-2">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.values.name}
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
                className="block w-full p-2 pt-3 pb-3 border-2 border-gray-500 rounded outline-none "
              />
              {formData.errors.name && formData.touched.name ? (
                <div className="p-2 text-xs text-red-500">
                  {formData.errors.name}
                </div>
              ) : null}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 pt-5 pb-5">
            <div className="w-full">
              <label className="block mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.values.mobile}
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
                className="block w-full p-2 pt-3 pb-3 border-2 border-gray-500 rounded outline-none "
              />
              {formData.errors.mobile && formData.touched.mobile ? (
                <div className="p-2 text-xs text-red-500">
                  {formData.errors.mobile}
                </div>
              ) : null}
            </div>
            <div className="w-full">
              <label className="block mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                className="block w-full p-2 pt-3 pb-3 bg-white border-2 border-gray-500 rounded outline-none"
                name="gender"
                id="gender"
                value={formData.values.gender}
                onChange={formData.handleChange}
                onBlur={formData.handleBlur}
              >
                <option value="" selected disabled>
                  {" "}
                  select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {formData.errors.gender && formData.touched.mobile ? (
                <div className="p-2 text-xs text-red-500">
                  {formData.errors.gender}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 p-5 border-[1px] m-5">
          <div className="w-full">
            <h1 className="block mb-2">About Me</h1>
            <label className="text-sm">Biography</label>
            <textarea
              name="aboutMe"
              value={formData.values.aboutMe}
              onChange={formData.handleChange}
              onBlur={formData.handleBlur}
              cols="30"
              rows="5"
              className="p-2 pt-3 pb-3 rounded block w-full outline-none border-[1px] border-gray-500"
            ></textarea>
            {formData.errors.aboutMe && formData.touched.aboutMe ? (
              <div className="p-2 text-xs text-red-500">
                {formData.errors.aboutMe}
              </div>
            ) : null}
          </div>
        </div>

        <div className="grid grid-cols-1 p-5 border-[1px] m-5">
          <div className="w-full">
            <h1 className="block mb-2">Education</h1>
            <div>
              <div>
                <div className="grid grid-cols-4 gap-5 mb-5">
                  <div className="w-full">
                    <label className="text-sm">Degree</label>
                    <input
                      type="text"
                      name="degree"
                      value={formData.values.degree}
                      onChange={formData.handleChange}
                      onBlur={formData.handleBlur}
                      className="block w-full p-2 pt-3 pb-3 mt-3 border-2 border-gray-500 rounded outline-none"
                    ></input>
                    {formData.errors.degree && formData.touched.degree ? (
                      <div className="p-2 text-xs text-red-500">
                        {formData.errors.degree}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <label className="text-sm">University</label>
                    <input
                      type="text"
                      name="university"
                      value={formData.values.university}
                      onChange={formData.handleChange}
                      onBlur={formData.handleBlur}
                      className="block w-full p-2 pt-3 pb-3 mt-3 border-2 border-gray-500 rounded outline-none"
                    ></input>{" "}
                    {formData.errors.university &&
                    formData.touched.university ? (
                      <div className="p-2 text-xs text-red-500">
                        {formData.errors.university}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <label className="text-sm">Year Of Beginning</label>
                    <input
                      type="date"
                      name="dateOfBeginning"
                      value={formData.values.dateOfBeginning}
                      onChange={formData.handleChange}
                      onBlur={formData.handleBlur}
                      className="block w-full p-2 pt-3 pb-3 mt-3 border-2 border-gray-500 rounded outline-none"
                    ></input>
                    {formData.errors.dateOfBeginning &&
                    formData.touched.dateOfBeginning ? (
                      <div className="p-2 text-xs text-red-500">
                        {formData.errors.dateOfBeginning}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <label className="text-sm">Year Of Completion</label>
                    <input
                      type="date"
                      name="yearOfCompletion"
                      value={formData.values.yearOfCompletion}
                      onChange={formData.handleChange}
                      onBlur={formData.handleBlur}
                      className="block w-full p-2 pt-3 pb-3 mt-3 border-2 border-gray-500 rounded outline-none"
                    ></input>
                    {formData.errors.yearOfCompletion &&
                    formData.touched.yearOfCompletion ? (
                      <div className="p-2 text-xs text-red-500">
                        {formData.errors.yearOfCompletion}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 p-5 border-[1px] m-5">
          <div className="w-full">
            <h1 className="block mb-2">Experience</h1>
            <div>
              <div>
                <div className="grid grid-cols-3 gap-5 mb-5">
                  {" "}
                  <div className="w-full">
                    <label className="text-sm">Hospital Name</label>
                    <input
                      type="text"
                      name="hospitalName"
                      onChange={formData.handleChange}
                      onBlur={formData.handleBlur}
                      value={formData.values.hospitalName}
                      className="block w-full p-2 pt-3 pb-3 mt-3 border-2 border-gray-500 rounded outline-none"
                    ></input>
                    {formData.errors.hospitalName &&
                    formData.touched.hospitalName ? (
                      <div className="p-2 text-xs text-red-500">
                        {formData.errors.hospitalName}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <label className="text-sm">From</label>
                    <input
                      type="date"
                      name="from"
                      value={formData.values.from}
                      onChange={formData.handleChange}
                      onBlur={formData.handleBlur}
                      className="block w-full p-2 pt-3 pb-3 mt-3 border-2 border-gray-500 rounded outline-none"
                    ></input>
                    {formData.errors.from && formData.touched.from ? (
                      <div className="p-2 text-xs text-red-500">
                        {formData.errors.from}
                      </div>
                    ) : null}
                  </div>
                  <div className="w-full">
                    <label className="text-sm">To</label>
                    <input
                      type="date"
                      name="to"
                      value={formData.values.to}
                      onChange={formData.handleChange}
                      onBlur={formData.handleBlur}
                      className="block w-full p-2 pt-3 pb-3 mt-3 border-2 border-gray-500 rounded outline-none"
                    ></input>{" "}
                    {formData.errors.to && formData.touched.to ? (
                      <div className="p-2 text-xs text-red-500">
                        {formData.errors.to}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 p-5 border-[1px] m-5">
          <div className="w-full">
            <h1 className="block mb-2">Services</h1>
            <div>
              <div>
                <div className="grid grid-cols-1 gap-2 mb-5">
                  <div className="w-full">
                    <label className="text-sm">Service</label>
                    <input
                      type="text"
                      name="service"
                      value={formData.values.service}
                      onChange={formData.handleChange}
                      onBlur={formData.handleBlur}
                      className="block w-full p-2 pt-3 pb-3 mt-3 border-2 border-gray-500 rounded outline-none"
                    ></input>{" "}
                    {formData.errors.service && formData.touched.service ? (
                      <div className="p-2 text-xs text-red-500">
                        {formData.errors.service}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 p-5 border-[1px] m-5">
          <div className="w-full">
            <h1 className="block mb-2">Specialization</h1>
            <div>
              <div>
                <div className="grid grid-cols-1 gap-2 mb-5">
                  <div className="w-full">
                    <label className="text-sm">Specialization</label>
                    <input
                      type="text"
                      name="specialization"
                      onChange={formData.handleChange}
                      value={formData.values.specialization}
                      onBlur={formData.handleBlur}
                      className="block w-full p-2 pt-3 pb-3 mt-3 border-2 border-gray-500 rounded outline-none"
                    ></input>
                    {formData.errors.specialization &&
                    formData.touched.specialization ? (
                      <div className="p-2 text-xs text-red-500">
                        {formData.errors.specialization}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 p-5 border-[1px] m-5">
          <div>
            <button
              className="p-2 pt-3 pb-3 text-white bg-green-500 rounded outline-none"
              type="submit"
              disabled={!formData.isValid}
            >
              Save changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

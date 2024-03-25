import {
  Card,
  Input,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react";
import "./formsignin.css";
import { useFormik } from "formik";
import * as Yup from "yup";

import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../ReduxTK/api/auth-api.js";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../ReduxTK/Slices/tokenSlice.js";
import { useGetInfoAboutUserQuery } from "../../ReduxTK/api/user-api.js";
import { setuserInfo } from "../../ReduxTK/Slices/userInfoSlice.js";
import { useEffect } from "react";
import { useGetAllDoctorsQuery } from "../../ReduxTK/api/appointement-api.js";
import { SetAllDoctors } from "../../ReduxTK/Slices/AllDoctorsSlice.js";
export default function FormSignin() {
  const navigate = useNavigate();
  const [login, { isLoading, isError }] = useLoginMutation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const id = sessionStorage.getItem("id_user");
  console.log(token);
  const { data: userInfo, isSuccess: isSuccessUser } = useGetInfoAboutUserQuery(
    id,
    {
      skip: !token,
    }
  );
  const {
    data: allDoctors,
    isLoading: isLoadingDoctors,
    isSuccess: isSuccessDoctors,
  } = useGetAllDoctorsQuery();
  useEffect(() => {
    if (token && isSuccessUser) {
      dispatch(setuserInfo(userInfo.data.data));
      if (!isLoadingDoctors && isSuccessDoctors) {
        console.log(allDoctors.data.data);
        dispatch(SetAllDoctors(allDoctors.data.data));
        navigate("/");
      }
    }
  }, [
    token,
    isSuccessUser,
    dispatch,
    navigate,
    userInfo,
    isLoadingDoctors,
    isSuccessDoctors,
    allDoctors,
  ]);
  const handleLogin = async (values) => {
    try {
      const result = await login(values).unwrap();

      if (!isLoading && !isError) {
        dispatch(setToken(result.token));
      }
    } catch (error) {
      console.error("error", error.data.message);
      alert(error.data.message);
    }
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
      email: "",
      password: "",
    },
    onSubmit: handleLogin,
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
  });

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you!
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
      >
        <Typography variant="h6" color="blue-gray" className="">
          Your Email
        </Typography>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id="email"
          name="email"
          size="lg"
          placeholder="name@mail.com"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        {errors.email && touched.email && (
          <Alert
            icon={<ExclamationCircleIcon />}
            className="rounded-lg mt-2 border-l-4 border-[#ff0505] p-1 bg-[#8d3333] font-medium text-[#ffffff]"
          >
            {errors.email}
          </Alert>
        )}

        <Typography variant="h6" color="blue-gray" className="">
          Password
        </Typography>
        <Input
          onBlur={handleBlur}
          onChange={handleChange}
          id="password"
          name="password"
          type="password"
          size="lg"
          placeholder="********"
          className=" !border-t-blue-gray-200  focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
        {errors.password && touched.password && (
          <Alert
            icon={<ExclamationCircleIcon />}
            className="rounded-lg mt-2 border-l-4 border-[#ff0505] p-1 bg-[#8d3333] font-medium text-[#ffffff]"
          >
            {errors.password}
          </Alert>
        )}

        <Typography
          variant="small"
          color="gray"
          className="flex items-center mt-3 font-normal text-cyan-900 hover:text-cyan-400"
        >
          <Link to="/auth/login"> Forget Password ? </Link>
        </Typography>

        <Button
          type="submit"
          disabled={!isValid || Object.keys(errors).length > 0}
          className="mt-6 signin-btn"
          fullWidth
        >
          sign In
        </Button>
        <Typography color="gray" className="mt-4 font-normal text-center">
          Not have an account?{" "}
          <Link to={"/auth/register"} className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
  );
}

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
  Alert,
} from "@material-tailwind/react";
import "./formsignup.css";
import { useFormik } from "formik";
import schema from "./ValidationYup.jsx";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpNewUserMutation } from "../../ReduxTK/api/auth-api.js";
export default function FormSignup() {
  const navigate = useNavigate();
  const [signUpNewUser, { isLoading, data, isError }] =
    useSignUpNewUserMutation();
  const createUser = (values) => {
    signUpNewUser({
      name: values.name,
      email: values.email,
      password: values.password,
      passwordConfirm: values.confirmPassword,
      mobile: values.mobile,
      gender: values.gender,
    });

    if (!isLoading && !isError) {
      console.log("data", data);
      navigate("/auth/login");
    }
  };
  const {
    handleChange,
    handleSubmit,
    isValid,
    handleBlur,
    touched,
    values,
    setFieldValue,
    errors,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobile: "",
      gender: "",
      accept: false,
    },
    onSubmit: createUser,
    validationSchema: schema,
  });
  const handleSelectChange = (value) => {
    setFieldValue("gender", value);
  };

  return (
    <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
      >
        <div className="flex flex-col gap-3 mb-1">
          <Typography variant="h6" color="blue-gray" className="">
            Your Name
          </Typography>
          <Input
            type="text"
            onBlur={handleBlur}
            onChange={handleChange}
            id="name"
            name="name"
            size="lg"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200  focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          {errors.name && touched.name && (
            <Alert
              icon={<ExclamationCircleIcon />}
              className="rounded-lg border-l-4 border-[#ff0505] p-1 bg-[#8d3333] font-medium text-[#ffffff]"
            >
              {errors.name}
            </Alert>
          )}
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
              className="rounded-lg border-l-4 border-[#ff0505] p-1 bg-[#8d3333] font-medium text-[#ffffff]"
            >
              {errors.email}
            </Alert>
          )}
          <div className="relative flex my-6">
            <div className="relative">
              <Typography
                variant="h6"
                color="blue-gray"
                className="absolute -top-7"
              >
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
                className=" !border-t-blue-gray-200 !w-11/12 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.password && touched.password && (
                <Alert
                  icon={<ExclamationCircleIcon />}
                  className="rounded-lg mt-1 border-l-4 !w-11/12 border-[#ff0505] p-1 bg-[#8d3333] text-sm text-[#ffffff]"
                >
                  {errors.password}
                </Alert>
              )}
            </div>
            <div className="relative">
              <Typography
                variant="h6"
                color="blue-gray"
                className="absolute -top-7 "
              >
                Confirm Password
              </Typography>
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200  !w-11/12 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Alert
                  icon={<ExclamationCircleIcon />}
                  className="rounded-lg border-l-4 mt-1 !w-11/12 border-[#ff0505] p-1 bg-[#8d3333] text-sm text-[#ffffff]"
                >
                  {errors.confirmPassword}
                </Alert>
              )}
            </div>
          </div>
          <div className="relative flex my-3">
            <Typography
              variant="h6"
              color="blue-gray"
              className="absolute -top-7"
            >
              Gender
            </Typography>
            <Select
              id="gender"
              name="gender"
              onBlur={handleBlur}
              onChange={(e) => {
                handleSelectChange(e);
              }}
              value={values.gender}
              style={{ width: "95%" }}
              placeholder="Select Gender"
              className=" !border-t-blue-gray-200  focus:!border-t-gray-900"
            >
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>

            <div className="relative">
              <Typography
                variant="h6"
                color="blue-gray"
                className="absolute -top-7 "
              >
                Mobile
              </Typography>
              <Input
                onBlur={handleBlur}
                onChange={handleChange}
                id="mobile"
                name="mobile"
                type="tel"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 !w-11/12 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {errors.mobile && touched.mobile && (
                <Alert
                  icon={<ExclamationCircleIcon />}
                  className="rounded-lg border-l-4 !w-11/12 mt-2 border-[#ff0505] p-1 bg-[#8d3333] font-medium text-[#ffffff]"
                >
                  {errors.mobile}
                </Alert>
              )}
            </div>
          </div>
        </div>
        <Checkbox
          onBlur={handleBlur}
          onChange={handleChange}
          id="accept"
          name="accept"
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button
          type="submit"
          disabled={!isValid || Object.keys(errors).length > 0}
          className="mt-6 signup-btn"
          fullWidth
        >
          sign up
        </Button>

        <Typography color="gray" className="mt-4 font-normal text-center">
          Already have an account?{" "}
          <Link to={"/auth/login"} className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </form>
    </Card>
  );
}

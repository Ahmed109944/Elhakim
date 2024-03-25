import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Name must be at least 5 characters")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  mobile: Yup.string()
    .matches(/^01[0-2,5][0-9]{8}$/, "Mobile must be 11 digits only")
    .required("Mobile is required"),
  gender: Yup.string()
    .required("Selecting a gender is required.")
    .oneOf(["Male", "Female"], "Invalid gender selection"),
  accept: Yup.bool().oneOf([true], "Accept is required"),
});

export default schema;

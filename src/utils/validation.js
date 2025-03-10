import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format"
    ),
  password: yup
    .string()
    .min(6, "Password should be at list 6 signs long ")
    .required("Password is required"),
});

export const registerValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email()
    .required("Email is required")
    .matches(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      "Please enter a valid email"
    ),
  password: yup
    .string()
    .min(6, "Password should be at list 6 characters")
    .required("Password is required"),
});

export const bookValidationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email()
    .matches(
      /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      "Please enter a valid email"
    )
    .required("Email is required"),
  phone: yup.string().required("Phone is required"),
  comment: yup.string(),
  meetingTime: yup.string().required("Meeting time is required"),
});

import * as yup from "yup";

export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const nameRegex = /^[A-Za-z]+$/i;

export const schemaContact = yup
  .object({
    fullName: yup
      .string()
      .required("Name is required")
      .min(2, "Name is too short")
      .max(30, "Name is too long")
      .matches(nameRegex, "Only letters allowed"),
    email: yup
      .string()
      .matches(emailRegex, "Invalid email")
      .required("Email is required"),
    message: yup.string(),
  })
  .required();

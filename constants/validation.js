import * as yup from "yup";

export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

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

export const schemaCareer = yup
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
    position: yup
      .string()
      .max(16, "Position is too long")
      .required("Position is required"),
    phone: yup
      .string()
      .matches(phoneRegex, "Invalid phone")
      .required("Phone is required"),
    message: yup.string(),
    policy: yup.bool().required("Accept policy to send message"),
  })
  .required();

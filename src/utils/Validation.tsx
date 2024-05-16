import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("password is Required"),
});

export const forgetSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

export const resetPassword = Yup.object().shape({
    newPassword: Yup.string().min(8).required("New Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"),], "Passwords must match")
      .required("Please confirm your password"),
  });

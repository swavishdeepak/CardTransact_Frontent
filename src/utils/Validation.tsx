import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email Format").required("Email is Required"),
  password: Yup.string().required("Password is Required"),
});

export const forgetSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address")
    .required("Email is Required"),
});

export const resetPassword = Yup.object().shape({
    newPassword: Yup.string().min(8).required("New Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"),], "Passwords must match")
      .required("Please confirm your password"),
  });

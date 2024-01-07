import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import "./Step1.css";

const Step1 = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      login: Yup.string()
        .required("Required")
        // .lowercase("Must be in lowercase")
        .test(
          "is-uppercase",
          "Uppercase characters are not allowed",
          (value) => !/[A-Z]/.test(value)
        ),
      // .transform((value) => value.toLowerCase()),
      password: Yup.string()
        .required("Required")
        .min(5, "Password must be at least 5 characters")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)/,
          "Must contain at least one letter and one number"
        ),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
    }),
    onSubmit: (values) => {
      onNext(values);
    },
  });

  //   console.log(formik.values);

  return (
    <div className="step-container">
      <label className="label">Login:</label>
      <input
        type="text"
        name="login"
        value={formik.values.login}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="input-field"
      />
      {formik.touched.login && formik.errors.login && (
        <div className="error-message">{formik.errors.login}</div>
      )}

      <label className="label">Password:</label>
      <input
        type="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="input-field"
      />
      {formik.touched.password && formik.errors.password && (
        <div className="error-message">{formik.errors.password}</div>
      )}

      <label className="label">Confirm Password:</label>
      <input
        type="text"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="input-field"
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <div className="error-message">{formik.errors.confirmPassword}</div>
      )}
      <br />

      <button
        type="button"
        onClick={formik.handleSubmit}
        disabled={!formik.isValid}
        className="submit-button"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;

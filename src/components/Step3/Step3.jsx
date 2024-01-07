import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Step3 = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      middleName: "",
      birthdate: "",
      email: "",
      gender: "",
      isOlderThan18: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      middleName: Yup.string(),
      birthdate: Yup.string(),
      email: Yup.string().email("Invalid email address").required("Required"),
      gender: Yup.string().required("Required"),
      isOlderThan18: Yup.boolean()
        .oneOf([true], "Must be older than 18")
        .required("Required"),
    }),
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "20px",
      }}
    >
      <div
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ccc",
          marginRight: "10px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ display: "block", marginBottom: "5px" }}
            htmlFor="firstName"
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div style={{ color: "red" }}>{formik.errors.firstName}</div>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ display: "block", marginBottom: "5px" }}
            htmlFor="lastName"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div style={{ color: "red" }}>{formik.errors.lastName}</div>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ display: "block", marginBottom: "5px" }}
            htmlFor="middleName"
          >
            Middle Name:
          </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={formik.values.middleName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ display: "block", marginBottom: "5px" }}
            htmlFor="birthdate"
          >
            Birthdate:
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formik.values.birthdate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Optional"
          />
        </div>
      </div>

      <div style={{ flex: 1, padding: "10px", border: "1px solid #ccc" }}>
        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ display: "block", marginBottom: "5px" }}
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ display: "block", marginBottom: "5px" }}
            htmlFor="gender"
          >
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {formik.touched.gender && formik.errors.gender && (
            <div style={{ color: "red" }}>{formik.errors.gender}</div>
          )}
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label
            style={{ display: "block", marginBottom: "5px" }}
            htmlFor="isOlderThan18"
          >
            I am older than 18
          </label>
          <input
            type="checkbox"
            id="isOlderThan18"
            name="isOlderThan18"
            checked={formik.values.isOlderThan18}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.isOlderThan18 && formik.errors.isOlderThan18 && (
            <div style={{ color: "red" }}>{formik.errors.isOlderThan18}</div>
          )}
        </div>

        <button
          type="submit"
          onClick={formik.handleSubmit}
          style={{
            backgroundColor: formik.isValid ? "#4caf50" : "#d3d3d3",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: formik.isValid ? "pointer" : "not-allowed",
          }}
          disabled={!formik.isValid}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;

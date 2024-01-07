import React from "react";
import Cleave from "cleave.js/react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Step4 = ({ onNext }) => {
  const formik = useFormik({
    initialValues: {
      cardNumber: "",
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .matches(/^\d+$/, "Only numbers are allowed")
        .min(16, "Must be 16 digits")
        .required("Required"),
    }),
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h2>Step 4: Enter Credit Card Number</h2>

      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="cardNumber">Credit Card Number:</label>
          <Cleave
            id="cardNumber"
            name="cardNumber"
            value={formik.values.cardNumber}
            onChange={(e) =>
              formik.setFieldValue("cardNumber", e.target.rawValue)
            }
            options={{ creditCard: true }}
            onBlur={formik.handleBlur}
            className="form-control" // Add your desired styling class
            style={{ width: "70%", padding: "10px", boxSizing: "border-box" }}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber && (
            <div style={{ color: "red", marginTop: "5px" }}>
              {formik.errors.cardNumber}
            </div>
          )}
        </div>

        <button
          type="submit"
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
      </form>
    </div>
  );
};

export default Step4;

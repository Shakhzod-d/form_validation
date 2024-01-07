import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Step5 = ({ userData, onNext }) => {
  const formik = useFormik({
    initialValues: {
      consentToProcessing: false,
      cookieAgreement: false,
    },
    validationSchema: Yup.object({
      consentToProcessing: Yup.boolean().oneOf([true], "Consent is required"),
      cookieAgreement: Yup.boolean().oneOf(
        [true],
        "Cookie agreement is required"
      ),
    }),
    onSubmit: (values) => {
      onNext(values);
    },
  });

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <h2>Step 5: Consent to Personal Data Processing</h2>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="login">Login:</label>
        <input type="text" id="login" value={userData.login} disabled />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={userData.email} disabled />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="checkbox"
            id="consentToProcessing"
            name="consentToProcessing"
            checked={formik.values.consentToProcessing}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          Consent to Personal Data Processing
        </label>
        {formik.touched.consentToProcessing &&
          formik.errors.consentToProcessing && (
            <div style={{ color: "red" }}>
              {formik.errors.consentToProcessing}
            </div>
          )}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          <input
            type="checkbox"
            id="cookieAgreement"
            name="cookieAgreement"
            checked={formik.values.cookieAgreement}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          Site uses Cookie Agreement
        </label>
        {formik.touched.cookieAgreement && formik.errors.cookieAgreement && (
          <div style={{ color: "red" }}>{formik.errors.cookieAgreement}</div>
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
        Submit
      </button>
    </div>
  );
};

export default Step5;

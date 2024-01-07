import React from "react";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const Wizard = () => {
  const [step, setStep] = React.useState(1);
  const [userData, setUserData] = React.useState({});

  const handleNext = (data) => {
    setUserData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
    // console.log(`data`, data);
  };

  switch (step) {
    case 1:
      return <Step1 onNext={handleNext} />;

    case 2:
      return <Step2 onNext={handleNext} />;

    case 3:
      return <Step3 onNext={handleNext} />;

    case 4:
      return <Step4 onNext={handleNext} />;

    case 5:
      return <Step5 userData={userData} onNext={handleNext} />;

    default:
      return (
        <div>
          <h2>Final Step</h2>
          {/* Display all fields entered on previous steps */}
          {/* <pre>{JSON.stringify(userData, null, 2)}</pre> */}
          <pre>
            Subscription Plan: <b>{userData?.subscriptionType}</b>
            {"\n"}
            Login: <b>{userData.login}</b>
            {"\n"}
            Password: <b>{userData.password}</b>
            {"\n"}
            Confirm Password: <b>{userData.confirmPassword}</b>
            {"\n"}
            First Name: <b>{userData.firstName}</b>
            {"\n"}
            Last Name: <b>{userData.lastName}</b>
            {"\n"}
            Middle Name: <b>{userData.middleName}</b>
            {"\n"}
            Birthdate: <b>{userData.birthdate}</b>
            {"\n"}
            Email: <b>{userData.email}</b>
            {"\n"}
            Gender: <b>{userData.gender}</b>
            {"\n"}
            Older than 18: <b>{userData.isOlderThan18 ? "Yes" : "No"}</b>
            {"\n"}
            Card Number: <b>{userData.cardNumber}</b>
            {"\n"}
            Consent to Processing:{" "}
            <b>{userData.consentToProcessing ? "Yes" : "No"}</b>
            {"\n"}
            Cookie Agreement: <b>{userData.cookieAgreement ? "Yes" : "No"}</b>
          </pre>
        </div>
      );
  }
};

export default Wizard;

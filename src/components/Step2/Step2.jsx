import React, { useState } from "react";
import "./Step2.css";

const Step2 = ({ onNext }) => {
  const [subscriptionType, setSubscriptionType] = useState("");

  const handleSubscriptionChange = (selectedType) => {
    setSubscriptionType(selectedType);
  };

  const handleNext = () => {
    if (!subscriptionType) {
      alert("Please choose a subscription type.");
      return;
    }

    onNext({ subscriptionType });
  };

  return (
    <div className="step-container">
      <h2>Step 2: Choose Subscription Type</h2>

      <div className="radio-container">
        <input
          type="radio"
          id="freeOption"
          name="subscriptionType"
          value="Free"
          checked={subscriptionType === "Free"}
          onChange={() => handleSubscriptionChange("Free")}
        />
        <label htmlFor="freeOption" className="radio-label">
          Free Option
        </label>
      </div>

      <div className="radio-container">
        <input
          type="radio"
          id="monthlySubscription"
          name="subscriptionType"
          value="Monthly"
          checked={subscriptionType === "Monthly"}
          onChange={() => handleSubscriptionChange("Monthly")}
        />
        <label htmlFor="monthlySubscription" className="radio-label">
          Monthly Subscription
        </label>
      </div>

      <div className="radio-container">
        <input
          type="radio"
          id="yearlySubscription"
          name="subscriptionType"
          value="Yearly"
          checked={subscriptionType === "Yearly"}
          onChange={() => handleSubscriptionChange("Yearly")}
        />
        <label htmlFor="yearlySubscription" className="radio-label">
          Yearly Subscription
        </label>
      </div>

      <button
        type="button"
        onClick={handleNext}
        disabled={!subscriptionType}
        className="submit-button"
      >
        Next
      </button>
    </div>
  );
};

export default Step2;

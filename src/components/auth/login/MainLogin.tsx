"use client";
import React from "react";
import LoginStep1 from "./LoginStep1";
import LoginStep2 from "./LoginStep2";

const MainLogin = () => {
  const [step, setStep] = React.useState(1);
  const [email, setEmail] = React.useState("");
  return (
    <div>
      {step === 1 && (
        <LoginStep1 email={email} setEmail={setEmail} setStep={setStep} />
      )}
      {step === 2 && <LoginStep2 setStep={setStep} />}
    </div>
  );
};

export default MainLogin;

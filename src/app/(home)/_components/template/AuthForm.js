"use client";
import { useState } from "react";
import AuthenticationForm from "../modules/AuthenticationForm";
import VerifyAuthentication from "../modules/VerifyAuthentication";

function AuthForm(props) {
  const { showAuthentication, setShowAuthentication } = props;
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  return (
    <div>
      {step == 1 && (
        <AuthenticationForm
          showAuthentication={showAuthentication}
          setShowAuthentication={setShowAuthentication}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          step={step}
          setStep={setStep}
          code={code}
          setCode={setCode}
        />
      )}
      {step == 2 && (
        <VerifyAuthentication
          showAuthentication={showAuthentication}
          setShowAuthentication={setShowAuthentication}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          step={step}
          setStep={setStep}
          code={code}
          setCode={setCode}
        />
      )}
    </div>
  );
}

export default AuthForm;

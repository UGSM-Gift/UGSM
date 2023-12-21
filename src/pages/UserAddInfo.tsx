import React, { useState } from "react";
import styled from "styled-components";
import PreviousButton from "../components/userAuth/PreviousButton";
import Nickname from "./adduserinfo/Nickname";
import Gender from "./adduserinfo/Gender";
import PhoneNumber from "./adduserinfo/PhoneNumber";
import PhoneNumberAuth from "./adduserinfo/PhoneNumberAuth";
import NextButton from "../components/userAuth/NextButton";

const Wrapper = styled.div``;

const ContentBox = styled.div`
  padding: 20px 20px 0 20px;
`;

const UserAddInfo = () => {
  const [step, setStep] = useState(1);

  // 최소, 최대 값
  const updateStep = (newStep: number) => {
    setStep(Math.max(1, Math.min(newStep, 4)));
  };

  const handleNextStepChange = () => {
    updateStep(step + 1);
  };

  const handlePreviousStepChange = () => {
    updateStep(step - 1);
  };

  return (
    <>
      <Wrapper>
        <ContentBox>
          <PreviousButton onClick={handlePreviousStepChange} step={step} />
        </ContentBox>
        {step === 1 ? (
          <Nickname />
        ) : step === 2 ? (
          <Gender />
        ) : step === 3 ? (
          <PhoneNumber />
        ) : (
          <PhoneNumberAuth />
        )}
      </Wrapper>
      <NextButton onClick={handleNextStepChange} step={step} />
    </>
  );
};

export default UserAddInfo;

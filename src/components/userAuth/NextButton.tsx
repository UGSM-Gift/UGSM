import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  padding: 20px;
  background-color: #c1c7ca;
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
`;

interface NextButtonProps {
  step: number;
  setStep: (step: number) => void;
  text: string;
}

const NextButton: React.FC<NextButtonProps> = ({ setStep, step, text }) => {
  const handleStepChange = () => {
    setStep(step + 1);
  };
  return <Button onClick={handleStepChange}>{text}</Button>;
};

export default NextButton;

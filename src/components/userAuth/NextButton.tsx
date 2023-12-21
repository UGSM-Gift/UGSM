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
  // disabled: boolean;
  onClick: () => void;
  step: number;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, step }) => {
  const MAX_STEP = 4;
  return <Button onClick={onClick}>{step === MAX_STEP ? "완료" : "다음"}</Button>;
};

export default NextButton;

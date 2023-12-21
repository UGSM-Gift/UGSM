import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import styled from "styled-components";

const Button = styled.button`
  margin-bottom: 30px;
  font-size: 2rem;
  background-color: #fff;
`;

interface PrevioustButtonProps {
  onClick: () => void;
  step: number;
}

const PreviousButton: React.FC<PrevioustButtonProps> = ({ onClick, step }) => {
  return <Button onClick={onClick}>{step > 1 ? <IoArrowBackOutline /> : null} </Button>;
};

export default PreviousButton;

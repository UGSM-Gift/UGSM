import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import styled from "styled-components";

const Button = styled.button`
  margin-bottom: 30px;
  font-size: 2rem;
  background-color: #fff;
`;

const PreviousButton = () => {
  return (
    <Button>
      <IoArrowBackOutline />
    </Button>
  );
};

export default PreviousButton;

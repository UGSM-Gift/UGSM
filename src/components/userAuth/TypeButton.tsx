import React from "react";
import styled from "styled-components";

interface TypeButtonProps {
  type: string;
  selectedType: string;
  setType: (type: string) => void;
}

const Button = styled.button<{ selected: boolean }>`
  flex-grow: 1;
  border-radius: 15px;
  height: 60px;
  background-color: #fff;
  border: 1px solid ${({ selected }) => (selected ? "#0F62FE" : "#A2A9AD")};
  color: ${({ selected }) => (selected ? "#0F62FE" : "#A2A9AD")};
`;

function TypeButton({ type, selectedType, setType }: TypeButtonProps) {
  const handleClick = () => {
    setType(type);
  };
  return (
    <Button type="button" selected={selectedType === type} onClick={handleClick}>
      {type}
    </Button>
  );
}

export default TypeButton;

import React from "react";
import styled from "styled-components";

interface TypeButtonProps {
  type: string;
  setType: (type: string) => void;
  selectedType: string;
}

const Button = styled.button<{ $selected: boolean }>`
  flex-grow: 1;
  border-radius: 15px;
  height: 60px;
  background-color: #fff;
  border: 1px solid ${({ $selected }) => ($selected ? "#0F62FE" : "#A2A9AD")};
  color: ${({ $selected }) => ($selected ? "#0F62FE" : "#A2A9AD")};
`;

function TypeButton({ type, setType, selectedType }: TypeButtonProps) {
  return (
    <Button $selected={type === selectedType} onClick={() => setType(type)}>
      {type}
    </Button>
  );
}

export default TypeButton;

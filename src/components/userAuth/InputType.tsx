import React, { ChangeEventHandler } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid #a2a9ad;
  border-radius: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
`;

const Notice = styled.div`
  font-size: 1.3rem;
  color: #878d96;
`;

interface TextInputProps {
  placeholder?: string;
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  text?: string;
  label?: string;
}
const InputType: React.FC<TextInputProps> = ({ placeholder, type, value, onChange, text, label }) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input type={type} value={value} onChange={onChange} placeholder={placeholder} />
      <Notice>{text}</Notice>
    </Wrapper>
  );
};

export default InputType;

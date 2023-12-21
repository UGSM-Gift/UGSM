import InputType from "../../components/userAuth/InputType";
import Question from "../../components/userAuth/Question";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 20px;
`;
type PhoneNumberProp = {
  phone: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const PhoneNumber: React.FC<PhoneNumberProp> = ({ phone, onChange }) => {
  return (
    <Wrapper>
      <Question firstLine="사용하고 있는" secondLine="전화번호를 알려주세요" />
      <InputType type="text" value={phone} placeholder="전화번호를 입력해주세요" onChange={onChange} />
    </Wrapper>
  );
};

export default PhoneNumber;

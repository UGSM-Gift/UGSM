import InputType from "../../components/userAuth/InputType";
import Question from "../../components/userAuth/Question";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 20px;
`;

type PhoneNumberProp = {
  phone: string;
  phoneAuth: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const PhoneNumberAuth: React.FC<PhoneNumberProp> = ({ phone, phoneAuth, onChange }) => {
  return (
    <Wrapper>
      <Question firstLine="방금 보내드린" secondLine="인증번호를 입력해주세요" />
      <InputType
        type="text"
        value={phoneAuth}
        placeholder={`${phone}로 보내드렸어요`}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default PhoneNumberAuth;

import InputType from "../../components/userAuth/InputType";
import Question from "../../components/userAuth/Question";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 20px;
`;

const PhoneNumberAuth = () => {
  const [phone, setPhone] = useState("");

  // 휴대폰 인증번호
  const [phoneAuth, setPhoneAuth] = useState("");
  // 휴대폰 인증번호 입력
  const handlePhoneAuthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneAuth(event.target.value);
  };
  return (
    <Wrapper>
      <Question firstLine="방금 보내드린" secondLine="인증번호를 입력해주세요" />
      <InputType
        type="text"
        value={phoneAuth}
        placeholder={`${phone}로 보내드렸어요`}
        onChange={handlePhoneAuthChange}
      />
    </Wrapper>
  );
};

export default PhoneNumberAuth;

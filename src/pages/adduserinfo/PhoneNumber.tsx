import InputType from "../../components/userAuth/InputType";
import Question from "../../components/userAuth/Question";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 20px;
`;

const PhoneNumber = () => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };



  return (
    <Wrapper>
      <Question firstLine="사용하고 있는" secondLine="전화번호를 알려주세요" />
      <InputType
        type="text"
        value={phone}
        placeholder="전화번호를 입력해주세요"
        onChange={handlePhoneChange}
      />
      
    </Wrapper>
  );
};

export default PhoneNumber;

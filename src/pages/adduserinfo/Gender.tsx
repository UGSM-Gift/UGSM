import InputType from "../../components/userAuth/InputType";
import TypeButton from "../../components/userAuth/TypeButton";
import React, { useState } from "react";
import styled from "styled-components";
import Question from "../../components/userAuth/Question";

const Wrapper = styled.div`
  padding: 0 20px;
`;

const TypeButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Gender = () => {
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");

  const handleBirthdayChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setBirthday(event.target.value);
  };

  return (
    <Wrapper>
      <Question firstLine="oo님의" secondLine="생일과 성별을 확인해주세요" />
      <InputType type="date" value={birthday} onChange={handleBirthdayChange} label="생일" />
      <label>성별</label>
      <TypeButtonBox>
        <TypeButton type="남자" setType={(type) => setGender(type)} selectedType={gender} />
        <TypeButton type="여자" setType={(type) => setGender(type)} selectedType={gender} />
      </TypeButtonBox>
    </Wrapper>
  );
};

export default Gender;

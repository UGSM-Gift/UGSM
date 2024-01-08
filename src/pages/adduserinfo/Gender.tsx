import InputType from "../../components/userAuth/InputType";
import TypeButton from "../../components/userAuth/TypeButton";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Question from "../../components/userAuth/Question";
import { UserData, UserDataProps } from "src/modules/@types/common";

const Wrapper = styled.div`
  padding: 0 20px;
`;

const TypeButtonBox = styled.div`

  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Gender: React.FC<UserDataProps> = ({ userData, setUserData }) => {
  const [gender, setGender] = useState<string>(userData.gender || "");
  const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, birth: event.target.value });
  };
  const handleGenderChange = (selectedGender: string) => {
    setUserData({ ...userData, gender: selectedGender });
    setGender(selectedGender);
  };

  return (
    <Wrapper>
      <Question firstLine="oo님의" secondLine="생일과 성별을 확인해주세요" />
      <InputType type="date" value={userData.birth} onChange={handleBirthdayChange} label="생일" />
      <label>성별</label>
      <TypeButtonBox>
        <TypeButton type="남자" setType={(type) => handleGenderChange(type)} selectedType={gender} />
        <TypeButton type="여자" setType={(type) => handleGenderChange(type)} selectedType={gender} />
      </TypeButtonBox>
    </Wrapper>
  );
};

export default Gender;

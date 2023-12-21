import NextButton from "../components/userAuth/NextButton";
import React, { useState } from "react";
import styled from "styled-components";
import PreviousButton from "../components/userAuth/PreviousButton";
import Question from "../components/userAuth/Question";
import InputType from "../components/userAuth/InputType";
import TypeButton from "../components/userAuth/TypeButton";

const Wrapper = styled.div``;

const ContentBox = styled.div`
  padding: 20px;
`;

const TypeButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const UserAddInfo = () => {
  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneAuth, setPhoneAuth] = useState("");
  const [step, setStep] = useState(0);
  const MAX_STEP = 4;
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  const handleBirthdayChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setBirthday(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const handlePhoneAuthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneAuth(event.target.value);
  };

  return (
    <Wrapper>
      <ContentBox>
        <PreviousButton />
        <InputType type="date" value={birthday} onChange={handleBirthdayChange} label="생일" />
        <label>성별</label>
        <TypeButtonBox>
          <TypeButton type="남자" setType={(type) => setGender(type)} selectedType={gender} />
          <TypeButton type="여자" setType={(type) => setGender(type)} selectedType={gender} />
        </TypeButtonBox>

        <Question firstLine="사용하고 있는" secondLine="전화번호를 알려주세요" />
        <InputType
          type="text"
          value={phone}
          placeholder="전화번호를 입력해주세요"
          onChange={handlePhoneChange}
        />
        <Question firstLine="방금 보내드린" secondLine="인증번호를 입력해주세요" />
        <InputType
          type="text"
          value={phoneAuth}
          placeholder={`${phone}로 보내드렸어요`}
          onChange={handlePhoneAuthChange}
        />
      </ContentBox>

      {/* 마지막 페이지 일 땐 완료 버튼 */}
      <NextButton step={step} setStep={setStep} text={step === MAX_STEP ? "완료" : "다음"} />
    </Wrapper>
  );
};

export default UserAddInfo;

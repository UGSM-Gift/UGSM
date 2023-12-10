import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

const NicknameInput = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

const BirthdayInput = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  type: "date";
`;

const GenderSelect = styled.select`
  width: 100%;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
`;

const PhoneInput = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  type: "tel";
`;

const Button = styled.button`
  width: 100%;
  background-color: #007aff;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #0062ff;
  }
`;

const UserAddInfo = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // 소셜 로그인 API 호출

    setIsLoggedIn(true);
  };

  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const handleNicknameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setNickname(event.target.value);
  };

  const handleBirthdayChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setBirthday(event.target.value);
  };

  const handleGenderChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setGender(event.target.value);
  };

  const handlePhoneChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setPhone(event.target.value);
  };

  return (
    <Wrapper>
      <Wrapper>
        <Title>
          반가워요!
          <br />
          어떻게 불러드릴까요?
        </Title>
        <input type="text" placeholder="닉네임을 입력해주세요." onChange={handleNicknameChange} />

        <Title>OO님의 생일과 성별을 확인해주세요.</Title>

        <div>
          <label>생일</label>
          <input type="date" value={birthday} onChange={handleBirthdayChange} />
        </div>

        <div>
          <label>성별</label>
          <select value={gender} onChange={handleGenderChange}>
            <option value="남">남</option>
            <option value="여">여</option>
          </select>
        </div>

        <Title>사용하고 있는 전화번호를 알려주세요.</Title>
        <input type="tel" placeholder="숫자만 입력해주세요." onChange={handlePhoneChange} />

        <button onClick={() => {}}>완료</button>
      </Wrapper>
    </Wrapper>
  );
};

export default UserAddInfo;

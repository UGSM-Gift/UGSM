import InputType from "../../components/userAuth/InputType";
import Question from "../../components/userAuth/Question";
import React from "react";
import styled from "styled-components";
import { UserDataProps } from "src/modules/@types/common";

const Wrapper = styled.div`
  padding: 0 20px;
`;

const Nickname: React.FC<UserDataProps> = ({ userData, setUserData }) => {
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({ ...prevUserData, nickname: event.target.value }));
  };

  return (
    <>
      <Wrapper>
        <Question firstLine="반가워요!" secondLine="어떻게 불러드릴까요?" />
        <InputType
          type="text"
          value={userData.nickname}
          placeholder="닉네임을 입력해주세요"
          onChange={handleNicknameChange}
          text="* 2~16자의 한글, 영문, 숫자만 사용해주세요"
        />
      </Wrapper>
    </>
  );
};

export default Nickname;

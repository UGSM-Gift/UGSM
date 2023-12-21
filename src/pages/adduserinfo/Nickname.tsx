import InputType from "../../components/userAuth/InputType";
import Question from "../../components/userAuth/Question";
import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 20px;
`;

const Nickname = () => {
  const [nickname, setNickname] = useState("");

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  return (
    <>
      <Wrapper>
        <Question firstLine="반가워요!" secondLine="어떻게 불러드릴까요?" />
        <InputType
          type="text"
          value={nickname}
          placeholder="닉네임을 입력해주세요"
          onChange={handleNicknameChange}
          text="* 2~16자의 한글, 영문, 숫자만 사용해주세요"
        />
      </Wrapper>
    </>
  );
};

export default Nickname;

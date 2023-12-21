import InputType from "@components/userAuth/InputType";
import Question from "@components/userAuth/Question";
import React from "react";

const Nickname = () => {
  return (
    <>
      <Question firstLine="반가워요!" secondLine="어떻게 불러드릴까요?" />
      <InputType
        type="text"
        value={nickname}
        placeholder="닉네임을 입력해주세요"
        onChange={handleNicknameChange}
        text="* 2~16자의 한글, 영문, 숫자만 사용해주세요"
      />
    </>
  );
};

export default Nickname;

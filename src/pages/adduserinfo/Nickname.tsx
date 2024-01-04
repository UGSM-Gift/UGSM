import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { UserDataProps } from 'src/modules/@types/common';
import Typography from '@components/common/Typography';
import Input from '@components/common/Input';

const NicknameBox = styled.div``;

const Nickname: React.FC<UserDataProps> = ({ userData, setUserData }) => {
  const [isError, setIsError] = useState(false);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData: any) => ({ ...prevUserData, nickname: event.target.value }));
  };

  const handleNicknameErrorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 닉네임 유효성 검사 로직
    if (!userData.nickname) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  return (
    <NicknameBox>
      <Typography
        variant={'title1'}
        $style={css`
          margin-bottom: 100px;
        `}
      >
        반가워요! <br />
        어떻게 불러드릴까요?
      </Typography>
      <Input
        bottomText='* 이름 외 2~16자의 한글, 영문, 숫자만 사용해주세요'
        onChange={handleNicknameChange}
        errorMessage={'dd'}
      >
        <Input.TextField placeholder='닉네임을 입력해주세요' error={false} />
      </Input>
    </NicknameBox>
  );
};

export default Nickname;

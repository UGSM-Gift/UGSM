import InputType from '../../components/userAuth/InputType';
import React from 'react';
import styled, { css } from 'styled-components';
import { UserDataProps } from 'src/modules/@types/common';
import Typography from '@components/common/Typography';
import Input from '@components/common/Input';

const NicknameBox = styled.div``;

const Nickname: React.FC<UserDataProps> = ({ userData, setUserData }) => {
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({ ...prevUserData, nickname: event.target.value }));
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
      >
        <Input.TextField placeholder='닉네임을 입력해주세요' />
      </Input>
      {/* <InputType
        type='text'
        value={userData.nickname}
        placeholder='닉네임을 입력해주세요'
        onChange={handleNicknameChange}
        text='* 이름 외 2~16자의 한글, 영문, 숫자만 사용해주세요'
      /> */}
    </NicknameBox>
  );
};

export default Nickname;

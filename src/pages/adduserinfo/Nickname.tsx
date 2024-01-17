import React from 'react';
import styled, { css } from 'styled-components';
import { UserDataProps } from 'src/modules/@types/common';
import Typography from '@components/common/Typography';
import Input from '@components/common/Input';
import { ReactComponent as CloseIcon } from '@assets/icons/closeIcon.svg';

const NicknameBox = styled.div``;

const Nickname: React.FC<UserDataProps> = ({
  userData,
  setUserData,
  onFocus,
  onBlur,
  isNicknameError,
}) => {
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({ ...prevUserData, nickname: event.target.value }));
  };

  const handleClickNicknameReset = () => {
    setUserData((prevUserData) => ({ ...prevUserData, nickname: '' }));
  };

  return (
    <NicknameBox>
      <Typography
        $variant={'title1'}
        $style={css`
          margin-bottom: 100px;
        `}
      >
        은근슨물에서는
        <br />
        어떤 닉네임으로 부를까요?
      </Typography>
      <Input
        bottomText='* 이름 외 2~16자의 한글, 영문, 숫자만 사용해주세요'
        errorMessage='* 이름 외 2~16자의 한글, 영문, 숫자만 사용해주세요'
        onChange={handleNicknameChange}
      >
        <Input.TextInteractiveField
          placeholder='닉네임을 입력해주세요'
          icon={<CloseIcon />}
          value={userData.nickname}
          onClick={handleClickNicknameReset}
          onFocus={onFocus}
          onBlur={onBlur}
          error={isNicknameError}
        />
      </Input>
    </NicknameBox>
  );
};

export default Nickname;

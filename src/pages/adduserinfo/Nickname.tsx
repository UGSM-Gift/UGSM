import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { UserDataProps } from 'src/modules/@types/common';
import Typography from '@components/common/Typography';
import Input from '@components/common/Input';
import { ReactComponent as CloseIcon } from '@assets/icons/closeIcon.svg';

const NicknameBox = styled.div``;

const Nickname: React.FC<UserDataProps> = ({ userData, setUserData, onFocus, onBlur }) => {
  const [isError, setIsError] = useState(false);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({ ...prevUserData, nickname: event.target.value }));
  };

  const handleNicknameErrorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 닉네임 유효성 검사 로직
    if (!userData.nickname) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };
  const handleCicknameReset = () => {
    setUserData((prevUserData) => ({ ...prevUserData, nickname: '' }));
  };
  return (
    <NicknameBox>
      <Typography
        variant={'title1'}
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
        onChange={handleNicknameChange}
        errorMessage={'dd'}
      >
        <Input.TextInteractiveField
          placeholder='닉네임을 입력해주세요'
          icon={<CloseIcon />}
          value={userData.nickname}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Input>
    </NicknameBox>
  );
};

export default Nickname;

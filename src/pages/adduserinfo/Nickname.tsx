import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { UserDataProps } from 'src/modules/@types/common';
import Typography from '@components/common/Typography';
import Input from '@components/common/Input';
import { ReactComponent as CloseIcon } from '@assets/icons/closeIcon.svg';
import { checkNicknameDuplication } from 'src/api/account';
import debounce from 'lodash/debounce';
const Nickname: React.FC<UserDataProps> = ({ userData, setUserData, onFocus, onBlur }) => {
  const [isNicknameError, setIsNicknameError] = useState(false);

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({ ...prevUserData, nickname: event.target.value }));
    debounceNicknameChange(userData.nickname);
  };

  const handleClickNicknameReset = () => {
    setUserData((prevUserData) => ({ ...prevUserData, nickname: '' }));
  };

  const checkNicknameValidity = (nickname: string) => {
    // 닉네임 유효성 검사
    const isValid = /^[가-힣a-zA-Z0-9]{2,16}$/.test(userData.nickname);
    setIsNicknameError(!isValid);

    if (isValid) {
      checkNicknameDuplication(nickname);
    }
  };

  // 디바운싱 적용
  const debounceNicknameChange = debounce((nickname) => {
    checkNicknameValidity(nickname);
  }, 500);

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
      >
        <Input.IconTextField
          placeholder='닉네임을 입력해주세요'
          icon={<CloseIcon />}
          onChange={handleNicknameChange}
          value={userData.nickname}
          onClick={handleClickNicknameReset}
          onFocus={onFocus}
          onBlur={onBlur}
          $error={isNicknameError}
        />
      </Input>
    </NicknameBox>
  );
};

export default Nickname;
const NicknameBox = styled.div``;

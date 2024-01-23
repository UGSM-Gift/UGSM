import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { UserDataProps } from 'src/modules/@types/common';
import Typography from '@components/common/Typography';
import Input from '@components/common/Input';
import { ReactComponent as CloseIcon } from '@assets/icons/closeIcon.svg';
import { checkNicknameDuplication } from 'src/api/account';
import debounce from 'lodash/debounce';
import { validateNickname } from 'src/utils/account';
const Nickname: React.FC<UserDataProps> = ({ userData, setUserData, onFocus, onBlur }) => {
  const [isNicknameError, setIsNicknameError] = useState(false);
  const [nicknameAlert, setNicknameAlert] = useState('default');

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = event.target.value;
    setUserData((prevUserData) => ({ ...prevUserData, nickname: newNickname }));
    debounceNicknameChange(newNickname);
  };

  const handleClickNicknameReset = () => {
    setUserData((prevUserData) => ({ ...prevUserData, nickname: '' }));
  };

  const checkNicknameValidity = async (nickname: string) => {
    // 닉네임 유효성 검사
    const isValid = validateNickname(nickname);

    if (!isValid) {
      setIsNicknameError(true);
      setNicknameAlert('regexError');
      return;
    }
    setNicknameAlert('default');
    try {
      const isNicknameUnique = await checkNicknameDuplication(nickname);
      setIsNicknameError(!isNicknameUnique);
      if (!isNicknameUnique) {
        setNicknameAlert('duplicationError');
      }
    } catch (error) {
      console.error('Error checking nickname duplication:', error);
      setNicknameAlert('duplicationError');
      setIsNicknameError(true);
    }
  };

  // 디바운싱 적용
  const debounceNicknameChange = debounce((nickname) => {
    checkNicknameValidity(nickname);
  }, 300);

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
      <Input error={nicknameAlert}>
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

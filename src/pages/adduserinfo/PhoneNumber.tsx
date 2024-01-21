import React from 'react';
import styled, { css } from 'styled-components';
import Typography from '@components/common/Typography';
import Input from '@components/common/Input';
import { formatPhoneNumber } from 'src/utils/account';
import { UserDataProps } from 'src/modules/@types/common';

const NumberBox = styled.div``;

const PhoneNumber: React.FC<UserDataProps> = ({ userData, setUserData, onFocus, onBlur }) => {
  // 휴대폰 번호 입력
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({ ...prevUserData, phone: event.target.value }));
  };

  // 입력값이 변경될 때 호출되는 함수
  const numberhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(event.target.value);
    if (formattedPhone) {
      // 포맷된 전화번호를 입력 필드에 설정
      event.target.value = formattedPhone;
    }
    // 원래의 onChange 핸들러 호출
    handlePhoneChange(event);
  };

  return (
    <NumberBox>
      <Typography
        $variant={'title1'}
        $style={css`
          margin-bottom: 100px;
        `}
      >
        사용하고 있는 <br />
        번호를 알려주세요
      </Typography>
      <Input>
        <Input.TextField
          placeholder='숫자만 입력해주세요'
          $error={false}
          value={userData.phone}
          onChange={numberhandleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Input>
    </NumberBox>
  );
};

export default PhoneNumber;

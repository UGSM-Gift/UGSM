import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Typography from '@components/common/Typography';
import Input from '@components/common/Input';
import { formatPhoneNumber, validatePhoneNumber } from 'src/utils/account';
import { UserDataProps } from 'src/modules/@types/common';
import debounce from 'lodash/debounce';

const PhoneNumber: React.FC<UserDataProps> = ({ userData, setUserData, onFocus, onBlur }) => {
  const [isNumberError, setIsNumberError] = useState(false);

  const checkPhoneValidity = async (phone: string) => {
    const isValid = validatePhoneNumber(phone);
    setIsNumberError(!isValid);
  };

  const debounceNumberChange = debounce((phone) => {
    checkPhoneValidity(phone);
  }, 300);

  // 휴대폰 번호 입력
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = event.target.value;
    setUserData((prevUserData) => ({ ...prevUserData, mobile: newPhone }));
    debounceNumberChange(newPhone);
  };

  const numberhandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(event.target.value);
    if (formattedPhone) {
      event.target.value = formattedPhone;
    }
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
          $error={isNumberError}
          value={userData.mobile}
          onChange={numberhandleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Input>
    </NumberBox>
  );
};

export default PhoneNumber;
const NumberBox = styled.div``;

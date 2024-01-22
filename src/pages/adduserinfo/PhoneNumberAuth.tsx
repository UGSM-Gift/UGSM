import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Typography from '@components/common/Typography';
import { common } from 'src/styles/common';
import { colors } from 'src/styles/colors';
import { phoneAuthPut } from 'src/api/account';
import Input from '@components/common/Input';
import { validatePhoneAuthNumber } from 'src/utils/account';
import debounce from 'lodash/debounce';

type PhoneNumberProp = {
  phone: string;
  phoneAuth: string;
  setPhoneAuth: any;
  onFocus: (event: React.FocusEvent) => void;
  onBlur: (event: React.FocusEvent) => void;
  isPhoneAuthValid: boolean;
};

const PhoneNumberAuth: React.FC<PhoneNumberProp> = ({
  phone,
  phoneAuth,
  setPhoneAuth,
  onFocus,
  onBlur,
  isPhoneAuthValid,
}) => {
  const [isAuthNumberError, setIsAuthNumberError] = useState(false);

  const [timer, setTimer] = useState(60);
  // 인증번호 유효성 검사
  const checkPhoneAuthValidity = async (phone: string) => {
    const isValid = validatePhoneAuthNumber(phone);
    setIsAuthNumberError(!isValid);
  };

  const debounceNumberChange = debounce((phone) => {
    checkPhoneAuthValidity(phone);
  }, 300);

  // 휴대폰 인증번호 입력
  const handlePhoneAuthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = event.target.value;
    setPhoneAuth(newPhone);
    debounceNumberChange(newPhone);
  };

  // 인증번호 작성 시간 타이머
  useEffect(() => {
    if (timer === 0) return;

    const countdown = setInterval(() => {
      setTimer((prevTimer: number) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);

  return (
    <NumberBox>
      <Typography
        $variant={'title1'}
        $style={css`
          margin-bottom: 100px;
        `}
      >
        방금 보내드린
        <br />
        인증번호를 입력해주세요
      </Typography>
      <Input errorMessage='* 인증번호가 다릅니다. 다시 입력해주세요'>
        <Input.TimerTextField
          placeholder={`${phone}로 보내드렸어요`}
          $error={isAuthNumberError}
          value={phoneAuth}
          onChange={handlePhoneAuthChange}
          onFocus={onFocus}
          onBlur={onBlur}
          timer={timer}
        />
      </Input>

      <Response>
        <Typography $variant={'button2'} color={colors.gray[60]}>
          인증 문자가 오지않나요?
        </Typography>
        <Typography
          $variant={'button2'}
          color={colors.gray[40]}
          onClick={() => {
            phoneAuthPut(phoneAuth, phone, setTimer);
          }}
          $style={css`
            cursor: pointer;
          `}
        >
          재전송
        </Typography>
      </Response>
    </NumberBox>
  );
};

export default PhoneNumberAuth;
const NumberBox = styled.div``;

const Response = styled.div`
  ${common.flexCenterRow}
  gap: 10px;
  margin-top: 20px;
`;

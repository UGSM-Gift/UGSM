import InputType from '../../components/userAuth/InputType';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Typography from '@components/common/Typography';
import { common } from 'src/styles/common';
import { colors } from 'src/styles/colors';
import { phoneAuthPut } from 'src/api/account';
import Input from '@components/common/Input';

const NumberBox = styled.div``;

const Response = styled.div`
  ${common.flexCenterRow}
  gap: 10px;
  margin-bottom: 20px;
`;

type PhoneNumberProp = {
  phone: string;
  phoneAuth: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: (event: React.FocusEvent) => void;
  onBlur: (event: React.FocusEvent) => void;
};

const PhoneNumberAuth: React.FC<PhoneNumberProp> = ({ phone, phoneAuth, onChange, onFocus, onBlur }) => {
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer === 0) return;

    const countdown = setInterval(() => {
      setTimer((prevTimer: number) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer]);

  const accessToken = localStorage.getItem('accessToken');
  return (
    <NumberBox>
      <Typography
        variant={'title1'}
        $style={css`
          margin-bottom: 100px;
        `}
      >
        방금 보내드린
        <br />
        인증번호를 입력해주세요
      </Typography>
      <Input>
        <Input.TextInteractiveField
          placeholder={`${phone}로 보내드렸어요`}
          error={false}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          timer={timer}
        />
      </Input>

      <Response>
        <Typography variant={'button2'} color={colors.gray[60]}>
          인증 문자가 오지않나요?
        </Typography>
        <Typography
          variant={'button2'}
          color={colors.gray[40]}
          onClick={() => {
            phoneAuthPut(phoneAuth, phone, accessToken, setTimer);
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

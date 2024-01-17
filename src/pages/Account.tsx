import React, { useEffect, useState } from 'react';
import PreviousButton from '../components/userAuth/PreviousButton';

import axios from 'axios';
import { UserProfileData } from 'src/modules/@types/common';
import { useNavigate } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout';
import Button from '@components/common/Button';
import { phoneAuthPut } from 'src/api/account';

import styled from 'styled-components';
import { colors } from 'src/styles/colors';
import Name from './adduserinfo/Name';
import Nickname from './adduserinfo/Nickname';
import Gender from './adduserinfo/Gender';
import PhoneNumber from './adduserinfo/PhoneNumber';
import PhoneNumberAuth from './adduserinfo/PhoneNumberAuth';

const Account = () => {
  const [userData, setUserData] = useState<UserProfileData>({
    name: '',
    nickname: '',
    birth: '',
    gender: '',
  });
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [disabled, setDisabled] = useState<boolean>(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [isNicknameError, setIsNicknameError] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);

  const handleAuthErrorChange = () => {};

  const handleNicknameErrorChange = () => {
    const isNicknameValid = /^[가-힣a-zA-Z0-9]{2,16}$/.test(userData.nickname);
    // 닉네임 유효성 검사 로직
    setIsNicknameError(!isNicknameValid);
  };

  // 키보드가 올라왔을 때 호출되는 함수
  const handleFocus = () => {
    setKeyboardVisible(true);
  };

  // 키보드가 내려갔을 때 호출되는 함수
  const handleBlur = () => {
    handleNicknameErrorChange();
    setKeyboardVisible(false);
  };

  const navigator = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  // 휴대폰 인증번호
  const [phoneAuthNumber, setPhoneAuthNumber] = useState('');
  // 입력값 로직

  // 입력값 검증 로직
  const validateInput = () => {
    switch (step) {
      case 1:
        // 첫 번째 단계에서는 사용자의 이름이 비어있지 않은지 확인
        return userData.name.trim().length > 0;
      case 2:
        // 닉네임이 2~16자리이며 한글, 영문, 숫자만 포함되었는지 확인
        // ++중복검사 로직
        const isAuthNicknameValid = true;
        const isNicknameValid = /^[가-힣a-zA-Z0-9]{2,16}$/.test(userData.nickname);
        return isAuthNicknameValid && isNicknameValid && userData.nickname.trim().length > 0; // 중복검사 결과도 여기에 반영해야 합니다.
      case 3:
        // 날짜와 성별이 모두 선택되었는지 확인
        return userData.birth !== '' && userData.gender !== '';
      case 4:
        // 전화번호가 12자리 숫자인지 확인
        const phoneNumber = phone.replace(/-/g, '');
        return phoneNumber.length === 11;
      case 5:
        // 올바른 인증번호가 입력되었는지 확인
        // ++인증번호 검증
        const isAuthNumberValid = true;
        return isAuthNumberValid && phoneAuthNumber.trim().length > 0;
      default:
        return false;
    }
  };
  useEffect(() => {
    setDisabled(!validateInput());
  }, [step, userData, phone, phoneAuthNumber]); // 관련 상태가 변경될 때마다 검증

  // 전화번호 형식을 조정하는 함수
  function formatPhoneNumber(value: string) {
    if (!value) return value;

    // 숫자만 추출
    const phoneNumber = value.replace(/[^\d]/g, '');

    // 각 구간별로 숫자를 분할
    const phoneNumberParts = [];
    const part1 = phoneNumber.slice(0, 3);
    const part2 = phoneNumber.slice(3, 7);
    const part3 = phoneNumber.slice(7, 11);

    if (part1) phoneNumberParts.push(part1);
    if (part2) phoneNumberParts.push(part2);
    if (part3) phoneNumberParts.push(part3);

    // 하이픈으로 연결
    return phoneNumberParts.join('-');
  }

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

  // 휴대폰 번호 입력
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  // 휴대폰 인증번호 입력
  const handlePhoneAuthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneAuthNumber(event.target.value);
  };

  // 전화번호 서버 전송
  const phoneAuthPost = async () => {
    try {
      const phoneAuth = { phoneNumber: phone.replace(/-/g, '') };
      await axios.post('https://www.ugsm.co.kr/api/verification-code', phoneAuth, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // 유저데이터 전송
  const userDataPost = async (userData: UserProfileData) => {
    try {
      const response = await axios.put(`https://www.ugsm.co.kr/api/user/me`, userData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response);
      navigator('/');
    } catch (error) {
      console.log(error);
    }
  };

  // 최소, 최대 값
  const updateStep = (newStep: number) => {
    setStep(Math.max(1, Math.min(newStep, 5)));
  };

  const handleNextStepChange = () => {
    if (step === 3) {
      phoneAuthPost();
    } else if (step === 4) {
      phoneAuthPut(phoneAuthNumber, phone, accessToken);
      userDataPost(userData);
    }
    updateStep(step + 1);
  };

  const handlePreviousStepChange = () => {
    updateStep(step - 1);
  };

  return (
    <BasicLayout>
      <PreviousButton onClick={handlePreviousStepChange} step={step} />
      {step === 1 && (
        <Name userData={userData} setUserData={setUserData} onFocus={handleFocus} onBlur={handleBlur} />
      )}
      {step === 2 && (
        <Nickname
          isNicknameError={isNicknameError}
          userData={userData}
          setUserData={setUserData}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
      {step === 3 && <Gender userData={userData} setUserData={setUserData} />}
      {step === 4 && (
        <PhoneNumber
          phone={phone}
          onChange={numberhandleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
      {step === 5 && (
        <PhoneNumberAuth
          phone={phone}
          phoneAuth={phoneAuthNumber}
          onChange={handlePhoneAuthChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
      <ButtonContainer $keyboardVisible={keyboardVisible}>
        <ButtonBox>
          {disabled ? (
            <Button $variant='disabled' disabled={disabled}>
              다음
            </Button>
          ) : (
            <Button $variant='primary' onClick={handleNextStepChange} disabled={disabled}>
              다음
            </Button>
          )}
        </ButtonBox>
      </ButtonContainer>
    </BasicLayout>
  );
};

export default Account;

const ButtonContainer = styled.div<{ $keyboardVisible: boolean }>`
  width: 100%;
  position: absolute;
  bottom: 0;
  margin-left: -16px;
  margin-right: -16px;
  height: 88px;
  background-color: ${colors.white};
  box-shadow: ${(props) => (props.$keyboardVisible ? '0px -8px 12px 0px rgba(0, 0, 0, 0.04)' : 'none')};
`;

const ButtonBox = styled.div`
  width: calc(100% - 32px);
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

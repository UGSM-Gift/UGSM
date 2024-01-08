import React, { useState } from 'react';
import PreviousButton from '../components/userAuth/PreviousButton';
import Nickname from './adduserinfo/Nickname';
import Gender from './adduserinfo/Gender';
import PhoneNumber from './adduserinfo/PhoneNumber';
import PhoneNumberAuth from './adduserinfo/PhoneNumberAuth';
import axios from 'axios';
import { UserProfileData } from 'src/modules/@types/common';
import { useNavigate } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout';
import Button from '@components/common/Button';
import { phoneAuthPut } from 'src/api/account';
import Name from './adduserinfo/Name';

const UserAddInfo = () => {
  const [userData, setUserData] = useState<UserProfileData>({ nickname: '', birth: '', gender: '' });
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');

  const navigator = useNavigate();
  const accessToken = localStorage.getItem('accessToken');
  // 휴대폰 인증번호
  const [phoneAuthNumber, setPhoneAuthNumber] = useState('');
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
    setStep(Math.max(1, Math.min(newStep, 4)));
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
      {step === 1 && <Name userData={userData} setUserData={setUserData} />}
      {step === 2 && <Nickname userData={userData} setUserData={setUserData} />}
      {step === 3 && <Gender userData={userData} setUserData={setUserData} />}
      {step === 4 && <PhoneNumber phone={phone} onChange={numberhandleChange} />}
      {step === 5 && (
        <PhoneNumberAuth phone={phone} phoneAuth={phoneAuthNumber} onChange={handlePhoneAuthChange} />
      )}
      <Button variant='primary' onClick={handleNextStepChange}>
        다음
      </Button>
    </BasicLayout>
  );
};

export default UserAddInfo;

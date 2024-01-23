import React, { useState } from 'react';
import PreviousButton from '../components/userAuth/PreviousButton';
import BasicLayout from './layout/BasicLayout';
import Button from '@components/common/button/Button';
import styled from 'styled-components';
import { colors } from 'src/styles/colors';
import Name from './adduserinfo/Name';
import Nickname from './adduserinfo/Nickname';
import Gender from './adduserinfo/Gender';
import PhoneNumber from './adduserinfo/PhoneNumber';
import PhoneNumberAuth from './adduserinfo/PhoneNumberAuth';
import useAccountForm from 'src/hooks/account/useAccountForm';
import { common } from 'src/styles/common';

const Account = () => {
  const {
    userData,
    setUserData,
    step,
    phoneAuthNumber,
    setPhoneAuthNumber,
    isFormValid,
    handleNextStep,
    handlePreviousStep,
    isPhoneAuthValid,
  } = useAccountForm();

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  // 키보드가 올라왔을 때 호출되는 함수
  const handleFocus = () => {
    setKeyboardVisible(true);
  };

  // 키보드가 내려갔을 때 호출되는 함수
  const handleBlur = () => {
    setKeyboardVisible(false);
  };

  // 번호 재입력
  const handleReset = () => {
    setPhoneAuthNumber('');
  };

  return (
    <BasicLayout>
      <PreviousButton onClick={handlePreviousStep} step={step} />
      {step === 1 && (
        <Name userData={userData} setUserData={setUserData} onFocus={handleFocus} onBlur={handleBlur} />
      )}
      {step === 2 && (
        <Nickname
          userData={userData}
          setUserData={setUserData}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
      {step === 3 && <Gender userData={userData} setUserData={setUserData} />}
      {step === 4 && (
        <PhoneNumber
          userData={userData}
          setUserData={setUserData}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
      {step === 5 && (
        <PhoneNumberAuth
          phone={userData.mobile}
          phoneAuth={phoneAuthNumber}
          setPhoneAuth={setPhoneAuthNumber}
          onFocus={handleFocus}
          onBlur={handleBlur}
          isPhoneAuthValid={isPhoneAuthValid}
        />
      )}
      <ButtonContainer $keyboardVisible={keyboardVisible}>
        <ButtonBox>
          {step === 5 ? (
            <ButtonContent>
              <Button $variant={'outline'} onClick={handleReset}>
                번호 재입력
              </Button>
              <Button
                $variant={isFormValid ? 'disabled' : 'primary'}
                onClick={handleNextStep}
                disabled={isFormValid}
              >
                완료
              </Button>
            </ButtonContent>
          ) : (
            <Button
              $variant={isFormValid ? 'disabled' : 'primary'}
              onClick={handleNextStep}
              disabled={isFormValid}
            >
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

const ButtonContent = styled.div`
  ${common.flexCenterRow}
  gap: 10px;
`;

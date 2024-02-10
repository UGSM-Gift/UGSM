// hooks/useAccountForm.js
import { useState, useEffect } from 'react';
import { UserProfileData } from 'src/modules/@types/common';
import { phoneAuthPost, userDataPost } from 'src/api/userData';
import { useNavigate } from 'react-router-dom';
import {
  validateBirthAndGender,
  validateName,
  validateNickname,
  validatePhoneAuthNumber,
  validatePhoneNumber,
} from 'src/utils/account';
import { phoneAuthPut } from 'src/api/account';

const useAccountForm = () => {
  const [userData, setUserData] = useState<UserProfileData>({
    name: '',
    nickname: '',
    birthdate: '',
    gender: '',
    mobile: '',
  });
  const [step, setStep] = useState(3);
  const [phoneAuthNumber, setPhoneAuthNumber] = useState('');
  const [isPhoneAuthValid, setIsPhoneAuthValid] = useState(false);
  // 폼 검사
  const [isFormValid, setIsFormValid] = useState(false);
  const navigator = useNavigate();
  const { name, nickname, birthdate, gender, mobile } = userData;

  useEffect(() => {
    const validateInput = () => {
      switch (step) {
        case 1:
          return validateName(name);
        case 2:
          return validateNickname(nickname);
        case 3:
          return validateBirthAndGender(birthdate, gender);
        case 4:
          return validatePhoneNumber(mobile);
        case 5:
          return validatePhoneAuthNumber(phoneAuthNumber);
        default:
          return false;
      }
    };
    setIsFormValid(!validateInput());
  }, [step, name, nickname, birthdate, gender, mobile, phoneAuthNumber]);

  const handleNextStep = async () => {
    if (step === 4) {
      phoneAuthPost(mobile);
    } else if (step === 5) {
      const isValid = await phoneAuthPut(phoneAuthNumber, mobile);
      setIsPhoneAuthValid(isValid);
      if (!isValid) {
        const mainMove = await userDataPost(userData);
        if (mainMove) {
          navigator('/');
        }
      }
    }
    updateStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep((prevStep) => Math.max(1, prevStep - 1));
  };

  const updateStep = (newStep: number) => {
    setStep(Math.max(1, Math.min(newStep, 5)));
  };

  return {
    userData,
    setUserData,
    phoneAuthNumber,
    setPhoneAuthNumber,
    step,
    isFormValid,
    handleNextStep,
    handlePreviousStep,
    isPhoneAuthValid,
  };
};

export default useAccountForm;

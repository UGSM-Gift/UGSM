import React, { useState } from "react";
import styled from "styled-components";
import PreviousButton from "../components/userAuth/PreviousButton";
import Nickname from "./adduserinfo/Nickname";
import Gender from "./adduserinfo/Gender";
import PhoneNumber from "./adduserinfo/PhoneNumber";
import PhoneNumberAuth from "./adduserinfo/PhoneNumberAuth";
import NextButton from "../components/userAuth/NextButton";
import axios from "axios";
import { UserData } from "src/modules/@types/common";

const Wrapper = styled.div``;

const ContentBox = styled.div`
  padding: 20px 20px 0 20px;
`;

const UserAddInfo = () => {
  const [userData, setUserData] = useState<UserData>({ nickname: "", birth: "", gender: "" });
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const accessToken = localStorage.getItem("accessToken");
  // 휴대폰 인증번호
  const [phoneAuthNumber, setPhoneAuthNumber] = useState("");
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
      const phoneAuth = { phoneNumber: phone };
      await axios.post("https://www.ugsm.co.kr/api/verification-code", phoneAuth);
    } catch (error) {
      console.log(error);
    }
  };
  // 번호인증 서버 전송
  const phoneAuthPut = async (phoneAuthNumber: string) => {
    try {
      await axios.put(`https://www.ugsm.co.kr/api/verification-code/${phoneAuthNumber}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  // 유저데이터 서버 전송
  const userDataPost = async (userData: UserData) => {
    try {
      await axios.post(`https://www.ugsm.co.kr/api/???/${phoneAuthNumber}`, userData);
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
      phoneAuthPut(phoneAuthNumber);
      userDataPost(userData);
    }
    updateStep(step + 1);
  };

  const handlePreviousStepChange = () => {
    updateStep(step - 1);
  };

  return (
    <>
      <Wrapper>
        <ContentBox>
          <PreviousButton onClick={handlePreviousStepChange} step={step} />
        </ContentBox>
        {step === 1 && <Nickname userData={userData} setUserData={setUserData} />}
        {step === 2 && <Gender userData={userData} setUserData={setUserData} />}
        {step === 3 && <PhoneNumber phone={phone} onChange={handlePhoneChange} />}
        {step === 4 && (
          <PhoneNumberAuth phone={phone} phoneAuth={phoneAuthNumber} onChange={handlePhoneAuthChange} />
        )}
      </Wrapper>
      <NextButton onClick={handleNextStepChange} step={step} />
    </>
  );
};

export default UserAddInfo;

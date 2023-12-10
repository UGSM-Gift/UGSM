import SocialLoginButton from "../components/login/SocialLoginButton";
import React from "react";
import styled from "styled-components";
import { googleLogin, kakaoLogin, naverLogin } from "../components/login/social";

const Wrapper = styled.div`
  background-color: #ddd;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const SocialButtonWrapper = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Login = () => {
  return (
    <Wrapper>
      <SocialButtonWrapper>
        <SocialLoginButton onClick={naverLogin} socialLogin="네이버로 시작" />
        <SocialLoginButton onClick={kakaoLogin} socialLogin="카카오톡로 시작" />
        <SocialLoginButton onClick={googleLogin} socialLogin="구글로 시작" />
      </SocialButtonWrapper>
    </Wrapper>
  );
};

export default Login;

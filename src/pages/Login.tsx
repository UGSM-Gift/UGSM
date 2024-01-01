import SocialLoginButton from '../components/login/SocialLoginButton';
import React from 'react';
import styled from 'styled-components';
import CheckItem from '../components/login/CheckItem';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 120px 20px 30px;
`;

const LogoBox = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
`;

const Title = styled.div`
  margin-bottom: 15px;
  font-size: 3rem;
  text-align: center;
  font-weight: 600;
  line-height: 3.5rem;
`;

const SubTitle = styled.div`
  color: #343a3c;
`;

const SocialButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 40px auto 100px;
  gap: 10px;
`;

const AssentBox = styled.div``;

const Notice = styled.div`
  margin-bottom: 20px;
  font-size: 1.3rem;
  color: #878d96;
`;

const CheckList = styled.div`
  display: flex;
  justify-content: center;
`;

const socialLogins = [
  {
    link: 'https://www.ugsm.co.kr/api/login/oauth2/authorization/naver',
    platform: '네이버로 시작',
  },
  {
    link: 'https://www.ugsm.co.kr/api/login/oauth2/authorization/kakao',
    platform: '카카오톡으로 시작',
  },
  {
    link: 'https://www.ugsm.co.kr/api/login/oauth2/authorization/google',
    platform: '구글로 시작',
  },
];

const Login = () => {
  return (
    <Wrapper>
      <LogoBox>logo</LogoBox>
      <Title>
        <p>나도 몰랐던</p>
        <p>받고 싶은 선물이 뭘까?</p>
      </Title>
      <SubTitle>은근슨물에서 은근테스트로 알아보자!</SubTitle>
      <SocialButtonWrapper>
        {socialLogins.map((socialLogin, index) => (
          <Link to={socialLogin.link} key={index}>
            <SocialLoginButton key={index} socialLogin={socialLogin.platform} />
          </Link>
        ))}
      </SocialButtonWrapper>
      <AssentBox>
        <Notice>로그인 및 회원가입시, 아래 내용에 동의하는 것으로 간주합니다.</Notice>
        <CheckList>
          <CheckItem children='이용약관' />
          <CheckItem children='개인정보처리방침' />
        </CheckList>
      </AssentBox>
    </Wrapper>
  );
};

export default Login;

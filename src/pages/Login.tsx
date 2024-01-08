import SocialLoginButton from '../components/login/SocialLoginButton';
import React from 'react';
import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import BasicLayout from './layout/BasicLayout';
import Typography from '../components/common/Typography';
import { colors } from 'src/styles/colors';
import { common } from 'src/styles/common';
import Naver from 'src/assets/icons/NaverIcon';
import Kakao from 'src/assets/icons/KakaoIcon';
import Google from 'src/assets/icons/GoogleIcon';
import { SocialLogin } from 'src/types/socialLogin';

const socialLogins: SocialLogin[] = [
  {
    link: 'https://www.ugsm.co.kr/api/login/oauth2/authorization/kakao',
    platform: '카카오로 시작',
    icon: <Kakao />,
    variant: 'primary',
    color: colors.black,

    style: { background: '#FEE500', color: colors.black },
  },
  {
    link: 'https://www.ugsm.co.kr/api/login/oauth2/authorization/naver',
    platform: '네이버로 시작',
    icon: <Naver />,
    variant: 'primary',
    color: colors.white,
    style: { background: '#03C75A', color: colors.white },
  },

  {
    link: 'https://www.ugsm.co.kr/api/login/oauth2/authorization/google',
    platform: '구글로 시작',
    icon: <Google />,
    variant: 'ghost',
    color: colors.gray[60],
    style: { background: colors.white, color: colors.gray[20], border: `1px solid ${colors.gray[20]}` },
  },
];

const Login = () => {
  return (
    <BasicLayout>
      <SloganBox>
        <Typography
          variant='largetitle'
          color={colors.gray[90]}
          $style={css`
            text-align: center;
            margin-bottom: 20px;
          `}
        >
          나도 몰랐던
          <br /> 받고 싶은 선물이 뭘까?
        </Typography>
        <Typography
          variant='body1'
          color={colors.gray[70]}
          $style={css`
            text-align: center;
            margin-bottom: 10px;
          `}
        >
          은근슨물에서 은근테스트로 알아보자!
        </Typography>
        <picture>
          <source type='image/webp' srcSet={`${process.env.PUBLIC_URL}/assets/images/present.webp`} />
          <img src={`${process.env.PUBLIC_URL}/assets/images/present.png`} alt='선물사진' />
        </picture>
      </SloganBox>
      <SocialButtonWrapper>
        {socialLogins.map((socialLogin, index) => (
          <Link to={socialLogin.link} key={index}>
            <SocialLoginButton
              key={index}
              socialLogin={socialLogin.platform}
              variant={socialLogin.variant}
              icon={socialLogin.icon}
              color={socialLogin.color}
              style={socialLogin.style}
            />
          </Link>
        ))}
      </SocialButtonWrapper>
      <AssentBox>
        <Typography
          variant={'caption2'}
          $style={css`
            color: ${colors.gray[50]};
          `}
        >
          로그인은 개인 정보 보호 정책 및 서비스 약관에 동의하는
          <br /> 것을 의미하여, 서비스 이용을 위해
          <br />
          이메일과 이름, 성별, 위치를 수집합니다.
        </Typography>
      </AssentBox>
    </BasicLayout>
  );
};

export default Login;
const SloganBox = styled.div`
  margin-top: 132px;
  ${common.flexCenterColumn}
`;

const SocialButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 57px auto 41px;
  gap: 10px;
`;

const AssentBox = styled.div`
  margin: 0 auto;
  text-align: center;
`;

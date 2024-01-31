import { Heading } from '@components/header';
import NavBar from '@components/common/NavBar';
import React, { useEffect } from 'react';
import { colors } from 'src/styles/colors';
import { BasicLayoutProps } from 'src/types/layout';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const BasicLayout = ({ children, style }: BasicLayoutProps) => {
  const location = useLocation();
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  });

  return (
    <Layout style={style}>
      <Heading>
        <Heading.Content />
      </Heading>
      <ContentsContainer>{children}</ContentsContainer>
      {location.pathname !== '/login' &&
        location.pathname !== '/account' &&
        location.pathname !== '/mypage/setting/userProfileEdit' && <NavBar />}
    </Layout>
  );
};

export default BasicLayout;

const Layout = styled.div`
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
  background-color: ${colors.white};
`;

const ContentsContainer = styled.div`
  padding: 16px;
`;

import { Heading } from '@components/Header';
import React, { useEffect } from 'react';
import { colors } from 'src/styles/colors';
import { BasicLayoutProps } from 'src/types/layout';
import styled from 'styled-components';

const BasicLayout = ({ children, style }: BasicLayoutProps) => {
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

'use client';

import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { HeaderMap } from 'src/types/layout';
import { MyPageHeader, SettingHeader } from './TypeHeader';

// 헤더 유형별 컴포넌트 정의
const HeaderElement = {
  mypage: () => <MyPageHeader />,
  setting: () => <SettingHeader />,

  Default: () => <div>default</div>,
};

// 현재 경로에 따른 헤더 컴포넌트 매핑
const headerMap: HeaderMap = {
  '/mypage': HeaderElement.mypage,
  '/mypage/setting': HeaderElement.setting,
};

export const Heading = ({ children }: { children: ReactNode }) => {
  return <header>{children}</header>;
};

const Content = () => {
  const location = useLocation();
  const HeaderComponent = headerMap[location.pathname] || HeaderElement.Default; // 경로에 해당하는 헤더 컴포넌트 또는 기본값
  return <HeaderComponent />;
};

Heading.Content = Content;

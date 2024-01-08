import React, { ReactNode } from 'react';

export type BasicLayoutProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  handleBookmarkAction?: () => void;
  captureChat?: () => void;
};

export type HeaderMap = {
  [key: string]: () => JSX.Element;
};

export type HeaderProps = {
  children: React.ReactNode;
  onClick: () => void;
};
export type HeaderElementProps = {
  leftContent1?: React.ReactNode | string;
  leftContent2?: string;
  title?: string;
  rightContent1?: React.ReactNode;
  rightContent2?: React.ReactNode | string;
  leftContentOnClick?: () => void;
  rightContentOnClick1?: () => void;
  rightContentOnClick2?: () => void;
  style?: React.CSSProperties;
};

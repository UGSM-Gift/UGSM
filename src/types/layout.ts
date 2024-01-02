import { ReactNode } from 'react';

export type BasicLayoutProps = {
  children: ReactNode;
  style?: React.CSSProperties;
  handleBookmarkAction?: () => void;
  captureChat?: () => void;
};

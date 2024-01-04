import IconBtnWrapper from '@components/common/IconBtnWrapper';
import React from 'react';

import styled from 'styled-components';

const LeftHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Header>
      <IconBtnWrapper onClick={() => {}}>{children}</IconBtnWrapper>
    </Header>
  );
};

export default LeftHeader;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

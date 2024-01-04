import IconBtnWrapper from '@components/common/IconBtnWrapper';
import React from 'react';

import styled from 'styled-components';

const RightHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Header>
      <IconBtnWrapper onClick={() => {}}>{children}</IconBtnWrapper>
    </Header>
  );
};

export default RightHeader;
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

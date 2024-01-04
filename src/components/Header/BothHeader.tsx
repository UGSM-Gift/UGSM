import IconBtnWrapper from '@components/common/IconBtnWrapper';
import React from 'react';
import { common } from 'src/styles/common';

import styled from 'styled-components';

const BothHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <Header>
      <IconBtnWrapper onClick={() => {}}>{children}</IconBtnWrapper>
    </Header>
  );
};

export default BothHeader;
const Header = styled.div`
  ${common.flexCenterRow}
`;

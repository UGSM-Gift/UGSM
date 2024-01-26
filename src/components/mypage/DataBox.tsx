import Typography from '@components/common/Typography';
import React from 'react';
import { colors } from 'src/styles/colors';
import { common } from 'src/styles/common';
import { Anniversary } from 'src/types/userData';
import styled from 'styled-components';

const DataBox: React.FC<Anniversary> = ({ children, birthdata, anniversaryCount, onClick }) => {
  return (
    <DataContainer onClick={onClick}>
      <ContentImg>
        {birthdata ? (
          <img src={`${process.env.PUBLIC_URL}/assets/images/cake.png`} alt='cake' />
        ) : (
          <img src={`${process.env.PUBLIC_URL}/assets/images/firecracker.png`} alt='firecracker' />
        )}
      </ContentImg>

      <Typography $variant='body1'>
        {birthdata ? children : `${children}(${anniversaryCount})`}
      </Typography>
    </DataContainer>
  );
};

export default DataBox;

const DataContainer = styled.div`
  width: 160px;
  padding: 16px 40px;
  ${common.flexCenterColumn}
  border: 1px solid ${colors.gray[30]};
  border-radius: 12px;
  cursor: pointer;
`;

const ContentImg = styled.div`
  margin-bottom: 8px;
`;

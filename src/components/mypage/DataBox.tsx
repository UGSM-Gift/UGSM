import Typography from '@components/common/Typography';
import React from 'react';
import { colors } from 'src/styles/colors';
import { common } from 'src/styles/common';
import { Anniversary } from 'src/types/userData';
import styled from 'styled-components';

const DataBox: React.FC<Anniversary> = ({ children, birth, anniversaryCount }) => {
  return (
    <DataContainer>
      <ContentImg>
        {birth ? (
          <img src={`${process.env.PUBLIC_URL}/assets/images/cake.png`} alt='cake' />
        ) : (
          <img src={`${process.env.PUBLIC_URL}/assets/images/firecracker.png`} alt='firecracker' />
        )}
      </ContentImg>

      <Typography variant='body1'>{birth ? children : `${children}(${anniversaryCount})`}</Typography>
    </DataContainer>
  );
};

export default DataBox;

const DataContainer = styled.div`
  padding: 16px 40px;
  ${common.flexCenterColumn}
  border: 1px solid ${colors.gray[30]};
  border-radius: 12px;
`;

const ContentImg = styled.div`
  margin-bottom: 10px;
`;
const Content = styled.div``;

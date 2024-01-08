import React from 'react';
import { common } from 'src/styles/common';
import { UserProfile } from 'src/types/userData';
import styled from 'styled-components';
import DataBox from './DataBox';

const Anniversary = ({ userData }: { userData: UserProfile }) => {
  const originalDate = userData.birth;
  const formattedDate = originalDate.slice(2).replace(/-/g, '.');

  return (
    <AnniversaryBox>
      <DataBox children={formattedDate} birth />
      <DataBox children={'기념일'} birth={false} anniversaryCount={0} />
    </AnniversaryBox>
  );
};

export default Anniversary;

const AnniversaryBox = styled.div`
  ${common.flexCenterRow}
  gap: 15px;
  margin: 24px auto;
`;

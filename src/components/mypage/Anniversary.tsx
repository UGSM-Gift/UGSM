import React from 'react';
import { common } from 'src/styles/common';
import { UserData } from 'src/types/userData';
import styled from 'styled-components';
import DataBox from './DataBox';

const Anniversary = ({ userData }: { userData: UserData }) => {
  return (
    <AnniversaryBox>
      <DataBox children={userData.birth} birth />
      <DataBox children={'기념일'} birth={false} anniversaryCount={0} />
    </AnniversaryBox>
  );
};

export default Anniversary;

const AnniversaryBox = styled.div`
  width: 80%;
  ${common.flexCenterRow}
  margin: 30px auto;
  justify-content: space-between;
`;

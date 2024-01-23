import Button from '@components/common/button/Button';
import Typography from '@components/common/Typography';
import React from 'react';
import { RADIUS } from 'src/constants/style';
import { colors } from 'src/styles/colors';
import styled from 'styled-components';
import BasicLayout from '../layout/BasicLayout';
import { ReactComponent as DownIcon } from '@assets/icons/downIcon.svg';
import { common } from 'src/styles/common';
import Input from '@components/common/Input';

const AccountDelete = (userData: any) => {
  return (
    <BasicLayout>
      <Title>
        <Typography $variant={'title1'} style={{ marginBottom: '13px' }}>
          {userData.nickname}님 <br /> 정말로 탈퇴하시겠어요?
        </Typography>
        <Typography $variant={'title3'} color={colors.gray[50]} style={{ marginBottom: '60px' }}>
          은근슨물을 떠나는 이유를 남겨주세요
        </Typography>
      </Title>
      <DeleteSelect>
        <Typography $variant={'body2'} color={colors.gray[40]}>
          탈퇴 사유를 선택해주세요
        </Typography>
        <DownIcon />
      </DeleteSelect>
      <Input>
        <Input.TextField placeholder='탈퇴 사유를 선택해주세요' />
      </Input>
      <ButtonContainer>
        <Button $variant={'primary'} radius='small'>
          탈퇴하기
        </Button>
      </ButtonContainer>

      {/* <Button $variant={'disabled'} radius='small' disabled>
        탈퇴하기
      </Button> */}
    </BasicLayout>
  );
};

export default AccountDelete;

const Title = styled.div``;

const DeleteSelect = styled.div`
  ${common.flexCenterRow}
  justify-content: space-between;
  padding: 20px 16px;
  border: 1px solid ${colors.gray[30]};
  border-radius: ${RADIUS.small};
`;

const ButtonContainer = styled.div`
  width: calc(100% - 32px);
  position: absolute;
  bottom: 16px;
`;

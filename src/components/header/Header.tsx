import BtnWrapper from '@components/common/IconBtnWrapper';
import IconBtnWrapper from '@components/common/IconBtnWrapper';
import Typography from '@components/common/Typography';
import React from 'react';
import { common } from 'src/styles/common';
import { HeaderElementProps } from 'src/types/layout';

import styled from 'styled-components';

const Header: React.FC<HeaderElementProps> = ({
  leftContent1,
  leftContent2,
  title,
  rightContent1,
  rightContent2,
  leftContentOnClick,
  rightContentOnClick1,
  rightContentOnClick2,
  style,
}) => {
  return (
    <HeaderElement style={style}>
      <LeftElement>
        {/* 1번 영역: 아이콘 또는 텍스트 */}
        {typeof leftContent1 === 'string' ? (
          <Typography $variant='subtitle1' style={{ padding: '16px' }}>
            {leftContent1}
          </Typography>
        ) : (
          <BtnWrapper onClick={leftContentOnClick}>{leftContent1}</BtnWrapper>
        )}
        {/* 2번 영역: 텍스트 */}
        {leftContent2 && <Typography $variant='subtitle1'>{leftContent2}</Typography>}
      </LeftElement>

      {/* 3번 영역: 제목 */}
      {title && (
        <Typography $variant='subtitle1' style={{ padding: '16px', flex: 2 }}>
          {title}
        </Typography>
      )}
      <RightElement>
        {/* 4번 영역: 아이콘 */}
        {rightContent1 && <BtnWrapper onClick={rightContentOnClick1}>{rightContent1}</BtnWrapper>}
        {/* 5번 영역: 텍스트 버튼 또는 아이콘 */}
        {typeof rightContent2 === 'string' ? (
          <IconBtnWrapper onClick={rightContentOnClick2}>
            <Typography $variant='button2' style={{ padding: '16px' }}>
              {rightContent2}
            </Typography>
          </IconBtnWrapper>
        ) : (
          <IconBtnWrapper onClick={rightContentOnClick2}>{rightContent2}</IconBtnWrapper>
        )}
      </RightElement>
    </HeaderElement>
  );
};

export default Header;

const HeaderElement = styled.div`
  height: 56px;
  text-align: center;
  ${common.flexRow}
  justify-content: space-between;
`;

const LeftElement = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 96px;
`;

const RightElement = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 96px;
`;

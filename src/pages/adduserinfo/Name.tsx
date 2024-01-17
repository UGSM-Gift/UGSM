import React from 'react';
import styled, { css } from 'styled-components';
import { UserDataProps } from 'src/modules/@types/common';
import Typography from '@components/common/Typography';
import Input from '@components/common/Input';
import { ReactComponent as CloseIcon } from '@assets/icons/closeIcon.svg';

const NameBox = styled.div``;

const Name: React.FC<UserDataProps> = ({ userData, setUserData, onFocus, onBlur }) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prevUserData) => ({ ...prevUserData, name: event.target.value }));
  };
  const handleNameReset = () => {
    setUserData((prevUserData) => ({ ...prevUserData, name: '' }));
  };

  return (
    <NameBox>
      <Typography
        $variant={'title1'}
        $style={css`
          margin-bottom: 100px;
        `}
      >
        반가워요! <br />
        이름이 어떻게 되시나요?
      </Typography>
      <Input onClick={handleNameReset}>
        <Input.TextInteractiveField
          onChange={handleNameChange}
          placeholder='이름을 입력해주세요'
          icon={<CloseIcon />}
          value={userData.name}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </Input>
    </NameBox>
  );
};

export default Name;

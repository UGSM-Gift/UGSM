import TypeButton from '../../components/userAuth/TypeButton';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { UserDataProps } from 'src/modules/@types/common';
import Typography from '@components/common/Typography';
import Input from '@components/common/Input';
import Button from '@components/common/button/Button';
const Gender: React.FC<UserDataProps> = ({ userData, setUserData }) => {
  const [selectedGender, setSelectedGender] = useState(userData.gender || null);
  // male female
  const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, birth: event.target.value });
  };

  const handleGenderChange = (selectedGender: string) => {
    setSelectedGender(selectedGender);
    setUserData({ ...userData, gender: selectedGender });
  };

  return (
    <GenderBox>
      <Typography
        $variant={'title1'}
        $style={css`
          margin-bottom: 100px;
        `}
      >
        {userData.nickname}님의 <br />
        생일과 성별을 확인해주세요
      </Typography>
      <Input label='생일'>
        <Input.TextField type='date' onChange={handleBirthdayChange} />
      </Input>
      <Typography $variant='subtitle2'>
        <Label>성별</Label>
      </Typography>
      <ButtonBox>
        <Button
          $variant={selectedGender === 'male' ? 'lightPrimary' : 'grayOutline'}
          radius='medium'
          size='small'
          onClick={() => handleGenderChange('male')}
        >
          남
        </Button>
        <Button
          $variant={selectedGender === 'female' ? 'lightPrimary' : 'grayOutline'}
          radius='medium'
          size='small'
          onClick={() => handleGenderChange('female')}
        >
          여
        </Button>
      </ButtonBox>
    </GenderBox>
  );
};

export default Gender;

const GenderBox = styled.div``;
const ButtonBox = styled.div`
  display: flex;
  gap: 9px;
`;
const Label = styled.div`
  margin: 24px 0 10px;
`;

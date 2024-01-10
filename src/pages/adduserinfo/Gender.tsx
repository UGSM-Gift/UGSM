import TypeButton from '../../components/userAuth/TypeButton';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { UserDataProps } from 'src/modules/@types/common';
import Typography from '@components/common/Typography';
import Input from '@components/common/Input';

const Gender: React.FC<UserDataProps> = ({ userData, setUserData }) => {
  const [gender, setGender] = useState<string>(userData.gender || '');
  const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, birth: event.target.value });
  };
  const handleGenderChange = (selectedGender: string) => {
    setUserData({ ...userData, gender: selectedGender });
    setGender(selectedGender);
  };

  return (
    <GenderBox>
      <Typography
        variant={'title1'}
        $style={css`
          margin-bottom: 100px;
        `}
      >
        {userData.nickname}님의 <br />
        생일과 성별을 확인해주세요
      </Typography>

      <Input onChange={handleBirthdayChange} label='생일'>
        <Input.DateField />
      </Input>
      <label>성별</label>
      {/* <ButtonBox>
        <Button variant={'lightPrimary'} radius='medium'>
          남
        </Button>
        <Button variant={'lightGhost'} radius='medium'>
          여
        </Button>
      </ButtonBox> */}

      <TypeButtonBox>
        <TypeButton type='남자' setType={(type) => handleGenderChange(type)} selectedType={gender} />
        <TypeButton type='여자' setType={(type) => handleGenderChange(type)} selectedType={gender} />
      </TypeButtonBox>
    </GenderBox>
  );
};

export default Gender;

const GenderBox = styled.div``;

const TypeButtonBox = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

import Input from '@components/common/Input';
import Profile from '@components/mypage/Profile';
import React, { useEffect, useState } from 'react';
import { userData, userDataPost } from 'src/api/userData';
import { ReactComponent as EditIcon } from '@assets/icons/editIcon.svg';
import { common } from 'src/styles/common';
import { UserData } from 'src/types/userData';
import styled from 'styled-components';
import BasicLayout from '../layout/BasicLayout';
import IconBtnWrapper from '@components/common/IconBtnWrapper';
import instance from 'src/api/axios';
import Typography from '@components/common/Typography';
import Button from '@components/common/button/Button';
import { colors } from 'src/styles/colors';

const mockData = {
  name: '양양',
  nickname: '최주희',
  gender: 'male',
  mobile: '01032986409',
  birthdate: '1998-12-25',
};
//  + 성별
const UserProfileEdit = () => {
  const [userSettingData, setUserSettingData] = useState<UserData>({
    birthdate: '',
    name: '',
    gender: '',
    nickname: '',
    mobile: '',
    profileImageUrl: '',
  });
  const [selectedGender, setSelectedGender] = useState(userSettingData.gender || null);

  // function PhoneNumber(phoneNumber: string) {
  //   return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;
  // }
  const { birthdate, name, gender, nickname, mobile, profileImageUrl } = userSettingData;
  const fetchUserData = async () => {
    try {
      const response = await userData();
      const user = response.data;
      const userSettingData = {
        birthdate: user.birthdate || '',
        gender: user.gender || '',
        name: user.name || '',
        nickname: user.nickname || '',
        mobile: user.mobile || '',
        profileImageUrl: user.profileImageUrl || null,
      };
      console.log('데이터가져오기', userSettingData);
      setUserSettingData(userSettingData);
    } catch (error) {
      console.error('데이터 가져오기에 실패했습니다.', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // 이름
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSettingData((prevUserData) => ({ ...prevUserData, name: event.target.value }));
  };
  // 닉네임
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSettingData((prevUserData) => ({ ...prevUserData, nickname: event.target.value }));
  };

  // 휴대폰 번호
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSettingData((prevUserData) => ({ ...prevUserData, mobile: event.target.value }));
  };
  // 생일 수정
  const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSettingData((prevUserData) => ({ ...prevUserData, birthdate: event.target.value }));
  };

  const handleGenderChange = (selectedGender: string) => {
    setSelectedGender(selectedGender);
    setUserSettingData((prevUserData) => ({ ...prevUserData, gender: selectedGender }));
  };

  const handleEdit = async (userData: UserData) => {
    const user = await userDataPost(userData);
    console.log(user);
  };

  return (
    <BasicLayout>
      <ContentContainer>
        <ProfileEditBox>
          <Profile userData={userSettingData} />
          <IconBtnWrapper>
            <EditIcon />
          </IconBtnWrapper>
        </ProfileEditBox>
        <div onClick={() => handleEdit(userSettingData)}>수정하기</div>
        <InputContainer>
          <Input label='이름'>
            <Input.TextField value={userSettingData.name} onChange={handleNameChange} />
          </Input>
          <Input label='닉네임'>
            <Input.TextField value={userSettingData.nickname} onChange={handleNicknameChange} />
          </Input>
          <Divider />
          <Input label='생일'>
            <Input.TextField
              type='date'
              value={userSettingData.birthdate}
              onChange={handleBirthdayChange}
            />
          </Input>
          <GenderInput>
            <Typography $variant='subtitle2'>
              <Label>성별</Label>
            </Typography>
            <ButtonBox>
              <Button
                $variant={userSettingData.gender === 'MALE' ? 'lightPrimary' : 'grayOutline'}
                radius='medium'
                size='small'
                onClick={() => handleGenderChange('MALE')}
              >
                남
              </Button>
              <Button
                $variant={userSettingData.gender === 'FEMALE' ? 'lightPrimary' : 'grayOutline'}
                radius='medium'
                size='small'
                onClick={() => handleGenderChange('FEMALE')}
              >
                여
              </Button>
            </ButtonBox>
          </GenderInput>

          <Input label='전화번호'>
            <Input.TextField value={userSettingData.mobile} onChange={handlePhoneChange} />
          </Input>
        </InputContainer>
      </ContentContainer>
    </BasicLayout>
  );
};

export default UserProfileEdit;

const ContentContainer = styled.div`
  padding-bottom: 76px;
  ${common.flexCenterColumn}
`;

const ProfileEditBox = styled.div`
  position: relative;
`;

const InputContainer = styled.div`
  width: 100%;
  ${common.flexColumn}
  gap:12px;
`;

const GenderInput = styled.div`
  width: 100%;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 9px;
`;

const Label = styled.div`
  margin-bottom: 10px;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: ${colors.gray[10]};
  margin: 24px 0;
`;

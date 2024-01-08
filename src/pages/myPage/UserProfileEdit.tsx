import BtnWrapper from '@components/common/BtnWrapper';
import Input from '@components/common/Input';
import Profile from '@components/mypage/Profile';
import React, { useEffect, useState } from 'react';
import { userData } from 'src/api/userData';
import EditIcon from 'src/assets/icons/EditIcon';
import { common } from 'src/styles/common';
import { UserData } from 'src/types/userData';
import styled from 'styled-components';
import BasicLayout from '../layout/BasicLayout';
import { colors } from 'src/styles/colors';
import axios from 'axios';
const UserProfileEdit = () => {
  const accessToken = window.localStorage.getItem('accessToken');

  const [userSettingData, setUserSettingData] = useState<UserData>({
    birthdate: '',
    name: '',
    gender: '',
    nickname: '',
    mobile: '',
    userProfileUrl: null,
  });
  // function PhoneNumber(phoneNumber: string) {
  //   return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;
  // }

  const fetchUserData = async () => {
    try {
      const response = await userData();
      const userSettingData = {
        birthdate: response.data.birthdate,
        gender: response.data.gender,
        name: response.data.name,
        nickname: response.data.nickname,
        mobile: response.data.mobile,
        userProfileUrl: response.data.profileImageUrl,
      };
      setUserSettingData(userSettingData);
    } catch (error) {
      console.error('데이터 가져오기에 실패했습니다.', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSettingData((prevUserData) => ({ ...prevUserData, name: event.target.value }));
  };
  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSettingData((prevUserData) => ({ ...prevUserData, nickname: event.target.value }));
  };

  // 휴대폰 번호 입력
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserSettingData((prevUserData) => ({ ...prevUserData, mobile: event.target.value }));
  };
  const userMockData = {
    birthdate: '1999-12-24',
    gender: 'MALE',
    name: 'newName',
    nickname: 'newNickname',
    mobile: '01055556666',
    userProfileUrl: null,
  };
  // 유저데이터 전송
  const userDataPost = async (userData: UserData) => {
    try {
      const response = await axios.put(`https://www.ugsm.co.kr/api/user/me`, userData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (userData: UserData) => {
    userDataPost(userData);
  };

  return (
    <BasicLayout>
      <ContentContainer>
        <ProfileEditBox>
          <Profile userData={userSettingData} />
          <Icon onClick={() => handleEdit(userMockData)}>
            <EditIcon />
          </Icon>
        </ProfileEditBox>
        <Input label='이름'>
          <Input.TextField value={userSettingData.nickname} onChange={handleNameChange} />
        </Input>
        <Input label='닉네임'>
          <Input.TextField value={userSettingData.nickname} onChange={handleNicknameChange} />
        </Input>
        생일성별
        <Input label='전화번호'>
          <Input.TextField value={userSettingData.mobile} onChange={handlePhoneChange} />
        </Input>
      </ContentContainer>
    </BasicLayout>
  );
};

export default UserProfileEdit;

const ContentContainer = styled.div`
  ${common.flexCenterColumn}
`;
const ProfileEditBox = styled.div`
  position: relative;
`;
const Icon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  ${common.flexCenterColumn}
  width: 24px;
  height: 24px;
  border-radius: 20px;
  border: 3px solid ${colors.white};
  background-color: ${colors.sub[900]};
  box-sizing: content-box;
  cursor: pointer;
`;

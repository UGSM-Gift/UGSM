import Input from '@components/common/Input';
import Profile from '@components/mypage/Profile';
import React, { useEffect, useState } from 'react';
import { userData } from 'src/api/userData';
import { common } from 'src/styles/common';
import { UserData } from 'src/types/userData';
import styled from 'styled-components';
import BasicLayout from '../layout/BasicLayout';

const UserProfileEdit = () => {
  const [userSettingData, setUserSettingData] = useState<UserData>({
    birth: '',
    name: '',
    gender: '',
    nickname: '',
    mobile: '',
    userProfileUrl: '',
  });
  function formatPhoneNumber(phoneNumber: string) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7)}`;
  }

  const fetchUserData = async () => {
    try {
      const response = await userData();
      const userSettingData = {
        birth: response.data.birthdate,
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
  return (
    <BasicLayout>
      <ContentContainer>
        <Profile userData={userSettingData} />
        <Input label='이름'>
          <Input.TextField value={userSettingData.name} />
        </Input>
        <Input label='닉네임'>
          <Input.TextField value={userSettingData.nickname} />
        </Input>
        생일성별
        <Input label='전화번호'>
          <Input.TextField value={formatPhoneNumber(userSettingData.mobile)} />
        </Input>
      </ContentContainer>
    </BasicLayout>
  );
};

export default UserProfileEdit;

const ContentContainer = styled.div`
  ${common.flexCenterColumn}
`;

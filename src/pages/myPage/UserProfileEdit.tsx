import Input from '@components/common/Input';
import Profile from '@components/mypage/Profile';
import React, { useEffect, useState } from 'react';
import { userData } from 'src/api/userData';
import { UserData } from 'src/types/userData';
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
      <Input label='이름'>
        <Input.TextField value={userSettingData.nickname} />
      </Input>
      <Input label='닉네임'>
        <Input.TextField value={userSettingData.nickname} />
      </Input>
      생일성별
      <Input label='전화번호'>
        <Input.TextField value={userSettingData.mobile} />
      </Input>
    </BasicLayout>
  );
};

export default UserProfileEdit;

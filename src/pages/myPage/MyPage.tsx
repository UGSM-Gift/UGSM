import Typography from '@components/common/Typography';
import Anniversary from '@components/mypage/Anniversary';
import Profile from '@components/mypage/Profile';
import React, { useEffect, useState } from 'react';
import { userData } from 'src/api/userData';
import { common } from 'src/styles/common';
import { UserProfile } from 'src/types/userData';
import styled from 'styled-components';
import BasicLayout from '../layout/BasicLayout';

const MyPage = () => {
  const [userProfileData, setUserProfileData] = useState<UserProfile>({
    nickname: '',
    userProfileUrl: '',
    birthdata: '',
  });

  // userData 함수를 async 함수로 호출
  const fetchUserData = async () => {
    try {
      const response = await userData();
      const userProfile = {
        nickname: response.data.nickname,
        userProfileUrl: response.data.profileImageUrl,
        birthdata: response.data.birthdate,
      };
      setUserProfileData(userProfile);
    } catch (error) {
      console.error('데이터 가져오기에 실패했습니다.', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <BasicLayout>
      <ProfileBox>
        <Profile userData={userProfileData} />
        <Typography variant='title3'>{userProfileData.nickname}</Typography>
      </ProfileBox>
      <Anniversary userData={userProfileData} />
    </BasicLayout>
  );
};

export default MyPage;

const ProfileBox = styled.div`
  ${common.flexCenterColumn}
  gap: 10px;
`;

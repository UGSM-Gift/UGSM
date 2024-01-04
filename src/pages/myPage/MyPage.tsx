import Anniversary from '@components/mypage/Anniversary';
import Profile from '@components/mypage/Profile';
import React, { useEffect, useState } from 'react';
import { userData } from 'src/api/userData';
import { UserProfile } from 'src/types/userData';
import BasicLayout from '../layout/BasicLayout';

const MyPage = () => {
  const [userProfileData, setUserProfileData] = useState<UserProfile>({
    nickname: '',
    userProfileUrl: '',
    birth: '',
  });

  // userData 함수를 async 함수로 호출
  const fetchUserData = async () => {
    try {
      const response = await userData();
      console.log(response);
      const userProfile = {
        nickname: response.data.nickname,
        userProfileUrl: response.data.profileImageUrl,
        birth: response.data.birthdate,
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
      <Profile userData={userProfileData} />
      <Anniversary userData={userProfileData} />
    </BasicLayout>
  );
};

export default MyPage;

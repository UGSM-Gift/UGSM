import Typography from '@components/common/Typography';
import Anniversary from '@components/mypage/Anniversary';
import Profile from '@components/mypage/Profile';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import instance from 'src/api/axios';
import { userData } from 'src/api/userData';
import { common } from 'src/styles/common';
import { UserProfile } from 'src/types/userData';
import styled from 'styled-components';
import BasicLayout from '../layout/BasicLayout';

type deleteType = {
  deletionReasonId: number;
  details: null;
};
const MyPage = () => {
  const [userProfileData, setUserProfileData] = useState<UserProfile>({
    nickname: '',
    profileImageUrl: '',
    birthdate: '',
  });

  const { nickname } = userProfileData;

  const fetchUserData = async () => {
    try {
      const response = await userData();
      const userProfile = {
        nickname: response.data.nickname,
        profileImageUrl: response.data.profileImageUrl,
        birthdate: response.data.birthdate,
      };
      console.log(userProfile);
      setUserProfileData(userProfile);
    } catch (error) {
      console.error('데이터 가져오기에 실패했습니다.', error);
    }
  };

  const deleteUserData = async () => {
    const reason: deleteType = {
      deletionReasonId: 1,
      details: null,
    };
    try {
      const response = await axios.delete(`/api/user/me`, {
        headers: {
          'Content-Type': `application/json`,
        },
        data: reason,
      });
      console.log(response);
    } catch (error) {
      console.error('데이터 삭제에 실패', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <BasicLayout>
      <div onClick={deleteUserData}>탈퇴</div>
      <ProfileBox>
        <Profile userData={userProfileData} />
        <Typography $variant='title3'>{nickname}</Typography>
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

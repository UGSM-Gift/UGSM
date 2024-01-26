import Typography from '@components/common/Typography';
import Anniversary from '@components/mypage/Anniversary';
import Profile from '@components/mypage/Profile';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from 'src/api/axios';
import { userData } from 'src/api/userData';
import { notice } from 'src/constants/setting';
import { colors } from 'src/styles/colors';
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
  const navigator = useNavigate();
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
      const response = await instance.delete(`/api/user/me`, {
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
      <Anniversary userData={userProfileData} onClick={() => navigator('/mypage/setting/anniversary')} />
      <Divider />
      <List>
        {notice.map((setting, index) => (
          <div key={index}>
            <ListItem>
              <Typography $variant='button2'>{setting.name}</Typography>
            </ListItem>
          </div>
        ))}
      </List>
    </BasicLayout>
  );
};

export default MyPage;

const ProfileBox = styled.div`
  ${common.flexCenterColumn}
  gap: 10px;
`;

const Divider = styled.hr`
  height: 8px;
  background: ${colors.gray[10]};
  margin-left: -16px;
  margin-right: -16px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${colors.gray[10]};
  cursor: pointer;
`;

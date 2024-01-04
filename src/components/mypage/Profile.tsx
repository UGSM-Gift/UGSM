import Typography from '@components/common/Typography';
import React from 'react';
import UserProfileIcon from 'src/assets/icons/UserProfileIcon';
import { common } from 'src/styles/common';
import { UserData } from 'src/types/userData';
import styled from 'styled-components';

const Profile = ({ userData }: { userData: UserData }) => {
  return (
    <ProfileBox>
      {userData.userProfileUrl === null ? (
        <UserProfileIcon />
      ) : (
        <img src={userData.userProfileUrl} alt='userImg' />
      )}
      <Typography variant='title3'>{userData.nickname}</Typography>
    </ProfileBox>
  );
};

export default Profile;

const ProfileBox = styled.div`
  ${common.flexCenterColumn}
  gap: 10px;
`;

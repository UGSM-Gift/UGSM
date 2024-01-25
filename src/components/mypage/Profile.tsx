import React from 'react';
import UserProfileIcon from 'src/assets/icons/UserProfileIcon';
import { RADIUS } from 'src/constants/style';
import styled from 'styled-components';

const Profile = ({ userData, img }: { userData: any; img?: string }) => {
  return (
    <ProfileBox>
      {userData.profileImageUrl === null ? (
        img ? (
          <img src={img} alt='userImg' />
        ) : (
          <UserProfileIcon />
        )
      ) : (
        <img src={userData.profileImageUrl} alt='userImg' />
      )}
    </ProfileBox>
  );
};

export default Profile;

const ProfileBox = styled.div`
  width: 84px;
  height: 84px;
  border-radius: ${RADIUS.large};
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

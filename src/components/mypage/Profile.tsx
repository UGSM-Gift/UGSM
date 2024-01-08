import React from 'react';
import UserProfileIcon from 'src/assets/icons/UserProfileIcon';
import { UserProfile } from 'src/types/userData';

const Profile = ({ userData }: { userData: UserProfile }) => {
  return (
    <>
      {userData.userProfileUrl === null ? (
        <UserProfileIcon />
      ) : (
        <img src={userData.userProfileUrl} alt='userImg' />
      )}
    </>
  );
};

export default Profile;

import React from 'react';
import UserProfileIcon from 'src/assets/icons/UserProfileIcon';

const Profile = ({ userData }: { userData: any }) => {
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

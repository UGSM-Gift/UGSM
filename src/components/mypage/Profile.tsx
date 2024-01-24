import React from 'react';
import UserProfileIcon from 'src/assets/icons/UserProfileIcon';

const Profile = ({ userData }: { userData: any }) => {
  return (
    <>
      {userData.profileImageUrl === null ? (
        <UserProfileIcon />
      ) : (
        <img src={userData.profileImageUrl} alt='userImg' />
      )}
    </>
  );
};

export default Profile;

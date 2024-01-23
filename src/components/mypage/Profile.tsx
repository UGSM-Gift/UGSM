import React from 'react';
import UserProfileIcon from 'src/assets/icons/UserProfileIcon';

const Profile = ({ userData }: { userData: any }) => {
  return (
    <>
      {userData.profileImgFile === null ? (
        <UserProfileIcon />
      ) : (
        <img src={userData.profileImgFile} alt='userImg' />
      )}
    </>
  );
};

export default Profile;

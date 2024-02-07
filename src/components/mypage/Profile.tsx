import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import { imgSize } from 'src/api/fetchImg';
import UserProfileIcon from 'src/assets/icons/UserProfileIcon';
import { RADIUS } from 'src/constants/style';
import styled from 'styled-components';

const Profile = ({ userData, img }: { userData: any; img?: string }) => {
  const [width, setWidth] = useState(imgSize());
  useEffect(() => {
    const handleResize = debounce(() => setWidth(imgSize()), 300); // 300ms 동안 debounce
    window.addEventListener('resize', handleResize);

    return () => {
      handleResize.cancel(); // debounce된 함수의 대기 중인 호출을 취소
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  console.log(`${userData.profileImageUrl}?w=${width}&f=webp`);
  return (
    <ProfileBox>
      {userData.profileImageUrl === null ? (
        <UserProfileIcon />
      ) : (
        <img src={`${userData.profileImageUrl}?w=${width}&f=webp`} alt='userImg' />
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

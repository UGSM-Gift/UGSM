import { NavigateFunction } from 'react-router-dom';
import { UserProfileData } from 'src/modules/@types/common';
import instance from './axios';

export const userData = async () => {
  try {
    const response = await instance.get('/api/user/me', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 전화번호 서버 전송
export const phoneAuthPost = async (phone: string) => {
  try {
    const phoneAuth = { phoneNumber: phone.replace(/-/g, '') };
    await instance.post('/api/verification-code', phoneAuth, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// 유저데이터 업데이트
export const userDataPost = async (userData: UserProfileData) => {
  const formattedPhone = userData.mobile.replace(/-/g, '');
  const updatedUserData = { ...userData, mobile: formattedPhone };
  console.log(updatedUserData);
  try {
    const response = await instance.put(`/api/user/me`, updatedUserData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response, '사용자 정보 수정 요청');
    return response;
  } catch (error) {
    console.log(error);
    return false;
  }
};

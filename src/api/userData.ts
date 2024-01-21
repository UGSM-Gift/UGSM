import { NavigateFunction } from 'react-router-dom';
import { UserProfileData } from 'src/modules/@types/common';
import instance from './axios';

export const userData = async () => {
  try {
    const response = await instance.get('https://www.ugsm.co.kr/api/user/me', {
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
    await instance.post('https://www.ugsm.co.kr/api/verification-code', phoneAuth, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// 유저데이터 전송
export const userDataPost = async (userData: UserProfileData, navigator: NavigateFunction) => {
  try {
    await instance.put(`https://www.ugsm.co.kr/api/user/me`, userData);
    navigator('/');
  } catch (error) {
    console.log(error);
  }
};

import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { UserProfileData } from 'src/modules/@types/common';

export const userData = async () => {
  const accessToken = window.localStorage.getItem('accessToken');
  if (!accessToken) return alert('토큰없음');
  try {
    const response = await axios.get('https://www.ugsm.co.kr/api/user/me', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 전화번호 서버 전송
export const phoneAuthPost = async (phone: string, accessToken: string | null) => {
  try {
    const phoneAuth = { phoneNumber: phone.replace(/-/g, '') };
    await axios.post('https://www.ugsm.co.kr/api/verification-code', phoneAuth, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// 유저데이터 전송
export const userDataPost = async (
  userData: UserProfileData,
  accessToken: string | null,
  navigator: NavigateFunction
) => {
  try {
    const response = await axios.put(`https://www.ugsm.co.kr/api/user/me`, userData, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    navigator('/');
  } catch (error) {
    console.log(error);
  }
};

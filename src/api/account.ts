import axios from 'axios';
import instance from './axios';

// 번호인증 서버 전송
export const phoneAuthPut = async (phoneAuthNumber: string, phone: string, setTimer?: any) => {
  const phoneNumber = { receiverPhoneNumber: phone.replace(/-/g, '') };
  // 요청 성공 시 타이머 초기화
  if (typeof setTimer === 'function') {
    setTimer(60);
  }

  try {
    const response = await instance.put(`/api/verification-code/${phoneAuthNumber}`, phoneNumber, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};

// 닉네임 중복검사
export const checkNicknameDuplication = async (nickname: string) => {
  const token = localStorage.getItem('accessToken');
  try {
    const response = await axios.get(`https://www.ugsm.co.kr/api/user/check-nickname/${nickname}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data.valid;
  } catch (error) {
    console.error('Nickname duplication check failed:', error);
  }
};

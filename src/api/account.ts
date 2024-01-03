import axios from 'axios';

// 번호인증 서버 전송
export const phoneAuthPut = async (
  phoneAuthNumber: string,
  phone: string,
  accessToken: any,
  setTimer?: any
) => {
  const phoneNumber = { receiverPhoneNumber: phone };
  // 요청 성공 시 타이머 초기화
  setTimer(60);
  try {
    await axios.put(`https://www.ugsm.co.kr/api/verification-code/${phoneAuthNumber}`, phoneNumber, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

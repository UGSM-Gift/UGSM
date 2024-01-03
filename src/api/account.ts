import axios from 'axios';

// 번호인증 서버 전송
export const phoneAuthPut = async (phoneAuthNumber: string, phone: string, accessToken: any) => {
  const phoneNumber = { receiverPhoneNumber: phone };
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

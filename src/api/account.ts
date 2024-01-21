import instance from './axios';

// 번호인증 서버 전송
export const phoneAuthPut = async (phoneAuthNumber: string, phone: string, setTimer?: any) => {
  const phoneNumber = { receiverPhoneNumber: phone.replace(/-/g, '') };
  // 요청 성공 시 타이머 초기화
  if (typeof setTimer === 'function') {
    setTimer(60);
  }

  try {
    const response = await instance.put(
      `https://www.ugsm.co.kr/api/verification-code/${phoneAuthNumber}`,
      phoneNumber,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

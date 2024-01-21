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

// 닉네임 중복검사
export const checkNicknameDuplication = async (nickname: string) => {
  try {
    const response = await instance.get(`api/user/check-nickname/${nickname}`);
    console.log(response);
    // 여기서 response를 바탕으로 중복 여부를 판단합니다.
    // 예: setIsNicknameError(response.data.isDuplicated);
  } catch (error) {
    console.error('Nickname duplication check failed:', error);
  }
};

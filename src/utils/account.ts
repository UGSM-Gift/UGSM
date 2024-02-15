// 전화번호 형식을 조정하는 함수
export const formatPhoneNumber = (number: string) => {
  // 숫자만 추출
  const onlyNums = number.replace(/[^\d]/g, '');

  // 전화번호 길이에 따라 포맷 변환
  if (onlyNums.length <= 3) {
    return onlyNums;
  } else if (onlyNums.length <= 6) {
    // 010-123 형식
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
  } else if (onlyNums.length <= 10) {
    // 010-123-456 형식
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 6)}-${onlyNums.slice(6)}`;
  } else {
    // 010-1234-5678 형식 (11자리 초과하는 경우도 11자리로 제한)
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`;
  }
};

export const validatePhoneNumber = (phone: string) => {
  // 전화번호 유효성 검증 로직
  const regex = /^(02|031|032|033|041|042|043|044|051|052|053|054|055|061|062|063|064|050|010)\d{7,8}$/;

  // 하이픈이 있는 경우 제거
  const phoneNumber = phone.replace(/-/g, '');
  console.log(phoneNumber);
  return regex.test(phoneNumber);
};

// validateInput
export const validateName = (name: string) => {
  return name.trim().length > 0;
};

export const validateNickname = (nickname: string) => {
  return /^[가-힣a-zA-Z0-9]{2,16}$/.test(nickname);
};

export const validateBirthAndGender = (birth: string, gender: string) => {
  return birth !== '' && gender !== '';
};

export const validatePhoneAuthNumber = (phoneAuthNumber: string) => {
  const regexp = /^\d{6}$/;
  return regexp.test(phoneAuthNumber);
};

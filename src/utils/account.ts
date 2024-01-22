// 전화번호 형식을 조정하는 함수
export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  // 숫자만 추출
  const phoneNumber = value.replace(/[^\d]/g, '');

  // 각 구간별로 숫자를 분할
  const phoneNumberParts = [];
  const part1 = phoneNumber.slice(0, 3);
  const part2 = phoneNumber.slice(3, 7);
  const part3 = phoneNumber.slice(7, 11);

  if (part1) phoneNumberParts.push(part1);
  if (part2) phoneNumberParts.push(part2);
  if (part3) phoneNumberParts.push(part3);

  // 하이픈으로 연결
  return phoneNumberParts.join('-');
};

export const validatePhoneNumber = (phone: string) => {
  // 전화번호 유효성 검증 로직
  const phoneNumber = phone.replace(/-/g, '');
  const regex = /^010\d{8}$/;
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
  const regexp = /\d{6}$/;
  return regexp.test(phoneAuthNumber);
};

export const isSameDay = (
  firstDate: { getDate: () => Date; getMonth: () => Date; getFullYear: () => Date },
  secondDate: { getDate: () => Date; getMonth: () => Date; getFullYear: () => Date }
) => {
  return (
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
  );
};

export const isSameMonth = (
  firstDate: { getMonth: () => Date },
  secondDate: { getMonth: () => Date }
) => {
  return firstDate.getMonth() === secondDate.getMonth();
};

// 날짜를 YYYY-MM-DD 형식으로 변환하는 함수
export const formatDate = (date: {
  getFullYear: () => any;
  getMonth: () => number;
  getDate: () => any;
}) => {
  const year = date.getFullYear(); // 연도
  const month = date.getMonth() + 1; // 월 (0부터 시작하므로 1을 더함)
  const day = date.getDate(); // 일

  // MM-DD 형식을 맞추기 위해 한 자리수 월/일 앞에 0을 추가
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  // 최종적으로 포맷된 문자열 반환
  return `${year}-${formattedMonth}-${formattedDay}`;
};

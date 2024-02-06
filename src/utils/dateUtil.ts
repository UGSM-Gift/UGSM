// dateUtils.js 또는 유틸리티 폴더 내의 별도 파일로 분리합니다.
export const isSameDay = (
  firstDate: { getDate: () => any; getMonth: () => any; getFullYear: () => any },
  secondDate: { getDate: () => any; getMonth: () => any; getFullYear: () => any }
) => {
  return (
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
  );
};

export const isSameMonth = (firstDate: { getMonth: () => any }, secondDate: { getMonth: () => any }) => {
  return firstDate.getMonth() === secondDate.getMonth();
};

// dateUtils.js 또는 유틸리티 폴더 내의 별도 파일로 분리합니다.
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

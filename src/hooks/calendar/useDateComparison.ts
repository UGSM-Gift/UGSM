import { isSameDay, isSameMonth } from 'src/utils/dateUtil';

export const useDateComparison = (
  currentMonth: { getMonth: () => any },
  selectedDate: { getDate: () => any; getMonth: () => any; getFullYear: () => any }
) => {
  const today = new Date();

  const isToday = (day: { getDate: () => any; getMonth: () => any; getFullYear: () => any }) => {
    return isSameDay(day, today);
  };

  const isSelected = (day: { getDate: () => any; getMonth: () => any; getFullYear: () => any }) => {
    return selectedDate ? isSameDay(day, selectedDate) : false;
  };

  const isCurrentMonth = (day: { getMonth: () => any }) => {
    return isSameMonth(day, currentMonth);
  };

  return { isToday, isSelected, isCurrentMonth };
};

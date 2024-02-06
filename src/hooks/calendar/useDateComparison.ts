import { isSameDay, isSameMonth } from 'date-fns';

export const useDateComparison = (currentMonth: Date, selectedDate: Date | null) => {
  const today = new Date();

  const isToday = (day: Date): boolean => {
    return isSameDay(day, today);
  };

  const isSelected = (day: Date): boolean => {
    return selectedDate ? isSameDay(day, selectedDate) : false;
  };

  const isCurrentMonth = (day: Date): boolean => {
    // `currentMonth`가 `Date` 타입이므로, 직접 비교를 수행합니다.
    return isSameMonth(day, currentMonth);
  };

  return { isToday, isSelected, isCurrentMonth };
};

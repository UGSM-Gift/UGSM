import React, { useEffect, useRef, useState } from 'react';
import { colors } from 'src/styles/colors';
import styled from 'styled-components';

const DateWheelPicker = () => {
  const yearWheelRef = useRef<HTMLDivElement>(null);
  const monthWheelRef = useRef<HTMLDivElement>(null);
  const dayWheelRef = useRef<HTMLDivElement>(null);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);

  const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  useEffect(() => {
    const calculateCenterItemIndex = (ref: React.RefObject<HTMLDivElement>) => {
      if (!ref.current || !ref.current.firstChild) return null;

      const firstChildElement = ref.current.firstChild as HTMLElement;
      const itemHeight = firstChildElement.offsetHeight;
      const scrollOffset = ref.current.scrollTop;
      const wheelHeight = ref.current.clientHeight;

      return Math.round((scrollOffset + wheelHeight / 2) / itemHeight);
    };

    const handleYearScroll = () => {
      const index = calculateCenterItemIndex(yearWheelRef);
      if (index !== null) setSelectedYear(years[index] + 1);
    };

    const handleMonthScroll = () => {
      const index = calculateCenterItemIndex(monthWheelRef);
      if (index !== null) setSelectedMonth(index);
    };

    const handleDayScroll = () => {
      const index = calculateCenterItemIndex(dayWheelRef);
      if (index !== null) setSelectedDay(index);
    };

    // 각각의 ref에 대한 이벤트 리스너 등록
    const yearWheel = yearWheelRef.current;
    const monthWheel = monthWheelRef.current;
    const dayWheel = dayWheelRef.current;

    if (yearWheel) {
      yearWheel.addEventListener('scroll', handleYearScroll);
    }
    if (monthWheel) {
      monthWheel.addEventListener('scroll', handleMonthScroll);
    }
    if (dayWheel) {
      dayWheel.addEventListener('scroll', handleDayScroll);
    }

    // Cleanup 함수에서 각각의 이벤트 리스너 제거
    return () => {
      if (yearWheel) {
        yearWheel.removeEventListener('scroll', handleYearScroll);
      }
      if (monthWheel) {
        monthWheel.removeEventListener('scroll', handleMonthScroll);
      }
      if (dayWheel) {
        dayWheel.removeEventListener('scroll', handleDayScroll);
      }
    };
  }, [yearWheelRef, monthWheelRef, dayWheelRef]);

  const centerSelectedItem = (ref: { current: any }, index: number, itemHeight: number) => {
    if (!ref.current) return;
    const newScrollTop = index * itemHeight - ref.current.clientHeight / 2 + itemHeight / 2;
    ref.current.scrollTo({ top: newScrollTop, behavior: 'smooth' });
  };

  return (
    <DateWheelPickerContainer>
      <Wheel ref={yearWheelRef}>
        {years.map((year, index) => {
          return (
            <WheelItem
              key={year}
              className={year === selectedYear ? 'selected' : ''}
              onClick={() => {
                setSelectedYear(index);
                centerSelectedItem(yearWheelRef, index, 30);
              }}
            >
              {year}
            </WheelItem>
          );
        })}
      </Wheel>

      <Divider>/</Divider>
      <Wheel ref={monthWheelRef}>
        {months.map((month) => (
          <WheelItem
            key={month}
            className={month === selectedMonth ? 'selected' : ''}
            onClick={() => {
              setSelectedMonth(month);
              centerSelectedItem(monthWheelRef, month - 1, 30);
            }}
          >
            {month}
          </WheelItem>
        ))}
      </Wheel>
      <Divider>/</Divider>
      <Wheel ref={dayWheelRef}>
        {days.map((day) => (
          <WheelItem
            key={day}
            className={day === selectedDay ? 'selected' : ''}
            onClick={() => {
              setSelectedDay(day);
              centerSelectedItem(dayWheelRef, day - 1, 30);
            }}
          >
            {day}
          </WheelItem>
        ))}
      </Wheel>
    </DateWheelPickerContainer>
  );
};

export default DateWheelPicker;

const DateWheelPickerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
`;

const Wheel = styled.div`
  overflow-y: scroll;
  height: 120px;
  scroll-snap-type: y mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  & > div {
    scroll-snap-align: start;
  }
`;

const WheelItem = styled.div`
  text-align: center;
  user-select: none;
  font-size: 20px;
  opacity: 0.4;
  padding: 10px 15px;
  color: ${colors.black};
  height: 40px;

  &.selected {
    font-weight: 600;
    border-top: 2px solid ${colors.primary[200]};
    border-bottom: 2px solid ${colors.primary[200]};
    opacity: 1;
  }
`;

const Divider = styled.div`
  margin: 0 20px;
  font-weight: 300;
  font-size: 30px;
  line-height: 33px;
  color: ${colors.gray[70]};
`;

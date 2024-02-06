'use client';
import React, { useEffect, useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import useCalendar from 'src/hooks/calendar/useCalendar';
import { colors } from 'src/styles/colors';
import styled from 'styled-components';

interface DayContainerProps {
  $isToday: boolean;
  $isSelected?: boolean;
  $isWeekend: boolean;
  $isCurrentMonth: boolean;
}

const CalendarForm = () => {
  const { weeks } = useCalendar();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const today = new Date();

  const isToday = (day: Date) => day.getDate() === today.getDate();
  const isSelected = (day: Date) => selectedDate && day.getDate() === selectedDate.getDate();
  const isWeekend = (day: Date) => [0, 6].includes(day.getDay());
  const isCurrentMonth = (day: Date) => day.getMonth() === today.getMonth();

  const handleDayClick = (day: React.SetStateAction<Date | null>) => {
    setSelectedDate(day);
  };

  return (
    <CalendarContainer>
      {weeks.map((week, weekIndex) => (
        <WeekRow key={weekIndex}>
          {week.map((day, dayIndex) => (
            <DayContainer
              key={dayIndex}
              $isToday={isToday(day)}
              $isSelected={isSelected(day) ?? false}
              $isWeekend={isWeekend(day)}
              $isCurrentMonth={isCurrentMonth(day)}
              onClick={() => handleDayClick(day)}
            >
              {day.getDate()}
            </DayContainer>
          ))}
        </WeekRow>
      ))}
    </CalendarContainer>
  );
};

export default CalendarForm;

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WeekRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
`;

const DayContainer = styled.div<DayContainerProps>`
  flex: 1;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.$isToday ? `${colors.gray[10]}` : 'none')};
  border: 1px solid ${(props) => (props.$isSelected ? `${colors.primary[400]}` : 'none')};
  color: ${(props) => (props.$isSelected ? `${colors.primary[400]}` : `${colors.black}`)};
  opacity: ${(props) => (!props.$isCurrentMonth ? '0' : '1')};
`;

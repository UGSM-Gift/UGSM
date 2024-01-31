import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';

import styled from 'styled-components';
import { colors } from 'src/styles/colors';
type valueType = {
  year: number;
  month: number;
  day: number;
};
const CalendarForm = () => {
  const [selectedDay, setSelectedDay] = useState({
    year: 2024,
    month: 1,
    day: 1,
  });

  const handleDayChange = (value: valueType) => {
    console.log(value);
    if (value) {
      setSelectedDay({
        year: value.year,
        month: value.month,
        day: value.day,
      });
    }
  };
  return (
    <CalendarContainer>
      <Calendar
        value={selectedDay}
        onChange={handleDayChange}
        colorPrimary={`${colors.white}`}
        calendarClassName='custom-calendar' // and this
        calendarTodayClassName='custom-today-day' // also this
      />
    </CalendarContainer>
  );
};

export default CalendarForm;

const CalendarContainer = styled.div`
  .Calendar__day.-today:not(.-selectedStart):not(.-selectedEnd):not(.-selectedBetween)::after {
    content: none;
  }
  .custom-today-day {
    background-color: ${colors.gray[10]};
    border: none;
  }
  .custom-calendar .-selected {
    color: ${colors.primary[400]};
    border: 1px solid ${colors.primary[400]};
  }
`;

import React, { useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar } from 'react-modern-calendar-datepicker';

import styled from 'styled-components';
import { colors } from 'src/styles/colors';

const myCustomLocale = {
  // Months list by order
  months: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],

  // Week days by order
  weekDays: [
    {
      name: 'Sunday', // used for accessibility
      short: 'S', // displayed at the top of days' rows
      isWeekend: true, // is it a formal weekend or not?
    },
    {
      name: 'Monday',
      short: 'M',
    },
    {
      name: 'Tuesday',
      short: 'T',
    },
    {
      name: 'Wednesday',
      short: 'W',
    },
    {
      name: 'Thursday',
      short: 'T',
    },
    {
      name: 'Friday',
      short: 'F',
    },
    {
      name: 'Saturday',
      short: 'S',
      isWeekend: true,
    },
  ],

  // Just play around with this number between 0 and 6
  weekStartingIndex: 0,

  // Return a { year: number, month: number, day: number } object
  getToday(gregorainTodayObject: any) {
    return gregorainTodayObject; // You may want to convert this to your locale
  },

  // Return a native JavaScript date here
  toNativeDate(date: { year: number; month: number; day: number | undefined }) {
    return new Date(date.year, date.month - 1, date.day);
  },

  // Return a number for date's month length
  getMonthLength(date: { year: number; month: number }) {
    return new Date(date.year, date.month, 0).getDate();
  },

  // Transform a digit to your locale
  transformDigit(digit: any) {
    return digit; // Here you might want to transform digits to a different script
  },

  // Texts in the date picker
  nextMonth: '다음 달',
  previousMonth: '이전 달',
  openMonthSelector: '월 선택자 열기',
  openYearSelector: '년 선택자 열기',
  closeMonthSelector: '월 선택자 닫기',
  closeYearSelector: '년 선택자 닫기',
  from: '시작',
  to: '끝',
  defaultPlaceholder: '선택...',

  // For input range value
  digitSeparator: ',',

  // If your provide -2 for example, year will be 2 digited
  yearLetterSkip: 0,

  // Is your language rtl or ltr?
  isRtl: false,
};

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
        locale={myCustomLocale}
        calendarClassName='custom-calendar' // and this
        calendarTodayClassName='custom-today-day' // also this
      />
    </CalendarContainer>
  );
};

export default CalendarForm;

const CalendarContainer = styled.div`
  .Calendar__yearText {
    display: none;
  }

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

  .Calendar__weekDays {
    color: ${colors.gray[60]};
    font-weight: 600;
  }
  .Calendar__weekDays {
    :first-child {
      color: ${colors.primary[400]};
    }
    :last-child {
      color: ${colors.primary[400]};
    }
  }
`;

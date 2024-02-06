'use client';

import React, { useEffect, useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import useCalendar from 'src/hooks/calendar/useCalendar';

const CalendarForm = () => {
  const { weeks } = useCalendar();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const today = new Date();

  const isToday = (day: Date) => day.getDate() === today.getDate();

  const isSelectDay = (day: Date) => day.getDate() === selectedDate?.getDate();
  // 0: 일요일, 6: 토요일
  const isWeekend = (day: Date) => {
    const dayOfWeek = day.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };
  const isCurrentMonth = (day: Date) => day.getMonth() === today.getMonth();
  // useEffect(() => {
  //   console.log(weeks[4][6].getMonth());
  // });
  const handleDayClick = (day: Date) => {
    setSelectedDate(day);
  };

  return <div className='calender'></div>;
};

export default CalendarForm;

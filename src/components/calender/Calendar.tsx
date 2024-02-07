'use client';
import { addMonths, getDate, subMonths } from 'date-fns';
import { ReactComponent as ArrowIcon } from '@assets/icons/arrowIcon.svg';
import React, { useEffect, useState } from 'react';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import useCalendar from 'src/hooks/calendar/useCalendar';
import { colors } from 'src/styles/colors';
import { common } from 'src/styles/common';
import styled from 'styled-components';
import Typography from '@components/common/Typography';
import { useDateComparison } from 'src/hooks/calendar/useDateComparison';
import instance from 'src/api/axios';
import { formatDate } from 'src/utils/dateUtil';

type DayContainerProps = {
  $isToday: boolean;
  $isSelected?: boolean;
  $isCurrentMonth: boolean;
};

type AnniversaryProps = {
  name: string;
  imageId: number;
  date: string;
};
const WEEK_DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const mockDate = {
  name: '생일',
  imageId: 1,
  date: '2024-11-03',
};
const CalendarForm = () => {
  const [anniversary, setAnniversary] = useState<AnniversaryProps>({
    name: '',
    imageId: 0,
    date: '',
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { isToday, isSelected, isCurrentMonth } = useDateComparison(currentMonth, selectedDate);
  const { weeks } = useCalendar(currentMonth);
  const handlePrevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDayClick = async (day: React.SetStateAction<Date | null>) => {
    setSelectedDate(day);

    setAnniversary((prev) => {
      if (day instanceof Date) {
        const formattedDate = formatDate(day);
        return { ...prev, date: formattedDate };
      }
      return prev;
    });
    await fetchAnniversaryImg();
  };

  const addAnniversary = async () => {
    try {
      const response = await instance.post(`/api/user/me/anniversary`, mockDate, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAnniversaryImg = async () => {
    try {
      const response = await instance.get(`/api/anniversary-images`);
      return response.data.data[0].imageUrl;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Month>
        <ArrowIcon className='arrow-left' onClick={handlePrevMonth} />
        <Typography $variant='title3'>{`${currentMonth.getMonth() + 1}월`}</Typography>
        <ArrowIcon className='arrow-right' onClick={handleNextMonth} />
      </Month>
      <CalendarHeader>
        {WEEK_DAYS.map((day, index) => (
          <DayTitle key={index} $isWeekend={[0, 6].includes(index)}>
            {day}
          </DayTitle>
        ))}
      </CalendarHeader>
      <CalendarContainer>
        {weeks.map((week, weekIndex) => (
          <WeekRow key={weekIndex}>
            {week.map((day, dayIndex) => (
              <DayContainer
                key={dayIndex}
                $isToday={isToday(day)}
                $isSelected={isSelected(day) ?? false}
                $isCurrentMonth={isCurrentMonth(day)}
                onClick={() => handleDayClick(day)}
              >
                {day.getDate()}
              </DayContainer>
            ))}
          </WeekRow>
        ))}
      </CalendarContainer>
      <div onClick={addAnniversary}>완료하기</div>
    </>
  );
};

export default CalendarForm;

const Month = styled.div`
  ${common.flexCenter}
  gap:20px;
  width: 100%;
  margin-bottom: 10px;
  .arrow-left {
    transform: rotate(-90deg);
  }
  .arrow-right {
    transform: rotate(90deg);
  }
`;

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
  font-size: 15px;
  background-color: ${(props) => (props.$isToday ? `${colors.gray[10]}` : 'none')};
  border: 1px solid ${(props) => (props.$isSelected ? `${colors.primary[400]}` : 'none')};
  color: ${(props) => (props.$isSelected ? `${colors.primary[400]}` : `${colors.black}`)};
  visibility: ${(props) => (!props.$isCurrentMonth ? 'hidden' : '')};
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  padding: 10px 0;
  margin-bottom: 5px;
`;

const DayTitle = styled.div<{ $isWeekend: boolean }>`
  font-size: 15px;
  font-weight: 400;
  flex: 1;
  text-align: center;
  color: ${(props) => (props.$isWeekend ? `${colors.primary[400]}` : `${colors.gray[60]}`)};
`;

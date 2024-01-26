import React, { useState } from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border: 1px solid #ddd;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-weight: bold;
`;

const Weekdays = styled.div`
  display: flex;
`;

const Day = styled.div`
  width: 14.28%;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  &:nth-child(7n + 1) {
    color: #e74c3c; // 일요일 색상
  }
`;

const DaysGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DayNumber = styled.div`
  width: 14.28%;
  padding: 10px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }

  &.selected {
    background-color: #ecf0f1;
    border-radius: 50%;
  }
`;

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const renderDays = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(<DayNumber key={i}>{i}</DayNumber>);
    }
    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // 달과 연도를 렌더링하기 위한 포맷 함수
  const formatDate = (date: Date) => {
    const months = [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  return (
    <CalendarContainer>
      <Header>
        <button onClick={handlePrevMonth}>{'<'}</button>
        <span>{formatDate(currentDate)}</span>
        <button onClick={handleNextMonth}>{'>'}</button>
      </Header>
      <Weekdays>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((weekday, index) => (
          <Day key={index}>{weekday}</Day>
        ))}
      </Weekdays>
      <DaysGrid>{renderDays()}</DaysGrid>
    </CalendarContainer>
  );
};

export default Calendar;

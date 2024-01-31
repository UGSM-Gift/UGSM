import React, { useState } from 'react';
import styled from 'styled-components';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

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

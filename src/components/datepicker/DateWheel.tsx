import React, {useEffect, useRef, useState} from 'react';
import {colors} from 'src/styles/colors';
import styled from 'styled-components';

const currentDate = new Date()

const years = [-1,-1].concat(Array.from({length: 70}, (_, i) => currentDate.getFullYear() - i));
const months = Array.from({length: 36}, (_, i) => i % 12 + 1);
const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
const InitialDays = Array.from({length: daysInMonth * 3}, (_, i) => i % daysInMonth + 1);
interface DateWheelPickerProps {
  onDateChanged?: (date: Date)=>void
}

const DateWheelPicker = ({onDateChanged}:DateWheelPickerProps) => {
    const yearWheelRef = useRef<HTMLDivElement>(null);
    const monthWheelRef = useRef<HTMLDivElement>(null);
    const dayWheelRef = useRef<HTMLDivElement>(null);
    const daysTimerRef = useRef<NodeJS.Timeout | null>(null);
    const onDateChangedTimerRef = useRef<NodeJS.Timeout | null>(null);

    const [days, setDays] = useState(InitialDays);


    const [selectedDateIdx, setSelectedDateIdx] = useState({
        year: 2,
        month: currentDate.getMonth() + 12,
        day: currentDate.getDate() + daysInMonth - 1,
    })
    console.log(selectedDateIdx)

  useEffect(() => {
    if(daysTimerRef.current){
      clearTimeout(daysTimerRef.current)
    }
    daysTimerRef.current = setTimeout(()=>{
      if(!dayWheelRef.current) return
      const daysInMonth = new Date(years[selectedDateIdx.year], months[selectedDateIdx.month], 0).getDate();
      const newDays = Array.from({length: daysInMonth * 3}, (_, i) => i % daysInMonth + 1);
      const currentDay = days[selectedDateIdx.day]
      const selectedDay = currentDay > daysInMonth ? daysInMonth : currentDay

      const newIdx = Math.floor(selectedDateIdx.day / (days.length / 3)) * daysInMonth + selectedDay - 1;
      dayWheelRef.current.scrollTop = (newIdx - 2) * 40;
      setSelectedDateIdx(prev=>({...prev, day: newIdx}))
      setDays(newDays)

    }, 500)
  }, [selectedDateIdx.year, selectedDateIdx.month]);

  useEffect(() => {
    if(onDateChangedTimerRef.current){
      clearTimeout(onDateChangedTimerRef.current)
    }
    onDateChangedTimerRef.current = setTimeout(()=>{
      const selectedDate = new Date(years[selectedDateIdx.year], months[selectedDateIdx.month], days[selectedDateIdx.day])
      if(onDateChanged){
        onDateChanged(selectedDate)
      }
    }, 200)
  }, [days, onDateChanged, selectedDateIdx]);

    useEffect(() => {
        // 각 휠에 대한 초기 중앙 위치 설정
        const setInitialScrollPosition = (ref: React.RefObject<HTMLDivElement>, index: number, itemHeight: number) => {
            if (ref.current) {
                const centerPosition = (index - 2) * itemHeight; // index - 1은 배열이 0부터 시작하기 때문
                ref.current.scrollTop = centerPosition;
            }
        };
        // 초기 렌더링시 각 휠을 현재 선택된 연도, 월, 일의 중앙 위치로 스크롤
        setInitialScrollPosition(yearWheelRef, selectedDateIdx.year, 40)
        setInitialScrollPosition(monthWheelRef, selectedDateIdx.month, 40)
        setInitialScrollPosition(dayWheelRef, selectedDateIdx.day, 40)


        const handleYearScroll = () => {
            const index = calculateCenterItemIndex(yearWheelRef);
            if (index !== null) setSelectedDateIdx(prev => ({...prev, year: index}))
        };

        const handleMonthScroll = () => {
            if (!monthWheelRef.current) return

            const index = calculateCenterItemIndex(monthWheelRef);
            if (!index) return;

            let newIndex: number;
            if (index > 30) {
                newIndex = index - 12;
                const centerPosition = (newIndex - 3) * 40;
                monthWheelRef.current.scrollTop = centerPosition
            } else if (index < 6) {
                newIndex = index + 12;
                const centerPosition = (newIndex - 2) * 40;
                monthWheelRef.current.scrollTop = centerPosition
            } else {
                newIndex = index
            }
            setSelectedDateIdx(prev => ({...prev, month: newIndex}))
        };

        const handleDayScroll = () => {
          if (!dayWheelRef.current) return

          const index = calculateCenterItemIndex(dayWheelRef);
          if (!index) return;

          let newIndex: number;
          if (index > days.length / 3 * 2 + 10) {
            newIndex = index - days.length / 3;
            dayWheelRef.current.scrollTop = (newIndex - 2) * 40
          } else if (index < days.length / 3 - 20) {
            newIndex = index + days.length / 3;
            dayWheelRef.current.scrollTop = (newIndex - 2) * 40
          } else {
            newIndex = index
          }

          setSelectedDateIdx(prev => ({...prev, day: newIndex}))
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

    const handleItemClick = (ref: React.RefObject<HTMLDivElement>, index: number, itemHeight: number) => {
        if (ref.current) {
            const centerPosition = (index - 2) * itemHeight;
            ref.current.scrollTo({top: centerPosition, behavior: 'smooth'});
        }
    };
    return (
        <DateWheelPickerContainer>
            <Wheel ref={yearWheelRef} className="year-wheel">
                {years.map((year, index) => {
                    return (
                        <WheelItem
                            key={index}
                            className={index === selectedDateIdx.year ? 'selected' : Math.abs(selectedDateIdx.year - index) === 1 ? 'adj-1' : ''}
                            onClick={(e) => {
                                if (year === -1) return
                                handleItemClick(yearWheelRef, index, 40);
                            }}
                        >
                            {year === -1 ? "" : year}
                        </WheelItem>
                    );
                })}
            </Wheel>
            <div className="selected-area selected-area--year-upper"></div>
            <div className="selected-area selected-area--year-lower"></div>
            <Divider>/</Divider>
            <Wheel ref={monthWheelRef}>
                {months.map((month, index) => (
                    <WheelItem
                        key={index}
                        className={index === selectedDateIdx.month ? 'selected' : ''}
                        onClick={(e) => {
                            if (month === -1) return

                            setSelectedDateIdx(prev => ({...prev, month: index}));
                            handleItemClick(monthWheelRef, index, 40);
                        }}
                    >
                        {month === 0 ? "" : month}
                    </WheelItem>
                ))}
            </Wheel>
            <div className="selected-area selected-area--month-upper"></div>
            <div className="selected-area selected-area--month-lower"></div>
            <Divider>/</Divider>
            <Wheel ref={dayWheelRef}>
                {days.map((day, index) => (
                    <WheelItem
                        key={index}
                        className={index === selectedDateIdx.day ? 'selected' : ''}
                        onClick={(e) => {
                            if (day === -1) return
                            setSelectedDateIdx(prev => ({...prev, day: index}));
                            handleItemClick(dayWheelRef, index, 40);
                        }}
                    >
                        {day === 0 ? "" : day}
                    </WheelItem>
                ))}
            </Wheel>
            <div className="selected-area selected-area--day-upper"></div>
            <div className="selected-area selected-area--day-lower"></div>
        </DateWheelPickerContainer>
    );
};

export default DateWheelPicker;

const DateWheelPickerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    position: relative;

    .selected-area {
        border-top: 1px solid ${colors.primary[200]};
        border-bottom: 1px solid ${colors.primary[200]};
        position: absolute;
    }

    .selected-area--year-upper {
      width: 69px;
      top: calc(50% - 20px);
        left: calc(50% - 134px);
    }

    .selected-area--year-lower {
      width: 69px;
      top: calc(50% + 18px);
        left: calc(50% - 134px);
    }


    .selected-area--month-upper {
      margin: 0 15px;
      width: 39px;
      top: calc(50% - 20px);
      left: calc(50% - 26px);
    }

    .selected-area--month-lower {
      margin: 0 15px;
      width: 39px;
        top: calc(50% + 18px);
        left: calc(50% - 26px);
    }

    .selected-area--day-upper {
      margin: 0 15px;
      width: 39px;
        top: calc(50% - 20px);
        left: calc(50% + 72px);
    }

    .selected-area--day-lower {
        margin: 0 15px;
        width: 39px;
        top: calc(50% + 18px);
        left: calc(50% + 72px);
    }

    .selected-area-container {
        display: flex;
        position: absolute;
        top: 50%;
        translate: 0 -50%;
        width: 100%;
        justify-content: center;
        height: 40px;
    }
`;

const Wheel = styled.div`
    overflow-y: scroll;
    height: 200px;
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
        display: none;
    }

    scrollbar-width: none;

    & > div:not(:last-child) {
        scroll-snap-align: start;
    }
`;

const WheelItem = styled.div`
    text-align: center;
    user-select: none;
    font-size: 20px;
    opacity: 0.2;
    padding: 10px 15px;
    color: ${colors.black};
    height: 40px;

    &.selected {
        font-weight: 600;
        opacity: 1;
    }
  
    &.adj-1{
      font-weight: 400;
      opacity: 0.4;
    }
`;

const Divider = styled.div`
    margin: 0 20px;
    font-weight: 300;
    font-size: 30px;
    line-height: 33px;
    color: ${colors.gray[70]};
`;


const calculateCenterItemIndex = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current || !ref.current.firstChild) return null;

    const firstChildElement = ref.current.firstChild as HTMLElement;
    const itemHeight = firstChildElement.offsetHeight;
    const scrollOffset = ref.current.scrollTop;
    const wheelHeight = ref.current.clientHeight;

    return Math.round((scrollOffset + wheelHeight / 2 - 5) / itemHeight);
};

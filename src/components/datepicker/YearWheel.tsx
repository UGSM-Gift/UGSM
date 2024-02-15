import styled from 'styled-components';
import { useEffect, useRef, useState, WheelEventHandler } from 'react';

const YEAR = Array.from({ length: 1000 }, (_, i) => i + 2024);
const MONTHS = Array.from({ length: 1 }, (_, i) => i + 1);

const YearWheel = () => {
  const [selectableWheel, setSelectableWheel] = useState({
    years: [0, 0].concat(YEAR).concat([0, 0]),
    months: MONTHS,
  });
  const now = new Date();

  const [selectedDateIdx, setSelectedDateIdx] = useState({
    year: selectableWheel.years.indexOf(now.getFullYear()),
    month: selectableWheel.months.indexOf(now.getMonth()),
  });

  const yearRef = useRef<HTMLDivElement>(null);
  const selectedOptions = {
    root: yearRef.current,
    rootMargin: `-80px 0px`,
    threshold: Array.from({ length: 40 }, (_, i) => 0.025 * i),
  };

  useEffect(() => {
    const selectedOptions = Array.from({ length: 40 }, (_, i) => ({
      root: yearRef.current,
      rootMargin: `-80px 0px`,
      threshold: Array.from({ length: 40 }, (_, i) => 0.025 * i),
    }));
    const targets = document.querySelectorAll('.year-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!selectedDivRef.current) return;
        // let doesOverlap =Math.abs(entry.boundingClientRect.bottom -
        //     selectedDivRef.current.getBoundingClientRect().bottom) < 3;

        let doesOverlap =
          Math.abs(
            entry.boundingClientRect.bottom - selectedDivRef.current.getBoundingClientRect().bottom
          ) < 4;

        if (doesOverlap && entry.intersectionRatio > 0.1) {
          const newDateIdx = { ...selectedDateIdx };
          const currIdx = entry.target.getAttribute('data-idx');
          if (!currIdx) return;
          console.log(newDateIdx.year, currIdx, entry.target.textContent);
          newDateIdx.year = parseInt(currIdx);
          setSelectedDateIdx(newDateIdx);
        }
      });
    });
    if (selectedDivRef.current) {
      targets.forEach((target) => observer.observe(target));
    }

    return () => observer.disconnect();
  }, []);

  const selectedDivRef = useRef<HTMLDivElement>(null);

  const idxStyles = (index: number) => {
    if (selectedDateIdx.year === index) {
      return 'bold';
    } else if (selectedDateIdx.year - 1 == index || selectedDateIdx.year + 1 == index) {
      return 'first-adjacent-sib';
    } else if (selectedDateIdx.year - 2 == index || selectedDateIdx.year + 2 == index) {
      return 'second-adjacent-sib';
    } else {
      return 'other-sib';
    }
  };
  const [wheelStyles, setWheelStyle] = useState();

  const onScrollHandler = () => {};

  return (
    <OuterDiv>
      <div>
        <div>
          <div className='year' ref={yearRef} onScroll={onScrollHandler}>
            {selectableWheel.years.map((year, index) => (
              <div data-idx={index} className={`year-item`}>
                <span className={`${idxStyles(index)}`}>{year !== 0 ? year : ''}</span>
              </div>
            ))}
            <div className='selected' ref={selectedDivRef}></div>
          </div>
        </div>
      </div>
    </OuterDiv>
  );
};

const OuterDiv = styled.div`
  & > div {
    height: 300px;
    padding: 100px 0;

    & > div {
      position: relative;

      div {
        height: 30px;
      }
    }
  }
  .selected {
    top: 50%;
    translate: 0 -50%;
    position: absolute;
    width: 100%;
    height: 35px;
    //background: rgb(0,0,0,0.1)
  }
  div.year {
    overflow: scroll;
    width: 50px;
    height: 200px;
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
      display: none;
    }

    div:not(.selected) {
      display: flex;
      scroll-snap-align: center;
      height: 35px;
      align-items: center;
      justify-content: center;
    }
    span {
      transition: opacity 0.05s;
    }

    .bold {
      font-weight: bold;
    }

    .second-adjacent-sib {
      opacity: 0.5;
    }
    .other-sib {
      opacity: 0.3;
    }
  }
`;

export default YearWheel;

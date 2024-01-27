import styled from "styled-components";
import {useEffect, useRef, useState, WheelEventHandler} from "react";

const YEAR = Array.from({length: 100}, (_, i) => i + 2010)
const MONTH = Array.from({length: 1}, (_, i) => i + 1)



const VerticalDatepicker = () => {


    const [currentPosition, setCurrentPosition] = useState({
        year: 0,
        month: 0,
        day: 0,
    })

    const [currentStyles, setCurrentStyle] = useState({
        year: {
            translate: "0 0",
            marginTop: "0"
        },
        month: {
            translate: "0 0",
            marginTop: "0",
        },
    })

    const yearTimeoutHandle = useRef<NodeJS.Timeout | null>(null);

    const yearStyle = {
        translate: "0 0"
    }
    const yearRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const newStyles = {...currentStyles};
        newStyles.year = {
            translate: "0",
            // translate: `0 ${-currentPosition.year}px`,
            marginTop: `${currentPosition.year}px`
        }
        setCurrentStyle(newStyles)
    }, [currentPosition]);


    // const yearOnWheelHandler:WheelEventHandler<HTMLUListElement> = (e) => {
    //     if (yearTimeoutHandle.current) {
    //         clearTimeout(yearTimeoutHandle.current);
    //     }
    //     yearTimeoutHandle.current = setTimeout(()=>{
    //         const newPos = {...currentPosition}
    //         newPos.year = currentPosition.year + e.deltaY;
    //
    //         selectedDivRef.current.
    //
    //
    //         setCurrentPosition(newPos)
    //     }, 100)
    //
    // };

    useEffect(() => {
        const options = {
            root: yearRef.current,
            rootMargin: "0px 100px",
            threshold:1,
        }
        const targets = document.querySelectorAll(".year-item");


        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry) => {
                if(!selectedDivRef.current) return;
                let doesOverlap = entry.boundingClientRect.bottom <= selectedDivRef.current.getBoundingClientRect().bottom


                if (doesOverlap) {

                    console.log(
                        entry.boundingClientRect.bottom,
                        selectedDivRef.current.getBoundingClientRect().top,
                        selectedDivRef.current.getBoundingClientRect().bottom
                    )

                    console.log(entry.target.textContent)
                }
            });
        }, options)
        if(selectedDivRef.current){
            targets.forEach(target=>observer.observe(target))
        }
    }, []);

    const selectedDivRef = useRef<HTMLDivElement>(null);
    return(
        <OuterDiv>
            <div>
                <div>
                    <div className="year" ref={yearRef}>{YEAR.map(year => (
                        <div className="year-item">{year}</div>
                    ))}
                        <div className="selected" ref={selectedDivRef}></div>
                    </div>
                </div>
                {/*<ul>{MONTH.map(month => (*/}
                {/*    <li>{month}</li>*/}
                {/*))}</ul>*/}
            </div>
        </OuterDiv>
    )
}

const OuterDiv = styled.div`
    background-color:greenyellow;
    
    & > div {
        
        height:300px;
        padding:100px 0;
        
        & > div{
            position:relative;

            div{

                height:30px;
            }
        }
    } 
    .selected {
        top:50%;
        translate:0 -50%;
        position: absolute;
        width:100%;
        height:35px;
        background-color:red;
        opacity: 0.3;
    }
    div.year{
        overflow:scroll;
        width:50px;
        height:200px;
        scroll-snap-type: y mandatory;
        div:not(.selected){
            scroll-snap-align: center;
            height:35px;
            background-color:pink;
            text-align:center;
            justify-content: center;
        }
    }
`

export default VerticalDatepicker;
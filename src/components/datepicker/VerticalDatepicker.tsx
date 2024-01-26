import styled from "styled-components";

const YEAR = Array.from({length: 100}, (_, i) => i + 1950)
const MONTH = Array.from({length: 12}, (_, i) => i + 1)



const VerticalDatepicker = () => {

    return(
        <OuterDiv>
            <div>
                <ul>{YEAR.map(year=>(
                    <li>{year}</li>
                ))}
                </ul>
                <ul>{MONTH.map(month => (
                    <li>{month}</li>
                ))}</ul>
            </div>
        </OuterDiv>
    )
}

const OuterDiv = styled.div`
    background-color:greenyellow;
    
    & > div{
        position:relative;
        overflow:hidden;
    }
    
    ul{
        height:300px;
    }
`

export default VerticalDatepicker;
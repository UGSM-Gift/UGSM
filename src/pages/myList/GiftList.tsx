import React, { useEffect } from 'react';
import styled from "styled-components";
import {colors} from "../../styles/colors";
import DropdownSelector from "@components/common/DropdownSelector";
import DownIcon from '@assets/icons/downIcon.svg';

const giftItems = [
  {id:1, startedAt: "2023-10-05", endedAt: "2023-10-06"},
  {id:1, startedAt: "2023-10-05", endedAt: "2023-10-06"},
  {id:1, startedAt: "2023-10-05", endedAt: "2023-10-06"},
  {id:1, startedAt: "2023-10-05", endedAt: "2023-10-06"},
  {id:1, startedAt: "2023-10-05", endedAt: "2023-10-06"},
  {id:1, startedAt: "2023-10-05", endedAt: "2023-10-06"},
];

const GiftList = () => {
  return <OuterDiv>
    <div className="num-order-condition-container">
      <div className="item-num">총 {giftItems.length} 개</div>
      <div className="dropdown-selector-wrapper">
        <DropdownSelector className="dropdown-selector" onItemSelect={()=>{}}>
          <DropdownSelector.Display className="display"/>
          <DropdownSelector.ItemList className="item-list">
            <DropdownSelector.Item className="item" isInitial={true} id={1} name={"최신 순"}/>
            <DropdownSelector.Item id={2} name={"가격낮은 순"}/>
          </DropdownSelector.ItemList>
        </DropdownSelector>
      </div>
    </div>
    <GiftItemContainer>{giftItems.map(gift=>(
        <li>
        </li>
    ))}</GiftItemContainer>
  </OuterDiv>
};

export default GiftList;

const GiftItemContainer = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin-top:16px;
  overflow: scroll;
  scrollbar-width: none;
  height: calc(100vh - 242px);
  
  li {
    flex:1 0 135px;
    display: grid;
    width:100%;
    height:135px;
    background-color:#fff;
    border-radius: 16px;
    padding: 20px 16px;
  }
`;

const OuterDiv = styled.div`
  font-size: 15px;
  font-weight: 400;
  
  .num-order-condition-container{
    line-height: 16px;
    color: ${colors.gray[60]};
    display: flex;
    justify-content: space-between;
    height:36px;
    align-items: center;
  }
  .item-num{

  }
  
  .dropdown-selector-wrapper{
    .dropdown-selector{
      position: relative;
      .display{
        display: flex;
        align-items: center;
        justify-content: end;
        width:96px;
        &::after{
          display: block;
          content: "";
          width:24px;
          height:24px;
          background: center / contain no-repeat url(${DownIcon});
        }
        
        &.opened::after{
          transform: rotate(180deg)
        }
      }
      .item-list{
        position: absolute;
        text-align: end;
        right:24px;
        width:100%;
        top:100%;
        visibility: hidden;
        background: gray;
        &.opened{
          visibility: visible;
        }
      }
      .item{
        padding: 10px 0;
      }
    }
  }
`;
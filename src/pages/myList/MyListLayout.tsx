import {NavLink, Outlet} from "react-router-dom";
import BasicLayout from "../layout/BasicLayout";
import styled from "styled-components";
import HeartIcon from "@assets/icons/heartIcon.svg";
import {colors} from "../../styles/colors";
const MyListLayout = () => {
    return (
        <BasicLayout>
            <DibsButtonWrapper>
                <button><img alt="찜하기 버튼 아이콘" src={HeartIcon}/></button>
            </DibsButtonWrapper>
            <NavStyled>
                <NavLink to={"gift-list"}>내 리스트</NavLink>
                <NavLink to={"received-gifts"}>받은 선물</NavLink>
                <NavLink to={"given-gifts"}>내가 준 선물</NavLink>
            </NavStyled>
            <OutletWrapper>
                <Outlet/>
            </OutletWrapper>
        </BasicLayout>
    )
}

const NavStyled = styled.nav`
    display: flex;
    width: 100%;
    height: 46px;
    padding: 20px 33px 0 33px;
    justify-content: space-between;

    a {
        font-size: 15px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0;
        text-align: center;
    }

    a.active {
        color: ${colors.primary[400]};
        border-bottom: 2px solid ${colors.primary[400]}
    }
`

const DibsButtonWrapper = styled.div`
    height:56px;
    display: flex;
    align-items: center;
    justify-content: end;
    button{
        padding:12px;
        background: none;
    }
`

const OutletWrapper = styled.div`
    background-color: ${colors.gray[10]};
    flex: 1 0;
    padding:8px 16px;
`;

export default MyListLayout;
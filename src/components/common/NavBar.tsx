import { colors } from 'src/styles/colors';
import styled from 'styled-components';
import HomeIcon from '@assets/icons/home.svg';
import ListIcon from '@assets/icons/list.svg';
import HomeDIcon from '@assets/icons/homeD.svg';
import ListDIcon from '@assets/icons/listD.svg';
import UserIcon from '@assets/icons/user.svg';
import UserDIcon from '@assets/icons/userD.svg';
import { NavLink } from 'react-router-dom';
import { ROUTES_PATH } from 'src/constants/routes';

const NavBar = () => {
  return (
    <OuterDiv>
      <nav>
        <NavLink to={ROUTES_PATH.home}>
          <div className='menu-icon'>홈</div>
        </NavLink>
        <NavLink to={ROUTES_PATH.giftList}>
          <div className='menu-icon'>리스트</div>
        </NavLink>
        <NavLink to={ROUTES_PATH.myPage}>
          <div className='menu-icon'>MY</div>
        </NavLink>
      </nav>
    </OuterDiv>
  );
};

const OuterDiv = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  translate: -50%;
  width: 100%;
  max-width: 480px;
  min-width: 375px;
  height: 72px;
  padding-bottom: 16px;
  background-color: ${colors.whiteColor};
  box-shadow: rgba(155, 0, 89, 0.04) 0 -4px 12px;

  nav {
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 0 16px;

    .menu-icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 10px;
      color: #a2a9ad;
    }

    a {
      flex: 1 1;
      padding: 9px 29px;
    }

    .menu-icon::before {
      content: '';
      display: block;
      width: 24px;
      height: 24px;
      margin-bottom: 2px;
    }

    a.active .menu-icon {
      color: ${colors.primary[800]};
      font-weight: 500;
    }

    a:first-child .menu-icon::before {
      background: center / contain no-repeat url(${HomeDIcon});
    }
    a.active:first-child .menu-icon::before {
      background: center / contain no-repeat url(${HomeIcon});
    }
    a:nth-child(2) .menu-icon::before {
      background: center / contain no-repeat url(${ListDIcon});
    }
    a.active:nth-child(2) .menu-icon::before {
      background: center / contain no-repeat url(${ListIcon});
    }
    a:nth-child(3) .menu-icon::before {
      background: center / contain no-repeat url(${UserDIcon});
    }
    a.active:nth-child(3) .menu-icon::before {
      background: center / contain no-repeat url(${UserIcon});
    }
  }
`;

export default NavBar;

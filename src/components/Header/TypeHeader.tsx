import IconBtnWrapper from '@components/common/IconBtnWrapper';
import SettingIcon from 'src/assets/icons/SettingIcon';
import { common } from 'src/styles/common';
import styled from 'styled-components';
import RightHeader from './RightHeader';

//setting
export const SettingHeader = () => {
  return <RightHeader children={<SettingIcon />} />;
};

//Back
export const BackHeader = () => {
  return (
    <Header>
      <IconBtnWrapper onClick={() => {}}>{/* <IconLeft /> */}</IconBtnWrapper>
    </Header>
  );
};

//BackClose
export const BackCloseHeader = () => {
  return (
    <Header>
      <IconBtnWrapper onClick={() => {}}>{/* <IconLeft /> */}</IconBtnWrapper>
      <IconBtnWrapper onClick={() => {}}>{/* <IconX /> */}</IconBtnWrapper>
    </Header>
  );
};

//Alert
export const AlertHeader = () => {
  return <Header></Header>;
};

//Interactive
export const InteractiveHeader = () => {
  return <Header></Header>;
};

//login
export const LogoHeader = () => {
  return <Header></Header>;
};

const Header = styled.div`
  ${common.flexRow}
`;

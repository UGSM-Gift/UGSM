import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackIcon } from '@assets/icons/backIcon.svg';
import { ReactComponent as SettingIcon } from '@assets/icons/settingIcon.svg';
import { ROUTES_PATH } from 'src/constants/routes';

import Header from './Header';

//setting
export const MyPageHeader = () => {
  const navigator = useNavigate();
  return (
    <Header
      rightContent2={<SettingIcon />}
      rightContentOnClick2={() => navigator(ROUTES_PATH.setting)}
    />
  );
};

export const SettingHeader = () => {
  const navigator = useNavigate();
  return (
    <Header
      leftContent1={<BackIcon />}
      leftContentOnClick={() => navigator(ROUTES_PATH.myPage)}
      title='설정'
    />
  );
};
export const UserProfileEditHeader = () => {
  const navigator = useNavigate();
  return (
    <Header
      leftContent1={<BackIcon />}
      leftContentOnClick={() => navigator(ROUTES_PATH.setting)}
      title='설정'
      rightContent2='수정'
    />
  );
};

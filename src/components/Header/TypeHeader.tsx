import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackIcon } from '@assets/icons/backIcon.svg';
import { ReactComponent as SettingIcon } from '@assets/icons/settingIcon.svg';
import { ROUTES_PATH } from 'src/constants/routes';

import Header from './Header';
import { userDataPost } from 'src/api/userData';
import { UserData } from 'src/types/userData';

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

const handleEdit = async (userData: UserData) => {
  const user = await userDataPost(userData);
  console.log(user);
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

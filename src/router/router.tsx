import { createBrowserRouter } from 'react-router-dom';
import { ROUTES_PATH } from 'src/constants/routes';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';

import Ouath from 'src/pages/Ouath';
import Setting from 'src/pages/myPage/Setting';
import UserAddInfo from 'src/pages/Account';
import MyPage from 'src/pages/myPage/MyPage';
import UserProfileEdit from 'src/pages/myPage/UserProfileEdit';
import NotificationSetting from 'src/pages/myPage/NotificationSetting';
import AccountDelete from 'src/pages/myPage/AccountDelete';
import Anniversary from 'src/pages/myPage/Anniversary';

const router = createBrowserRouter([
  {
    path: ROUTES_PATH.home,
    element: <Home />,
  },
  {
    path: ROUTES_PATH.login,
    element: <Login />,
  },
  {
    path: ROUTES_PATH.account,
    element: <UserAddInfo />,
  },
  {
    path: ROUTES_PATH.oauth,
    element: <Ouath />,
  },
  {
    path: ROUTES_PATH.myPage,
    element: <MyPage />,
  },
  {
    path: ROUTES_PATH.anniversary,
    element: <Anniversary />,
  },
  {
    path: ROUTES_PATH.setting,
    element: <Setting />,
  },
  {
    path: ROUTES_PATH.userProfileEdit,
    element: <UserProfileEdit />,
  },
  {
    path: ROUTES_PATH.notificationSetting,
    element: <NotificationSetting />,
  },
  {
    path: ROUTES_PATH.accountDelete,
    element: <AccountDelete />,
  },
]);

export default router;

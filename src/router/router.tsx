import { createBrowserRouter } from 'react-router-dom';
import { ROUTES_PATH } from 'src/constants/routes';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import MyPage from 'src/pages/MyPage';
import Ouath from 'src/pages/Ouath';
import Setting from 'src/pages/Setting';
import UserAddInfo from 'src/pages/UserAddInfo';

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
    path: ROUTES_PATH.addUserInfo,
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
    path: ROUTES_PATH.setting,
    element: <Setting />,
  },
]);

export default router;

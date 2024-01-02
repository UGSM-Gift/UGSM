import { createBrowserRouter } from 'react-router-dom';
import { ROUTES_PATH } from 'src/constants/routes';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import Main from 'src/pages/Main';
import Ouath from 'src/pages/Ouath';
import UserAddInfo from 'src/pages/UserAddInfo';

const router = createBrowserRouter([
  {
    path: ROUTES_PATH.main,
    element: <Main />,
  },
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
    path: ROUTES_PATH.oauthKakao,
    element: <Ouath socialLogin='kakao' />,
  },
  {
    path: ROUTES_PATH.oauthNaver,
    element: <Ouath socialLogin='naver' />,
  },
  {
    path: ROUTES_PATH.oauthGoogle,
    element: <Ouath socialLogin='google' />,
  },
]);

export default router;

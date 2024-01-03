import { createBrowserRouter } from 'react-router-dom';
import { ROUTES_PATH } from 'src/constants/routes';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import Ouath from 'src/pages/Ouath';
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
]);

export default router;

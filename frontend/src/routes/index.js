import { createBrowserRouter } from 'react-router-dom';
import App from '../App.js';
import RegisterPage from '../pages/RegisterPage';
import CheckEmailPage from '../pages/CheckEmailPage.js';
import CheckPasswordPage from '../pages/CheckPasswordPage.js';
import Home from '../pages/Home.js';
import MessagePage from '../components/MessagePage.js';
import AuthLayouts from '../layout/index.js';
import ForgotPassword from '../pages/ForgotPassword.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'register',
        element: (
          <AuthLayouts>
            {' '}
            <RegisterPage />
          </AuthLayouts>
        ),
      },
      {
        path: 'email',
        element: (
          <AuthLayouts>
            <CheckEmailPage />
          </AuthLayouts>
        ),
      },
      {
        path: 'password',
        element: (
          <AuthLayouts>
            <CheckPasswordPage />
          </AuthLayouts>
        ),
      },
      {
        path: 'forgot-password',
        element: (
          <AuthLayouts>
            <ForgotPassword />
          </AuthLayouts>
        ),
      },
      {
        path: '',
        element: <Home />,
        children: [
          {
            path: ':userId',
            element: <MessagePage />,
          },
        ],
      },
    ],
  },
]);

export default router;
